//admin routs
    
//imports:
    const express = require("express")
    const router  = express.Router()
    const Sheet   = require("../models/Sheet")
    const valid   = require("./valid_errs")

    router.get("/", (req, res) => {

        res.render("admin/index")

    })
    router.get("/sheets", (req, res) =>{
        Sheet.findAll().then((sheets) => {

            res.render("admin/sheets", {sheets: sheets})

        }).catch((err) => {

            console.log(`ocorreu um erro ao exibir: ${err}`)

        })
        

    })
    router.get("/sheets/add", (req, res) => {

        res.render("admin/addsheet")

    })
    router.post("/sheets/new", (req, res) => {

        var errs = []

        valid(errs, req)

        if(errs.length > 0){
            res.render("admin/addsheet", {errs:errs})
        }else{

            Sheet.create({

                _player: req.body.jogador,
                _char:   req.body.nome,
                _race:   req.body.raça,
                _past:   req.body.passado,
                _class:  req.body.classe,
                _trade:  req.body.oficio
    
            }).then(() => {
    
                req.flash("success_msg", "Nova ficha criada")
                res.redirect("/admin/sheets")
    
            }).catch((err) =>{
    
                console.log(`erro ao criar: ${err}`)
                res.redirect("/admin/sheets")
                
            })

        }

    })
    router.post("/sheets/del", (req, res) => {
        
        Sheet.findOne({where: {id:req.body.id}}).then((sheet) => {

            sheet.destroy().then(() => {

                res.redirect("/admin/sheets")

            }).catch((err) => {

                console.log(`erro ao deletar: ${err}`)

            })
            

        }).catch((err) => {

            console.log(`occoreu um erro: ${err}`)

        })

    })
    router.get("/sheets/edit/:id", (req, res) => {
        Sheet.findOne({where: {id: req.params.id}}).then((sheet) =>{

            res.render("admin/editsheet", {sheet: sheet})

        }).catch((err) => {

            console.log(`ocorreu um erro ${err}`)

        })
    
    })
    router.post("/sheets/edit", (req, res) => {

        var errs = []

        valid(errs, req)

        if(errs.length > 0){
            res.render("admin/editsheet", {errs:errs})
        }else{

            Sheet.update(
                {
                    _player: req.body.jogador,
                    _char:   req.body.nome,
                    _race:   req.body.raça,
                    _past:   req.body.passado,
                    _class:  req.body.classe,
                    _trade:  req.body.oficio
                    
                },
                {where: {id: req.body.id}}).then(() =>{
    
                    console.log("alteração feita com sucesso")
                    res.redirect("/admin/sheets")
    
                }).catch((err) =>{
    
                    console.log(`ocorreu um erro: ${err}`)
                    res.redirect("/admin/sheets")
    
                })

        }

    })
    router.get("/sheet/:id", (req, res) => {
        Sheet.findOne({where: {id: req.params.id}}).then((sheet) => {

            res.render("admin/sheet", {sheet: sheet})

        }).catch((err) => {

            console.log(`ocorreu um erro ${err}`)

        })
    })


//exports:

    module.exports = router