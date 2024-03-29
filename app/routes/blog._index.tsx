import {useLoaderData} from '@remix-run/react';

import {IndexPagePostFragment} from '../../__generated__/graphql';
import {Hyperlink} from '../components/atoms/hyperlink';
import {PublicationDate} from '../components/molecules/publication-date';
import {listPosts} from '../lib/contentful.server';
import {render} from '../lib/markdown.server';

export const loader = async () => {
  const posts = (await listPosts()) ?? [];

  const postsWithRenderedDescriptions = await Promise.all(
    posts.map(async (post) => {
      const description = post?.description && (await render(post.description));
      return {...post, description} as IndexPagePostFragment;
    })
  );

  return {posts: postsWithRenderedDescriptions};
};

export default function BlogPage() {
  const {posts} = useLoaderData<typeof loader>();
  return (
    <>
      <ul className="blog-list">
        {posts?.map((post) => {
          if (!post) {
            return null;
          }
          const {
            createdAt,
            description,
            sys: {id},
            slug,
            title
          } = post;

          return (
            <li className="h-entry blog-list__item" key={id}>
              <div className="card blog-list__card">
                <div className="card-body">
                  <h2 className="card-title">
                    <Hyperlink href={`/blog/${slug}`}>{title}</Hyperlink>
                  </h2>
                  <div style={{display: 'flex'}}>
                    {createdAt && (
                      <div className="blog-list__publication-date">
                        <PublicationDate
                          className="dt-published"
                          timestamp={createdAt}
                        />
                      </div>
                    )}

                    {description && (
                      <div
                        className="p-summary blog-list__excerpt"
                        dangerouslySetInnerHTML={{
                          __html: description
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
