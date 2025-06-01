var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

//Recebendo os dados do html e direcionando para a função cadastrar de quizController.js
router.post("/cadastrarResultado", function (req, res) {
    quizController.cadastrarResultado(req, res);
})

router.post("/autenticar", function (req, res) {
    quizController.autenticar(req, res);
});

module.exports = router;