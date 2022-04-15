require("dotenv").config()
import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `My Portfolio Site`,
    siteUrl: `https://www.chesteralan.com/`,
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GATSBY_GTAG_ID,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `./src/images/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-yaml`,
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `./content/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `./content/blog/`,
      },
    },
  ],
};

export default config;
