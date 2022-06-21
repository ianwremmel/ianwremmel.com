import assert from 'assert';

import {createClient, gql} from '@urql/core';

import type {
  GetPostQueryQuery,
  IndexPagePostFragment,
  ListPostsQueryQuery,
  PagePagePostFragment
} from '../../__generated__/graphql';

export const {CONTENTFUL_GRAPHQL_ENDPOINT} = process.env;
export const {CONTENTFUL_TOKEN} = process.env;

const IndexPagePost = gql`
  fragment IndexPagePost on Post {
    createdAt
    excerpt
    slug
    sys {
      id
    }
    title
  }
`;

const ListPostsQuery = gql`
  query ListPostsQuery {
    postCollection(limit: 10, order: sys_firstPublishedAt_ASC) {
      items {
        ...IndexPagePost
      }
    }
  }
  ${IndexPagePost}
`;

function getClient() {
  assert(
    typeof CONTENTFUL_GRAPHQL_ENDPOINT === 'string',
    'CONTENTFUL_GRAPHQL_ENDPOINT must be defined'
  );
  assert(
    typeof CONTENTFUL_TOKEN === 'string',
    'CONTENTFUL_TOKEN must be defined'
  );
  return createClient({
    fetchOptions() {
      return {
        headers: {
          Authorization: `Bearer ${CONTENTFUL_TOKEN}`
        }
      };
    },
    url: CONTENTFUL_GRAPHQL_ENDPOINT
  });
}

export async function listPosts(): Promise<
  (IndexPagePostFragment | null)[] | null
> {
  const {error, data} = await getClient()
    .query<ListPostsQueryQuery>(ListPostsQuery)
    .toPromise();
  if (error) {
    throw error;
  }

  return data?.postCollection?.items ?? null;
}

const PagePagePost = gql`
  fragment PagePagePost on Post {
    body
    authorCollection(limit: 10) {
      items {
        name
        website
        profilePhoto {
          description
          title
          url
        }
        biography
      }
    }
    sys {
      publishedAt
    }
    title
  }
`;

const GetPostQuery = gql`
  query GetPostQuery($slug: String!) {
    postCollection(limit: 2, where: {slug: $slug}) {
      items {
        ...PagePagePost
      }
    }
  }
  ${PagePagePost}
`;
export async function getPost({
  slug
}: {
  slug: string;
}): Promise<PagePagePostFragment | null> {
  const {data, error} = await getClient()
    .query<GetPostQueryQuery>(GetPostQuery, {slug})
    .toPromise();
  if (error) {
    throw error;
  }

  if ((data?.postCollection?.items?.length ?? 0) === 0) {
    return null;
  }

  assert(
    data?.postCollection?.items?.length === 1,
    'Found multiple posts with same slug'
  );

  return data.postCollection.items[0];
}
