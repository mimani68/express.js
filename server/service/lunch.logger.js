module.exports.starter = function(utility) {

    const chalk = require('chalk');
    const config = require('../config/server.config');

    console.log(chalk.yellow("\n======================================================="));
    console.log(chalk.green("                sample® "), chalk.blue(config.version) );
    console.log(chalk.white("      phone ,smart device and web application for") );
    console.log(chalk.white("      managing car maintenance and trading"), );
    console.log(chalk.yellow("======================================================="));
    console.log("   >>> ", chalk.yellow(" http://sample.ir"), "     ", chalk.bgWhite.underline.black(" port "), config.port );
    console.log(chalk.yellow("=======================================================\n"));    

}


module.exports.loadServer = function(utility) {

    const chalk = require('chalk');
    const config = require('../config/server.config');

    function random() { return Math.floor(Math.random() * 10) };
    var server_hash = () => {
        return "ayxz-rxyz-yx".replace(/[uwc]/g, 'abcdefghijklmno'[random()]).replace(/[yni8]/g, random()).replace(/z/g, 'xyzwtrgevdqpfqc'[random()]).replace(/a/g, [random()]).replace(/z/g, 'ndkfkgpenvw'[random()]);
    };

    console.log(chalk.black.bgYellow("                 SERVER IS RUNNING ...                 "), "\n"); 
    console.log("start server: " , chalk.gray( utility.date.today() + " " + utility.date.time()));
    console.log("server running session serial: ",  chalk.red(server_hash() ) , "    " );
    
}