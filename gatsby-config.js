'use strict';

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      options: {
        name: 'assets',
        path: `${__dirname}/src/assets`
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
    // 'gatsby-plugin-netlify' should be last in the array
    'gatsby-plugin-netlify'
  ],
  siteMetadata: {
    author: 'Ian W. Remmel',
    description: '',
    title: 'Ian W. Remmel'
  }
};
