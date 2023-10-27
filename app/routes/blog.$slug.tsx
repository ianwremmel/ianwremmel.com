import assert from 'assert';

import type {LoaderFunction} from '@remix-run/node';
import {useLoaderData} from '@remix-run/react';

import {PublicationDate} from '../components/molecules/publication-date';
import {getPost} from '../lib/contentful.server';
import {render} from '../lib/markdown.server';

export const loader: LoaderFunction = async ({params}) => {
  const {slug} = params;
  assert(slug, 'Should not be able to get here without a slug parameter');

  const post = await getPost({slug});
  if (post === null) {
    throw new Response('No post for that slug slug', {
      status: 404
    });
  }
  return {
    post: {
      ...post,
      body: post.body && (await render(post.body))
    }
  };
};

export default function BlogPage() {
  const {post} = useLoaderData<typeof loader>();
  return (
    <>
      <main>
        <article className="blog-post h-card">
          <div className="d-flex">
            <div className="me-5">
              <PublicationDate
                className="dt-published"
                timestamp={post.sys.publishedAt}
              />
            </div>

            <div>
              <h1 className="p-name">{post.title}</h1>
              <div
                className="e-content"
                dangerouslySetInnerHTML={{__html: post.body}}
              ></div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
