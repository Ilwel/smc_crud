var valid_errs = (errs, req) => {

    if(!req.body.jogador || typeof req.body.jogador == undefined || req.body.jogador == null){
        errs.push({text: "Preencha o campo Jogador corretamente"})
    }
    if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null){
        errs.push({text: "Preencha o campo Nome corretamente"})
    }
    if(!req.body.raça || typeof req.body.raça == undefined || req.body.raça == null){
        errs.push({text: "Preencha o campo Raça corretamente"})
    }
    if(!req.body.passado || typeof req.body.passado == undefined || req.body.passado == null){
        errs.push({text: "Preencha o campo Passado corretamente"})
    }
    if(!req.body.classe || typeof req.body.classe == undefined || req.body.classe == null){
        errs.push({text: "Preencha o campo Classe corretamente"})
    }
    if(!req.body.oficio || typeof req.body.oficio == undefined || req.body.oficio == null){
        errs.push({text: "Preencha o campo Oficio corretamente"})
    }

}

module.exports = valid_errs