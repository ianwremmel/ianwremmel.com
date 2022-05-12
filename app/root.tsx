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

export const meta: MetaFunction = () => ({
  author: 'Ian W. Remmel',
  charset: 'utf-8',
  'og:title': 'Ian W. Remmel',
  title: 'Ian W. Remmel',
  'twitter:creator': 'Ian W. Remmel',
  'twitter:title': 'Ian W. Remmel',
  viewport: 'width=device-width,initial-scale=1'
});

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
