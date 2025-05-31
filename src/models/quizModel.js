var database = require("../database/config")

function cadastrarResultado(acertos, erros, pontuacaoFinal, idUsuario) {
    console.log("ACESSEI O quizModel - cadastrarResultado()");

    var instrucaoSql = `
        INSERT INTO resultado_quiz (acertos, erros, pontuacao_final, fkUsuario) 
        VALUES (${acertos}, ${erros}, ${pontuacaoFinal}, ${idUsuario});
    `;

    console.log("Executando SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrarResultado
};