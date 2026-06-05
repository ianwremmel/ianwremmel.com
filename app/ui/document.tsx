import type {Handle, RemixNode} from 'remix/ui';

export interface DocumentProps {
  children?: RemixNode;
  head?: RemixNode;
  title?: string;
}

const DEFAULT_TITLE = 'Ian W. Remmel';

export function Document(handle: Handle<DocumentProps>) {
  return () => {
    const {children, head, title = DEFAULT_TITLE} = handle.props;

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="author" content="Ian W. Remmel" />
          <meta name="title" content="Ian W. Remmel" />
          <meta name="og:title" content="Ian W. Remmel" />
          <meta name="twitter:title" content="Ian W. Remmel" />
          <meta name="twitter:creator" content="Ian W. Remmel" />
          <meta name="robots" content="noai, noimageai" />
          <link rel="stylesheet" href="/root.css" />
          <link rel="me" href="https://mastodon.social/@ianwremmel" />
          <title>{title}</title>
          {head}
        </head>
        <body>
          {children}
          {/*
            The hydration runtime is pre-compiled to a static file at build
            time (see `build:assets`) and served from `public/`, so production
            never depends on the asset server's runtime compilation.
          */}
          <script type="module" src="/assets/entry.js"></script>
        </body>
      </html>
    );
  };
}
