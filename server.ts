import type {Context} from '@netlify/functions';
import {createRequestHandler} from '@netlify/remix-adapter';
import * as build from '@remix-run/dev/server-build';

const handle = createRequestHandler({
  // @ts-expect-error
  build,
  mode: process.env.NODE_ENV
});

export default function handler(request: Request, context: Context) {
  return handle(request, context);
}
