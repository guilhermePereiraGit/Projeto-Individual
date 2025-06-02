var dashboardModel = require("../models/dashboardModel");

function obterDados(req, res) {
    console.log("Recebido na rota, req.params:", req.params); 
    var idUsuario = parseInt(req.params.idUsuario);
    console.log("Valor de idUsuario no controller:", idUsuario); 

    if (idUsuario == undefined) {
        res.status(400).send("O idUsuario está indefinido!");
    } else {
        dashboardModel.obterDados(idUsuario)
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("Houve um erro ao buscar a nota atual: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

module.exports = {
    obterDados
};