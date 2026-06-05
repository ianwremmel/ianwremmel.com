import type {Handle} from 'remix/ui';

import type {IndexPagePostFragment} from '../../__generated__/graphql.ts';

import {Document} from './document.tsx';
import {Hyperlink} from './hyperlink.tsx';
import {Navbar} from './navbar.tsx';
import {PublicationDate} from './publication-date.tsx';

export interface BlogIndexPageProps {
  posts: IndexPagePostFragment[];
}

export function BlogIndexPage(handle: Handle<BlogIndexPageProps>) {
  return () => {
    const {posts} = handle.props;

    return (
      <Document title="Blog — Ian W. Remmel">
        <Navbar />
        <div className="wrapper">
          <ul className="blog-list">
            {posts.map((post) => {
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
                            innerHTML={description}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Document>
    );
  };
}
