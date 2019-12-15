const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { printMessage } = require('../helper/console.messages');

const {
    pathResolve,
    indexJsFile,
    buildFolder,
    nodeModulesFolder,
    babelConfigFile,
    assetsFolder,
    publicFolder,
    indexHtmlFile,
    faviconFile,
    loaderFolder,
    srcFolder
} = require('../helper/path');

const webpackProductionConfig = () => {

    printMessage(`Production build started from ${indexJsFile} in - ${pathResolve(srcFolder)}`);
    printMessage(`Pulling ${indexHtmlFile} & ${faviconFile} from - ${pathResolve(publicFolder)}`);
    printMessage(`Final build will be located at - ${pathResolve(buildFolder)}`);
    printMessage(`Any assets compiled will be located in - ${pathResolve(buildFolder,assetsFolder)}`);

    return {
        entry: pathResolve(srcFolder, indexJsFile),
        output: {
            path: pathResolve(buildFolder),
            filename: '[name][chunkhash].js', //use hashchunk in prod
        },
        optimization: {
            minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: pathResolve(nodeModulesFolder),
                    use: {
                        loader: "babel-loader",
                        query: {
                            configFile: pathResolve(loaderFolder, babelConfigFile),
                            envName: 'production'
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
                                outputPath: assetsFolder,
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
            new CleanWebpackPlugin(),
            new HtmlWebPackPlugin({
                template: pathResolve(publicFolder,indexHtmlFile),
                filename: indexHtmlFile,
                favicon: pathResolve(publicFolder,faviconFile),
                minify: {
                    collapseWhitespace: true,
                    removeComments: true,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    useShortDoctype: true
                }
            }),
            new MiniCssExtractPlugin({
                filename: '[id][chunkhash].css',
                chunkFilename: '[id][chunkhash].css',
            }),
        ],
        optimization: {
            runtimeChunk: 'single',
            splitChunks: {
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        enforce: true,
                        chunks: 'all'
                    }
                }
            }
        },
        stats: 'errors-warnings'
    }
}

module.exports = webpackProductionConfig;