var database = require("../database/config");

function ultimoResultado(idUsuario) {
    console.log("ACESSEI O dashboardmodel - cadastrarResultado()");

    var instrucaoSql = `
        SELECT acertos
        FROM resultado_quiz
        WHERE fkUsuario = ${idUsuario}
        ORDER BY dataFeito DESC
        LIMIT 1;
    `;

    console.log("Executando SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function melhorResultado(idUsuario) {
    console.log("ACESSEI O dashboardmodel - cadastrarResultado()");

    var instrucaoSql = `
        SELECT MAX(acertos) AS melhor
        FROM resultado_quiz
        WHERE fkUsuario = ${idUsuario};
    `;

    console.log("Executando SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function mediaResultadosIndividual(idUsuario) {
    console.log("ACESSEI O dashboardmodel - cadastrarResultado()");

    var instrucaoSql = `
        SELECT AVG(acertos) AS mediaAcertos
        FROM resultado_quiz
        WHERE fkUsuario = ${idUsuario};
    `;

    console.log("Executando SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function mediaResultadosUsuarios() {
    console.log("ACESSEI O dashboardmodel - cadastrarResultado()");

    var instrucaoSql = `
        SELECT AVG(acertos) AS mediaGeralAcertos
        FROM resultado_quiz;
    `;

    console.log("Executando SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    ultimoResultado,
    melhorResultado,
    mediaResultadosIndividual,
    mediaResultadosUsuarios
};