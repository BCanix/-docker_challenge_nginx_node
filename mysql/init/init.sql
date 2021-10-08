CREATE DATABASE fullcycle;

USE fullcycle;

CREATE TABLE people(
    id INT AUTO_INCREMENT PRIMARY KEY, 
    firstname VARCHAR(30) NOT NULL, 
    lastname VARCHAR(30) NOT NULL
);