const webpackProductionConfig = require('./webpack/production.config.js');
const webpackDevelopmentConfig = require('./webpack/development.config.js');

module.exports = function(env,argv) {
    if(argv.mode === 'production'){
        return webpackProductionConfig();
    }else{
        return webpackDevelopmentConfig();
    }
}