const Sequelize = require("sequelize")

//conecting to the database
    const sequlize  = new Sequelize("smc", "root", "viana1920", {
        //json to describe

        host:    "localhost",
        dialect: "mysql"

    });//database smc

module.exports = {

    Sequelize: Sequelize,
    sequlize:  sequlize,

}