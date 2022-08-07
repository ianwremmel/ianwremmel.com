'use strict';

/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  ignoredRouteFiles: ['**/.*'],
  server: './server.js',
  serverBuildTarget: 'netlify',
  serverDependenciesToBundle: [
    // This is suppsed to work, but the remix folks haven't quite gotten it
    // working yet...
    // ...getDependenciesToBundle(
    //   'rehype-stringify',
    //   'remark-gfm',
    //   'remark-parse',
    //   'remark-rehype',
    //   'unified'
    // )
    // ...so we'll just bundle everything.
    /./
  ]
};
