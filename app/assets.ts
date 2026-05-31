import {createAssetServer} from 'remix/assets';

const rootDir = process.cwd();

export const assetServer = createAssetServer({
  allow: ['app/assets/**', 'node_modules/**'],
  basePath: '/assets',
  deny: ['app/**/*.server.*'],
  fileMap: {
    'app/*path': 'app/*path',
    'node_modules/*path': 'node_modules/*path'
  },
  minify: process.env.NODE_ENV === 'production',
  rootDir,
  scripts: {
    define: {
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV ?? 'development'
      )
    }
  },
  sourceMaps: process.env.NODE_ENV === 'development' ? 'external' : undefined
});
