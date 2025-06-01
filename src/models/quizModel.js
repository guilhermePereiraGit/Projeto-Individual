var database = require("../database/config")

function cadastrarResultado(acertos, erros, idUsuario) {
    console.log("ACESSEI O quizModel - cadastrarResultado()");

    var instrucaoSql = `
        INSERT INTO resultado_quiz (acertos, erros, fkUsuario) 
        VALUES (${acertos}, ${erros}, ${idUsuario});
    `;

    console.log("Executando SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrarResultado
};