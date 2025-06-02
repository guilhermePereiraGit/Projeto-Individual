var quizModel = require("../models/quizModel");

function cadastrarResultado(req, res) {
    var acertos = req.body.acertosServer;
    var erros = req.body.errosServer;
    var idUsuario = req.body.idUsuarioServer;

    if (idUsuario == undefined || isNaN(idUsuario)) {
        console.log("ID do usuário inválido!");
        return res.status(400).send("ID do usuário inválido!");
    }

    quizModel.cadastrarResultado(acertos, erros, idUsuario)
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Erro ao cadastrar resultado do quiz: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    cadastrarResultado
}