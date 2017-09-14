const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),

    entry: {
        app: './index.js',
        vendor: ["react", "react-dom"]
    },

    output: {
        path:  path.resolve(__dirname, 'built'),
        filename: "[name].js"
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    module: {
        rules: [{
            test: [/\.js?$/, /\.jsx?$/],
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                presets: ['env','react']
            }
        }]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'React app',
            hash: true,
            template: './index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js',
            chunks: ['app', 'vendor']
        })
    ]
};