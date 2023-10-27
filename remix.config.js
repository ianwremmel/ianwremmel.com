const baseConfig =
  process.env.NODE_ENV === 'production'
    ? {
        // server: './server.ts',
      }
    : {};

/**  @type {import('@remix-run/dev').AppConfig} */
const config = {
  ...baseConfig,
  ignoredRouteFiles: ['**/.*'],
  serverBuildPath: './.netlify/functions-internal/server.mjs',
  serverModuleFormat: 'esm'
};

export default config;
