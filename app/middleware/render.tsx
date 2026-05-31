import * as path from 'node:path';

import {renderWith} from 'remix/middleware/render';
import {createHtmlResponse} from 'remix/response/html';
import type {RemixNode} from 'remix/ui';
import {renderToStream} from 'remix/ui/server';

import {assetServer} from '../assets.ts';

export function render() {
  return renderWith(
    ({request}) =>
      function renderNode(node: RemixNode, init?: ResponseInit) {
        const stream = renderToStream(node, {
          // Server rendering turns client entries into browser module URLs.
          async resolveClientEntry(entryId, component) {
            if (!entryId.startsWith('file://')) {
              throw new Error(
                `Expected \`import.meta.url\` for clientEntry ID, received '${entryId}'`
              );
            }

            return {
              exportName:
                entryId.split('#')[1] ||
                component.name ||
                titleCaseFileName(entryId),
              href: await assetServer.getHref(entryId)
            };
          },
          signal: request.signal
        });

        return createHtmlResponse(stream, init);
      }
  );
}

function titleCaseFileName(fileUrl: string): string {
  const url = new URL(fileUrl);
  const fileName = path.basename(url.pathname, path.extname(url.pathname));
  return fileName
    .split(/[^A-Za-z0-9]+/)
    .filter(Boolean)
    .map((segment) => segment[0]!.toUpperCase() + segment.slice(1))
    .join('');
}
