'use strict';
const path = require('path');

module.exports = {
  plugins: [
    {
      options: {
        name: 'posts',
        path: path.resolve(__dirname, 'content', 'posts')
      },
      resolve: 'gatsby-source-filesystem'
    },
    {
      options: {
        plugins: [
          {
            options: {
              maxWidth: 590
            },
            resolve: 'gatsby-remark-images'
          },
          {
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem'
            },
            resolve: 'gatsby-remark-responsive-iframe'
          },
          'gatsby-remark-embed-gist',
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants'
        ]
      },
      resolve: 'gatsby-transformer-remark'
    },
    {
      options: {
        name: 'assets',
        path: path.resolve(__dirname, 'src', 'assets')
      },
      resolve: 'gatsby-source-filesystem'
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-catch-links',
    {
      options: {
        anonymize: true,
        trackingId: 'UA-7509764-1'
      },
      resolve: 'gatsby-plugin-google-analytics'
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    // 'gatsby-plugin-netlify' should be last in the array
    'gatsby-plugin-netlify'
  ],
  siteMetadata: {
    author: 'Ian Remmel',
    description: 'Musings and such',
    siteUrl: 'https://www.ianwremmel.com',
    social: {
      github: 'ianwremmel',
      twitter: 'ianwremmel'
    },
    title: 'ianwremmel.com'
  }
};
