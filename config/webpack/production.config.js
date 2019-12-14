const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { fileResolve, pathResolve } = require('../helper/path');

const webpackProductionConfig = () => {
    return {
        entry: fileResolve('src/index.js'),
        output: {
            path: pathResolve('build'),
            filename: '[name][chunkhash].js', //use hashchunk in prod
        },
        optimization: {
            minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: pathResolve('node_modules'),
                    use: {
                        loader: "babel-loader",
                        query: {
                            configFile: fileResolve('config/loader/babel.config.js')
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
                                name: '[contenthash].[ext]',
                            }
                        },
                        'image-webpack-loader',
                    ]
                },
                {
                    test: /\.(ogg|mp3|wav|mpe?g)$/i,
                    use: 'file-loader'
                },
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: () => [require('autoprefixer')({
                                    'browsersList': ['> 1%', 'last 3 versions']
                                })],
                            }
                        }
                    ]
                },
                {
                    test: /\.s(a|c)ss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: () => [require('autoprefixer')({
                                    'browsersList': ['> 1%', 'last 3 versions']
                                })],
                            }
                        },
                        'sass-loader'
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
                filename: '[id][chunkhash].css',
                chunkFilename: '[id][chunkhash].css',
            }),
        ],
        devServer: {
            contentBase: pathResolve('public'),
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

module.exports = webpackProductionConfig;