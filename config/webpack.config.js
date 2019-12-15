const webpackProductionConfig = require('./webpack/production.config.js');
const webpackDevelopmentConfig = require('./webpack/development.config.js');
const chalk = require('chalk');

module.exports = function(env,argv) {
    console.log(chalk.red.bold('Starting another-react-boilerplate'));
    console.log(`${chalk.red('Contribute -> ')} ${chalk.red.underline('https://github.com/shubhaemk/another-react-boilerplate')}`);
    console.log(`${chalk.red('ℹ')} ${chalk.white.dim('｢arb｣')}: Using ${argv.mode}`);
    if(argv.mode === 'production'){
        return webpackProductionConfig();
    }else{
        return webpackDevelopmentConfig();
    }
}