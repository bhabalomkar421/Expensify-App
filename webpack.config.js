const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DotEnv = require('dotenv');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

DotEnv.config({path: '.env'});

module.exports = (env) => {
  const isProduction = env === 'production';

  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public','dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },{
        test: /\.s?css$/,
        use: [
          {
            loader : MiniCssExtractPlugin.loader,
          },
          {
            loader : 'css-loader',
            options : {
              sourceMap : true
            }
          },
          {
            loader : 'sass-loader',
            options : {
              sourceMap : true
            }
          }],
      },{
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              esModule : false
            }
          }
        ]
      }]
    },
    plugins: [
      new MiniCssExtractPlugin(),
      new webpack.DefinePlugin({
        'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
        'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
        'process.env.FIREBASE_DATABASE': JSON.stringify(process.env.FIREBASE_DATABASE),
        'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
        'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
        'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
        'process.env.FIREBASE_APP_ID': JSON.stringify(process.env.FIREBASE_APP_ID),
        'process.env.FIREBASE_MEASUREMENT_ID': JSON.stringify(process.env.FIREBASE_MEASUREMENT_ID),
      })
    ],
    devtool: isProduction ? 'source-map' : 'inline : source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback : true,
      publicPath : '/dist/'
    }
  }
};
