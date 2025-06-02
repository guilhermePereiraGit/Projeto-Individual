var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

//Recebendo os dados do html e direcionando para a função cadastrar de quizController.js
router.get("/ultimo/:idUsuario", function (req, res) {
    dashboardController.ultimoResultadoController(req, res);
});

router.get("/melhor/:idUsuario", function (req, res) {
    dashboardController.melhorResultadoController(req, res);
});

router.get("/mediaIndividual/:idUsuario", function (req, res) {
    dashboardController.mediaResultadosIndividualController(req, res);
});

router.get("/mediaGeral", function (req, res) {
    dashboardController.mediaResultadosUsuariosController(req, res);
});

module.exports = router;