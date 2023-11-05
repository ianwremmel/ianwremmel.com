import type {MetaFunction} from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react';

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
  },
  {
    href: 'https://mastodon.social/@ianwremmel',
    rel: 'me'
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
