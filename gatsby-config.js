module.exports = {
  siteMetadata: {
    title: `Warren's Portfolio`,
    description: `My little section of the web, built with gatsby`,
    author: `DaedalusG`,
    image: `/src/components/images/headshot.jpg`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'project',
        path: './data'
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `warrens-gatsby-portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/puzzle-16x16.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-anchor-links`,
  ],
}