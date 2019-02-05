'use strict';

module.exports = {
  plugins: [
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
    'gatsby-plugin-react-helmet',
    // 'gatsby-plugin-netlify' should be last in the array
    'gatsby-plugin-netlify'
  ],
  siteMetadata: {title: 'Ian W. Remmel'}
};
