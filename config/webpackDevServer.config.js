const devServer = contentBase => (
    {
        contentBase,
        compress: true,
        port: 0,
        open: false,
        hot: true,
        //quiet: true
    }
);

module.exports = {
    devServer
};