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
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          localIdentName: process.env.NODE_ENV === 'production' ? '[hash:base64:5]' : '[local]--[hash:base64:5]',
          implementation: require('sass'),
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-external-links',
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `guylian.me`,
    //     short_name: `guylian.me`,
    //     start_url: `/`,
    //     background_color: `#ffffff`,
    //     theme_color: `#bf1f55`,
    //     display: `minimal-ui`,
    //     // icon: `src/images/gatsby-icon.png`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: 'UA-79527805-1',
        head: true,
        anonymize: true,
      },
    },
  ],
};
