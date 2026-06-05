import {get, route} from 'remix/routes';

export const routes = route({
  ai: get('/ai.txt'),
  blog: {
    index: '/blog',
    show: '/blog/:slug'
  },
  home: '/',
  robots: get('/robots.txt')
});
