module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
      desc: "A new blog",
  },
  plugins: [
      {
          resolve: "gatsby-source-contentful",
          options: {
              spaceId: "f8q8u9spzyxc",
              accessToken: "3feaec77519940e180cc6dea34d634ecc536345e46d7ffc5c9d676db4d849931"
          }
      },
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-styled-components',
      {
        resolve: 'gatsby-source-filesystem',
          options: {
          name: 'img',
          path: `${__dirname}/src/images`
          }
      },
      {
          resolve: 'gatsby-source-filesystem',
          options: {
              name: 'img',
              path: `${__dirname}/static/assets`
          }
      },
      {
          resolve: 'gatsby-source-filesystem',
          options: {
              name: 'src',
              path: `${__dirname}/src/`
          }
      },
      'gatsby-transformer-remark',
      'gatsby-transformer-sharp',
      'gatsby-plugin-sharp'
  ]
};

// pathPrefix: "/levelupgatsby",