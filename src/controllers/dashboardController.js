var dashboardModel = require("../models/dashboardModel");

function ultimoResultado(req, res) {
    var idUsuario = parseInt(req.params.idUsuario);

    if (idUsuario == undefined) {
        res.status(400).send("O idUsuario está inválido ou indefinido!");
    } else {
        dashboardModel.ultimoResultado(idUsuario)
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("Houve um erro ao buscar o último resultado: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function melhorResultado(req, res) {
    var idUsuario = parseInt(req.params.idUsuario);

    if (idUsuario == undefined) {
        res.status(400).send("O idUsuario está inválido ou indefinido!");
    } else {
        dashboardModel.melhorResultado(idUsuario)
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("Houve um erro ao buscar o melhor resultado: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function mediaResultadosIndividual(req, res) {
    var idUsuario = parseInt(req.params.idUsuario);

    if (idUsuario == undefined) {
        res.status(400).send("O idUsuario está inválido ou indefinido!");
    } else {
        dashboardModel.mediaResultadosIndividual(idUsuario) 
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("Houve um erro ao buscar a média de resultados individual: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function mediaResultadosUsuarios(req, res) {

    dashboardModel.mediaResultadosUsuarios()
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar a média de resultados de todos os usuários: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    ultimoResultado,
    melhorResultado,
    mediaResultadosIndividual,
    mediaResultadosUsuarios,
};