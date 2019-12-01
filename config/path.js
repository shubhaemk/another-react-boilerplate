const path = require('path');

const fileResolve = (fileRelativePath) => path.resolve(fileRelativePath);
const moduleResolve = (moduleRelativePath) => path.resolve('node_modules',moduleRelativePath);
const pathResolve = (relativePath) => path.resolve(relativePath);

module.exports = {
    fileResolve,
    moduleResolve,
    pathResolve
}