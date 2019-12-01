const devServer = contentBase => (
    {
        contentBase,
        compress: true,
        port: 0,
        open: true,
        hot: true,
        //quiet: true
    }
);

module.exports = {
    devServer
};