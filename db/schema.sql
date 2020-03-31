CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT,
    burger_name VARCHAR(45),
    devoured BOOLEAN NOT NULL DEFAULT 1,
    PRIMARY KEY (id)
);