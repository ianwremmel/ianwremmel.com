// Remix 3 does not yet ship an official Netlify adapter, so this small
// function bridges Netlify's Fetch-based function runtime to the app router.
// Static files in `public/` are served by Netlify's CDN first (see the
// catch-all redirect in `netlify.toml`); everything else lands here and is
// rendered by the same router used by the standalone Node server.
import {router} from '../../app/router.ts';

export default async function handler(request: Request): Promise<Response> {
  try {
    return await router.fetch(request);
  } catch (error) {
    console.error(error);
    return new Response('Internal Server Error', {status: 500});
  }
}
