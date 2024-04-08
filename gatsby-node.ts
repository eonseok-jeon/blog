const path = require('path');

exports.onCreateWebpackConfig = ({ actions }: { actions: any }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, 'src/shared/assets'),
        '@components': path.resolve(__dirname, 'src/shared/components'),
        '@constants': path.resolve(__dirname, 'src/shared/constants'),
        '@styles': path.resolve(__dirname, 'src/shared/styles'),
      },
    },
  });
};
