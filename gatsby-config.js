module.exports = {
  plugins: [
    'gatsby-plugin-typography',
    {
      options: {
        name: 'src',
        path: `${__dirname}/src/`
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
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    // 'gatsby-plugin-netlify' should be last in the array
    'gatsby-plugin-netlify'
  ],
  siteMetadata: {title: 'Ian W. Remmel'}
};
