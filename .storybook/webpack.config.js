const path = require("path");

module.exports = ({ config }) => {
  //scss
  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../scss'),
  });

  // Components
  config.resolve.alias['@/components'] = path.resolve(
    __dirname,
    '../src/components/'
  );

  return config;
};
