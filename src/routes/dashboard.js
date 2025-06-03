var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

//Recebendo os dados do html e direcionando para a função cadastrar de quizController.js
router.get("/ultimo/:idUsuario", function (req, res) {
    dashboardController.ultimoResultado(req, res);
});

router.get("/melhor/:idUsuario", function (req, res) {
    dashboardController.melhorResultado(req, res);
});

router.get("/mediaIndividual/:idUsuario", function (req, res) {
    dashboardController.mediaResultadosIndividual(req, res);
});

router.get("/mediaGeral", function (req, res) {
    dashboardController.mediaResultadosUsuarios(req, res);
});

module.exports = router;