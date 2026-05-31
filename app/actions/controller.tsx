import {createController} from 'remix/router';

import {assetServer} from '../assets.ts';
import {routes} from '../routes.ts';
import {HomePage} from '../ui/home-page.tsx';

import {AI_TXT, ROBOTS_TXT} from './static-text.ts';

export default createController(routes, {
  actions: {
    ai() {
      return new Response(AI_TXT, {
        headers: {'Content-Type': 'text/plain'},
        status: 200
      });
    },
    async assets(context) {
      return (
        (await assetServer.fetch(context.request)) ??
        new Response('Not Found', {status: 404})
      );
    },
    home(context) {
      return context.render(<HomePage />);
    },
    robots() {
      return new Response(ROBOTS_TXT, {
        headers: {'Content-Type': 'text/plain'},
        status: 200
      });
    }
  }
});
