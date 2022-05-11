'use strict';

/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  ignoredRouteFiles: ['**/.*'],
  server: './server.js',
  serverBuildTarget: 'netlify'
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: ".netlify/functions-internal/server.js",
  // publicPath: "/build/",
};
