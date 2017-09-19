const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: path.resolve(__dirname, 'src'),

    entry: {
        app: './index.js',
        vendor: ["react", "react-dom"],
        styles: './less/main.less'
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
        },
        {
            test: /\.less$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'less-loader']
            })
        },
        {
            test: /\.(ttf|eot|svg|woff|png|jpg|jpeg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader",
            options: {
                name: '[path][name].[ext]?[hash]'
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
        }),
        new ExtractTextPlugin({
            filename: 'style.css',
            allChunks: true
        })
    ]
};