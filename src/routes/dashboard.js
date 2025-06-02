var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

//Recebendo os dados do html e direcionando para a função cadastrar de quizController.js
router.get("/obterDados/:idUsuario", function (req, res) {
    dashboardController.obterDados(req, res);
})

module.exports = router;