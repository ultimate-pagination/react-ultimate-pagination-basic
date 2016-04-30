module.exports = {
  entry: './src/react-ultimate-pagination-basic.js',
  output: {
    path: './dist',
    library: 'reactUltimatePaginationBasic',
    libraryTarget: 'umd',
  },
  externals: [
    'react'
  ],
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
