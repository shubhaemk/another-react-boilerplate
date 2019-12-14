const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { fileResolve, pathResolve } = require('../helper/path');

const webpackDevelopmentConfig = () => {
    return {
        entry: fileResolve('src/index.js'),
        output: {
            path: pathResolve('build'),
            filename: '[name].js', //use hashchunk in prod
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
                },
                {
                    test: /\.(gif|png|jpe?g|svg)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                outputPath: 'assets',
                                name: '[path][name].[ext]',
                                /* name(file) {
                                    if (process.env.NODE_ENV === 'development') {
                                        return '[path][name].[ext]';
                                    }
                                    return '[contenthash].[ext]';
                                } */
                            }
                        },
                        {
                            loader: 'image-webpack-loader',
                            options: {
                                disable: true // Disables on development mode
                            }
                        }
                    ]
                },
                {
                    test: /\.(ogg|mp3|wav|mpe?g)$/i,
                    use: 'file-loader'
                },
                {
                    test: /\.css$/,
                    loader: [
                        'style-loader',
                        'css-loader'
                    ]
                },
                {
                    test: /\.s(a|c)ss$/,
                    use: [
                        'style-loader',
                        'css-loader',  //css-loader interprets @import and url() like import/require() and will resolve them.
                        'sass-loader' // s(a|c)ss to css
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
            }),
            new MiniCssExtractPlugin({
                filename: '[name].css',
                chunkFilename: '[id].css',
            }),
        ],
        devServer: {
            contentBase : pathResolve('public'),
            compress: true,
            port: 0,
            open: true,
            hot: true,
            overlay: {
                warnings: true,
                errors: true
            },
        },
        stats: {
            children: false
        }
    }
}

module.exports = webpackDevelopmentConfig;