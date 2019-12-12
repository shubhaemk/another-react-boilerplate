/*
    ToDo
    1.Add support for following
        a. SASS
        b. CSS
        c. images/music/gif                                         DONE
    2. minify css/html/js
    3. Convert it into a function which returns config              DONE 
    4. Create different config for production and development
    5. When a user comes to the website then browser will download the whole bundle file and then render the website. This can slow your website drastically so code splitting allows the generated to split and create multiple outputs. So the browser will load the appropriate bundle when it needs it. In turn improving the site load up time.
    6. ESLint and pretty quick
*/




const webpackModule = require('./webpackConfig/webpackModule.config');
const webpackPlugins = require('./webpackConfig/webpackPlugins.config');
const webpackDevServer = require('./webpackConfig/webpackDevServer.config');
const {fileResolve,pathResolve} = require('./helper/path');

module.exports = {
    entry: fileResolve('src/index.js'),
    output: {
        path: pathResolve('build'),
        filename: 'index.js',
    },
    module: webpackModule(),
    resolve: {
        extensions: [".wasm", ".mjs", ".js", ".json", ".jsx"]
    },
    plugins: webpackPlugins(),
    devServer : webpackDevServer(pathResolve('public')),
};