const chalk = require('chalk');

const printTitle = (mode) => console.log(chalk.red.bold(`Starting another-react-boilerplate in ${mode === 'production' ? 'Production':'Development'} mode`));

const printInfo = (title, link) => {
    console.log(`${chalk.blue.bold(title)} ${chalk.red.underline(link)}`);
};

const printMessage = (message) => {
    console.log(`${chalk.red('ℹ')} ${chalk.white.dim('｢arb｣')}: ${message}`);
}

const printEmpty = () => console.log();

module.exports = {
    printTitle,
    printInfo,
    printMessage,
    printEmpty
}