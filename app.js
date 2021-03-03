//a web app build with express (by ilwel)
//imports:
    const express    = require("express")
    const app        = express();
    const admin      = require("./routs/admin")
    const handlebars = require("express-handlebars")
    const path       = require("path")
    const bodyParser = require("body-parser");

    const sesion     = require("express-session")
    const flash      = require("connect-flash")

    //configs:

        //sesion:
            app.use(sesion({

                secret: "viana1920",
                resave: true,
                saveUninitialized: true

            }))

            app.use(flash())
        //middleware:
            app.use((req, res, next) => {

                res.locals.success_msg = req.flash("success_msg")
                res.locals.error_msg   = req.flash("error_msg")
                next()

            }) 

        //handlebars:
            app.engine("handlebars", handlebars({defaultLayout: "main"}))
            app.set("view engine", "handlebars")
        
        //body-parser
            app.use(bodyParser.urlencoded({extended: false}))
            app.use(bodyParser.json())
        
        //public_files:
            app.use(express.static(path.join(__dirname,"public")))
        

    //routs:
        app.get("/", (req, res) => {

            res.send("rota aberta")

        })

    //admin routs:
        app.use("/admin", admin)


    const PORT = 8081
    app.listen(PORT, () => {

        console.log("servidor ativo no url: https://localhost:8081")

    })
    