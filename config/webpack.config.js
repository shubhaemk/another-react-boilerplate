const HtmlWebPackPlugin = require("html-webpack-plugin");

const {devServer} = require('./webpackDevServer.config');
const {
    fileResolve,
    pathResolve
} = require('./path');

module.exports = {
    entry: fileResolve('src/index.js'),
    output: {
        path: pathResolve('build'),
        filename: 'index.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: pathResolve('node_modules'),
                use: {
                    loader: "babel-loader",
                    query: {
                        configFile: fileResolve('config/babel.config.js')
                    }
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: [".wasm", ".mjs", ".js", ".json", ".jsx"]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: pathResolve('public/index.html'),
            filename: "index.html"
        })
    ],
    devServer : devServer(pathResolve('public')),
};