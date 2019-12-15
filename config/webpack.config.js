const webpackProductionConfig = require('./webpack/production.config.js');
const webpackDevelopmentConfig = require('./webpack/development.config.js');
const { printEmpty, printTitle, printInfo, printMessage } = require('./helper/console.messages.js');
const { webpackFolder, loaderFolder, pathResolve } = require('./helper/path');

module.exports = function(env,argv) {
    printTitle(argv.mode);
    printEmpty();
    printInfo('Author ->', 'Shubham Kamath');
    printInfo('Contribute/Star -> ', 'https://github.com/shubhaemk/another-react-boilerplate');
    printEmpty();
    printInfo(`Webpack Config (dev/prod) -> `, pathResolve(webpackFolder));
    printInfo(`Babel, ESLint (dev/prod) -> `, pathResolve(loaderFolder));
    printEmpty();
    
    if(argv.mode === 'production'){
        return webpackProductionConfig(argv.deployFolder);
    }else{
        return webpackDevelopmentConfig();
    }
}