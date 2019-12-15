const path = require('path');

const pathResolve = (...relativePath) => path.resolve(...relativePath);
//development
const hostFolder = 'host';
//production
const buildFolder = 'build';
//common
const indexJsFile = 'src/index.js';
const nodeModulesFolder = 'node_modules';
const babelConfigFile = 'config/loader/babel.config.js';
const eslintConfigFile = 'config/loader/.eslintrc';
const assetsFolder = 'assets';
const publicFolder = 'public';
const indexHtmlFile = 'index.html';
const faviconFile = 'favicon.ico';


module.exports = {
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