-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/
create database individual;
use individual;

CREATE TABLE personagem (
id INT PRIMARY KEY AUTO_INCREMENT,
nome varchar(50)
);

CREATE TABLE usuario (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50),
email VARCHAR(50),
senha VARCHAR(50),
fkPersonagem int,
constraint fkPersonagem_usuario foreign key (fkPersonagem) references personagem(id));

CREATE TABLE resultado_quiz (
    id INT PRIMARY KEY AUTO_INCREMENT,
    acertos INT,
    erros INT,
    dataFeito DATETIME DEFAULT CURRENT_TIMESTAMP,
    fkUsuario INT,
    CONSTRAINT fkUsuario_resultado FOREIGN KEY (fkUsuario) REFERENCES usuario(id)
);

insert into personagem (nome) values
('Valere'),
('Zale'),
('Garl'),
('Serai'),
('Brugalves'),
('Erlina'),
('Moraine'),
('Teaks');

select * from usuario;
select * from personagem;
