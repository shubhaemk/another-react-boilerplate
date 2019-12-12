const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { pathResolve } = require('../helper/path');

const webpackPlugins = () => {
    return(
        [
            new HtmlWebPackPlugin({
                template: pathResolve('public/index.html'),
                filename: "index.html"
            })
        ]
    );
};

module.exports = webpackPlugins;