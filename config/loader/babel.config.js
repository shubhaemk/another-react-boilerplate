const chalk = require('chalk');
const envTarget = "> 0.25%, not dead";

module.exports = function(api) {
    console.log(`${chalk.red('ℹ')} ${chalk.white.dim('｢arb｣')}: Transpiling using Babel`);
    console.log(`${chalk.red('ℹ')} ${chalk.white.dim('｢arb｣')}: Targetting browsers ${envTarget}`);
    return {
        "presets": [
            [
                "@babel/preset-env",
                {
                    "targets": envTarget
                }
            ],
            [
                '@babel/preset-react',
                {
                    "development" : api.env("development") 
                }
            ]
        ],
        "plugins": [
            "@babel/plugin-proposal-class-properties",
            'transform-react-remove-prop-types'
        ]
    }
};

