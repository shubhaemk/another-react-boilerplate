const { fileResolve, pathResolve } = require('../helper/path');

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
                
            ]
        }
    )
};

module.exports = {
    webpackModule
}