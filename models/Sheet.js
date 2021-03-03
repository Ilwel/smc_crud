//a model of rpg sheet

//imports:
    const db = require("./db")

    //Sheet

    const Sheet = db.sequlize.define("sheet", {
        //json to define

        _player: {

            type: db.Sequelize.STRING

        },
        _char: {

            type: db.Sequelize.STRING

        },
        _race: {

            type: db.Sequelize.STRING

        },
        _past: {

            type: db.Sequelize.STRING

        },
        _class: {

            type: db.Sequelize.STRING

        },
        _trade: {

            type: db.Sequelize.STRING

        }


    })

    //Sheet.sync({force: true}) was executed

//exports:

    module.exports = Sheet