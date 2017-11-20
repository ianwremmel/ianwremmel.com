module.exports = {
  plugins: [
    'gatsby-plugin-catch-links',
    {
      options: {
        anonymize: true,
        trackingId: ' UA-7509764-1'
      },
      resolve: 'gatsby-plugin-google-analytics'
    },
    'gatsby-plugin-react-next',
    'gatsby-plugin-react-helmet',
    // 'gatsby-plugin-netlify' should be last in the array
    'gatsby-plugin-netlify'
  ],
  siteMetadata: {title: 'Gatsby Default Starter'}
};
