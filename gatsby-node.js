'use strict';

exports.createPages = function createPages({actions: {createRedirect}}) {
  createRedirect({
    fromPath: `/business-card`,
    isPermanent: false,
    redirectInBrowser: true,
    toPath: `/`
  });
};
