const path = require('path');

module.exports = ({ config, mode }) => {
  config.module.rules.push(
    {
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]],
      },
    },
    {
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loaders: ['file-loader'],
      include: path.resolve(__dirname, '../'),
    },
  );
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
