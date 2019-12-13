const { fileResolve, pathResolve } = require('../helper/path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//use minicsextractplugin in production enviornment
const webpackModule = () => {
    return (
        {
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
                                name(file) {
                                    if (process.env.NODE_ENV === 'development') {
                                        return '[path][name].[ext]';
                                    }
                                    return '[contenthash].[ext]';
                                }
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
                        MiniCssExtractPlugin.loader,
                        'css-loader'
                    ]
                },
                {
                    test: /\.s(a|c)ss$/,
                    use: [
                        process.env.NODE_ENV !== 'production' //temp till different config files are not added
                            ? 
                            'style-loader'
                            : {
                                loader: MiniCssExtractPlugin.loader,
                                options: {
                                    publicPath: '../'
                                }         
                            }, //adds css to dom
                        'css-loader',  //css-loader interprets @import and url() like import/require() and will resolve them.
                        'sass-loader' // s(a|c)ss to css
                    ]
                }
                
            ]
        }
    )
};

module.exports = webpackModule;