module.exports = {
  siteMetadata: {
    title: `Warren's Portfolio`,
    description: `My little section of the web, built with gatsby`,
    author: `DaedalusG`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'project',
        path: './data'
      }
    },
    `gatsby-transformer-json`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/puzzle-32x32.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-anchor-links`,
  ],
}