const HtmlWebPackPlugin = require("html-webpack-plugin");

const devServer = require('./webpackDevServer.config');
const {fileResolve,moduleResolve,pathResolve} = require('./path');

module.exports = {
    entry: fileResolve('src/index.js'),
    output: {
        path: pathResolve('build'),
        filename: 'index.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: pathResolve('node_modules'),
                use: {
                    loader: "babel-loader",
                    query: {
                        presets: [
                            moduleResolve('@babel/preset-env'),
                            moduleResolve('@babel/preset-react')
                        ]
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
    plugins: [
        new HtmlWebPackPlugin({
            template: pathResolve('public/index.html'),
            filename: "index.html"
        })
    ],
    devServer : devServer(pathResolve('src')),
};