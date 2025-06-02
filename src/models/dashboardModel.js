var database = require("../database/config");

function obterDados(idUsuario) {
    console.log("ACESSEI O DASHBOARD MODEL: obterDados()", idUsuario);

    var instrucaoSql = `
        SELECT acertos
        FROM resultado_quiz
        WHERE fkUsuario = ${idUsuario}
        ORDER BY dataFeito DESC
        LIMIT 1;
    `;

    var instrucaoSql2 = `
        SELECT IFNULL(
            (
                SELECT acertos
                FROM resultado_quiz
                WHERE fkUsuario = ${idUsuario}
                ORDER BY dataFeito DESC
                LIMIT 1 OFFSET 1
            ), 0
        ) AS acertosPenultimoResul;
    `;


    var instrucaoSql3 = `
        SELECT AVG(acertos) AS mediaAcertos
        FROM resultado_quiz
        WHERE fkUsuario = ${idUsuario};
    `;

    var instrucaoSql4 = `
        SELECT AVG(acertos) AS mediaGeralAcertos
        FROM resultado_quiz;
    `;

    console.log("Executando a instrução SQL 1: \n" + instrucaoSql);
    console.log("Executando a instrução SQL 2: \n" + instrucaoSql2);
    console.log("Executando a instrução SQL 3: \n" + instrucaoSql3);
    console.log("Executando a instrução SQL 4: \n" + instrucaoSql4);

    return Promise.all([
        database.executar(instrucaoSql),
        database.executar(instrucaoSql2),
        database.executar(instrucaoSql3),
        database.executar(instrucaoSql4)
    ]);
}

module.exports = {
    obterDados
};