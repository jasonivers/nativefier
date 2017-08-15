const electronPublicApi = ['electron'];

const nodeModules = {};
electronPublicApi.forEach((apiString) => {
  nodeModules[apiString] = `commonjs ${apiString}`;
});

module.exports = {
  target: 'node',
  output: {
    filename: 'main.js',
  },
  node: {
    global: false,
    __dirname: false,
  },
  externals: nodeModules,
  module: {
    loaders: [
      { loader: 'json-loader', test: /\.json$/ },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
  devtool: 'source-map',
};
