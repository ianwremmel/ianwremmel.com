import {renderWith} from 'remix/middleware/render';
import {createHtmlResponse} from 'remix/response/html';
import type {RemixNode} from 'remix/ui';
import {renderToStream} from 'remix/ui/server';

export function render() {
  return renderWith(
    ({request}) =>
      function renderNode(node: RemixNode, init?: ResponseInit) {
        // This site renders to static HTML and ships a pre-compiled hydration
        // bundle (see `build:assets`), so there are no runtime `clientEntry`
        // components to resolve and no need for the asset server here.
        const stream = renderToStream(node, {signal: request.signal});

        return createHtmlResponse(stream, init);
      }
  );
}
