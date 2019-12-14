const HtmlWebPackPlugin = require('html-webpack-plugin');
const { fileResolve, pathResolve } = require('../helper/path');

const webpackDevelopmentConfig = () => {
    return {
        entry: fileResolve('src/index.js'),
        output: {
            path: pathResolve('host'),
            filename: '[name].js',
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: pathResolve('node_modules'),
                    use: [
                        {
                            loader: 'babel-loader',
                            query: {
                                configFile: fileResolve('config/loader/babel.config.js')
                            }
                        },
                        {
                            loader: 'eslint-loader',
                            options: {
                                configFile: fileResolve('config/loader/.eslintrc')
                            }
                        }
                    ]
                },
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: 'html-loader'
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
                                name: '[name].[ext]',
                            }
                        },
                        {
                            loader: 'image-webpack-loader',
                            options: {
                                disable: true
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
                        'css-loader',
                        'sass-loader'
                    ]
                }

            ]
        },
        resolve: {
            extensions: ['.wasm', '.mjs', '.js', '.json', '.jsx']
        },
        plugins: [
            new HtmlWebPackPlugin({
                template: pathResolve('public/index.html'),
                filename: 'index.html',
                favicon: fileResolve('public/favicon.ico')
            })
        ],
        devServer: {
            contentBase : pathResolve('public'),
            compress: true,
            port: 0,
            open: true,
            hot: true,
            stats: 'errors-warnings',
            watchContentBase: true,
            //writeToDisk: true, might add this when I will add start up script!
            //https: true might add this when I will add start up script!
            overlay: {
                warnings: true,
                errors: true
            },
        },
        stats: 'errors-warnings'
    }
}

module.exports = webpackDevelopmentConfig;