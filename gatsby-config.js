module.exports = {
  siteMetadata: {
    title: `Guylian Cox - Developer`,
    description: ``,
    author: `@ephys`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `public`,
        path: `${__dirname}/src/public`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-remark-source-name`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `guylian.me`,
        short_name: `guylian.me`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#bf1f55`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`,
      },
    },
  ],
};
