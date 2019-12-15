const path = require('path');

const pathResolve = (...relativePath) => path.resolve(...relativePath);
//development
const hostFolder = 'host';
//production
const buildFolder = 'docs';
//common
const srcFolder = 'src';
const loaderFolder = 'config/loader';
const webpackFolder = 'config/webpack';
const indexJsFile = 'index.js';
const nodeModulesFolder = 'node_modules';
const babelConfigFile = 'babel.config.js';
const eslintConfigFile = '.eslintrc';
const assetsFolder = 'assets';
const publicFolder = 'public';
const indexHtmlFile = 'index.html';
const faviconFile = 'favicon.ico';


module.exports = {
    srcFolder,
    loaderFolder,
    webpackFolder,
    pathResolve,
    indexJsFile,
    hostFolder,
    buildFolder,
    nodeModulesFolder,
    babelConfigFile,
    eslintConfigFile,
    assetsFolder,
    publicFolder,
    indexHtmlFile,
    faviconFile
};