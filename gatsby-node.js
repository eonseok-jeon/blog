const path = require('path');
const postTemplate = path.resolve('./src/templates/PostTemplate.jsx');

const sanitizeTitle = (title) => {
  return title.replace(/[?&=]/g, '');
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, 'src/shared/assets'),
        '@components': path.resolve(__dirname, 'src/shared/components'),
        '@constants': path.resolve(__dirname, 'src/shared/constants'),
        '@contexts': path.resolve(__dirname, 'src/shared/contexts'),
        '@styles': path.resolve(__dirname, 'src/shared/styles'),
      },
    },
  });
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          frontmatter {
            title
            subTitle
            date
            tag
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 1040)
              }
            }
            thumbnail_alt
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('Error loading MDX result', result.errors);
  }

  // Create blog post pages.
  const posts = result.data.allMdx.nodes;

  // you'll call `createPage` for each result
  posts.forEach((node) => {
    const sanitizedTitle = sanitizeTitle(node.frontmatter.title);

    createPage({
      // As mentioned above you could also query something else like frontmatter.title above and use a helper function
      // like slugify to create a slug
      path: `${node.frontmatter.tag}/${sanitizedTitle}`,
      // Provide the path to the MDX content file so webpack can pick it up and transform it into JSX
      // component: node.internal.contentFilePath,
      component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id },
    });
  });
};
