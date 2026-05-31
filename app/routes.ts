import {get, route} from 'remix/routes';

export const routes = route({
  ai: get('/ai.txt'),
  assets: get('/assets/*path'),
  blog: {
    index: '/blog',
    show: '/blog/:slug'
  },
  home: '/',
  robots: get('/robots.txt')
});
