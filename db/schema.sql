CREATE DATABASE burgers_db;
use burgers_db;
CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(100),
    devoured BOOLEAN,
    PRIMARY KEY (id)
);

