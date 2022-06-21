import {useLoaderData} from '@remix-run/react';

import {Hyperlink} from '../../components/atoms/hyperlink';
import {listPosts} from '../../lib/contentful.server';
import type {LoaderData} from '../../types';

export const loader = async () => {
  return {posts: await listPosts()};
};

export default function BlogPage() {
  const {posts} = useLoaderData<LoaderData<typeof loader>>();
  return (
    <>
      <ul>
        {posts?.map((post) => {
          if (!post) {
            return null;
          }
          const {
            createdAt,
            excerpt,
            sys: {id},
            slug,
            title
          } = post;
          return (
            <li className="h-entry" key={id}>
              <Hyperlink href={`/blog/${slug}`}>{title}</Hyperlink>
              {/*<h1 className="p-name">{title}</h1>*/}
              {/*<Time className="dt-published" timestamp={createdAt} />*/}
              {/*<div className="p-summary">*/}
              {/*  {documentToReactComponents(excerpt.json)}*/}
              {/*</div>*/}
            </li>
          );
        })}
      </ul>
    </>
  );
}
