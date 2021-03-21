
const path =  require('path');

const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        open: true
    },

    entry: './src/index.js',

    mode: 'development',

    module: {
        rules: [
            {
                test: /\.(css)$/,
                use: [
                    MiniCssExtractPlugin.loader, // instead of style-loader
                    'css-loader'
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  //"style-loader",
                  MiniCssExtractPlugin.loader, // instead of style-loader
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
            },
            {   
                test: /\.hbs$/,
                loader: "handlebars-loader"
            }
        ],
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle[hash].js',
    },
    
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            hash: true,
            title: 'My awesome service',
            template: './src/index.hbs'
        }),
        new MiniCssExtractPlugin({
            filename: 'bundle[hash].css'
        }),
    ],

};