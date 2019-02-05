'use strict';

const path = require('path');

const {createFilePath} = require('gatsby-source-filesystem');

exports.createPages = async function createPages(args) {
  createRedirects(args);
  await createBlogPosts(args);
};

exports.onCreateNode = ({node, actions, getNode}) => {
  const {createNodeField} = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({getNode, node});
    createNodeField({
      name: 'slug',
      node,
      value
    });
  }
};

function createRedirects({actions: {createRedirect}}) {
  createRedirect({
    fromPath: '/business-card',
    isPermanent: false,
    redirectInBrowser: true,
    toPath: '/'
  });
}

async function createBlogPosts({graphql, actions: {createPage}}) {
  const template = path.resolve('./src/templates/post.js');

  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: {fields: [frontmatter___date], order: DESC}
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  const posts = result.data.allMarkdownRemark.edges;

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      component: template,
      context: {
        next,
        previous,
        slug: post.node.fields.slug
      },
      path: `/posts${post.node.fields.slug}`
    });
  });
}
