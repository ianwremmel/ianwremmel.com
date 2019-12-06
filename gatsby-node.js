/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

'use strict';

exports.createPages = function createPages({actions: {createRedirect}}) {
  createRedirect({
    fromPath: `/business-card`,
    isPermanent: false,
    redirectInBrowser: true,
    toPath: `/`
  });
};

// You can delete this file if you're not using it
