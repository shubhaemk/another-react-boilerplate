const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const { 
    pathResolve,
    indexJsFile,
    hostFolder,
    nodeModulesFolder,
    babelConfigFile,
    eslintConfigFile,
    assetsFolder,
    publicFolder,
    indexHtmlFile,
    faviconFile 
} = require('../helper/path');

const webpackDevelopmentConfig = () => {
    return {
        entry: pathResolve(indexJsFile),
        output: {
            path: pathResolve(hostFolder),
            filename: '[name].js',
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: pathResolve(nodeModulesFolder),
                    use: [
                        {
                            loader: 'babel-loader',
                            query: {
                                configFile: pathResolve(babelConfigFile)
                            }
                        },
                        {
                            loader: 'eslint-loader',
                            options: {
                                configFile: pathResolve(eslintConfigFile)
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
                                outputPath: assetsFolder,
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
            new CleanWebpackPlugin(),
            new HtmlWebPackPlugin({
                template: pathResolve(publicFolder,indexHtmlFile),
                filename: indexHtmlFile,
                favicon: pathResolve(publicFolder,faviconFile)
            })
        ],
        devServer: {
            contentBase : pathResolve(publicFolder),
            compress: true,
            port: 0,
            open: true,
            hot: true,
            stats: 'errors-warnings',
            watchContentBase: true,
            //might add this when I will add start up script!
            //writeToDisk: true, 
            //https: true
            overlay: {
                warnings: true,
                errors: true
            },
        },
        stats: 'errors-warnings'
    }
}

module.exports = webpackDevelopmentConfig;