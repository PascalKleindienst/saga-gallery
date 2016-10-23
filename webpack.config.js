const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const pkg = require('./package.json');

module.exports = {
    name: 'js',
    entry: './src/saga.js',
    output: {
        path: './dist',
        filename: 'saga-gallery.min.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },
        {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('css!sass', { publicPath: '../'})
        },
        {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loader: 'file',
            query: { name: 'images/[name].[ext]', publicPath: './' }
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            }
        }),
        new ExtractTextPlugin('saga-gallery.min.css', {
            allChunks: true
        }),
        new webpack.BannerPlugin(pkg.name + " v" + pkg.version + " | " + pkg.author + " | " + pkg.license + " | " + pkg.homepage)
    ]
};