import type {Handle} from 'remix/ui';

import {Document} from './document.tsx';
import {Navbar} from './navbar.tsx';
import {PublicationDate} from './publication-date.tsx';

export interface BlogPostPageProps {
  post: {
    title?: string | null;
    body: string;
    sys: {publishedAt?: string | null};
  };
}

export function BlogPostPage(handle: Handle<BlogPostPageProps>) {
  return () => {
    const {post} = handle.props;
    const title = post.title ?? '';

    return (
      <Document title={`${title} — Ian W. Remmel`}>
        <Navbar />
        <div className="wrapper">
          <main>
            <article className="blog-post h-card">
              <div className="d-flex">
                <div className="me-5">
                  {post.sys.publishedAt && (
                    <PublicationDate
                      className="dt-published"
                      timestamp={post.sys.publishedAt}
                    />
                  )}
                </div>

                <div>
                  <h1 className="p-name">{title}</h1>
                  <div className="e-content" innerHTML={post.body}></div>
                </div>
              </div>
            </article>
          </main>
        </div>
      </Document>
    );
  };
}
