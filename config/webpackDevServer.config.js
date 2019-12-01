module.exports = (base) => {
    return {
        contentBase: base,
        compress: true,
        port: 0,
        open: false,
        hot: true,
        //quiet: true
    }
};