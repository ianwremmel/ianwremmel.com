import type {MetaFunction} from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react';

// @ts-expect-error - I'm not sure where the remix definition for this is
// supposed to come from
import styles from './root.css';

export const meta: MetaFunction = () => [
  {content: 'Ian W. Remmel', name: 'author'},
  {content: 'utf-8', name: 'charset'},
  {content: 'Ian W. Remmel', name: 'og:title'},
  {content: 'noai, noimageai', name: 'robots'},
  {content: 'Ian W. Remmel', name: 'title'},
  {content: 'Ian W. Remmel', name: 'twitter:creator'},
  {content: 'Ian W. Remmel', name: 'twitter:title'},
  {content: 'width=device-width,initial-scale=1', name: 'viewport'}
];

export const links = () => [
  {
    href: styles,
    rel: 'stylesheet'
  }
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
