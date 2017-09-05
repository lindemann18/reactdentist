var webpack = require('webpack');
var HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require('path');

const VENDOR_LIBS = ['react','react-dom',"axios",
"react-redux","react-router","redux","redux-form",
"redux-promise","lodash","react-toastr","react-spinkit",
"react-router-dom","react-bootstrap","react-addons-css-transition-group",
"babel-preset-stage-1"
];


module.exports = {
  entry: {
    bundle:'./src/index.js',
    vendor:VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath:'/'
  },
  module: {
    rules:[
      {
        use:'babel-loader',
        test:/\.js$/,
        exclude:/node_modules/
      },
      {
        use:['style-loader','css-loader'],
        test:/\.css$/
      }

    ] 
  },
   plugins:[
    new webpack.optimize.CommonsChunkPlugin({
      names:['vendor','manifest']
    }),
    new HtmlWebpackPlugin({
      template:'src/index.html'
    })
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    inline:true
  }
};
