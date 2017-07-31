### Schema

CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burger (
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(100) NOT NULL,
	devoured BOOLEAN DEFAULT false,
    ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);
INSERT INTO burger (burger_name, devoured) 
VALUES("Double-double", true),
("Big Mac", true),
("Whopper", true),
("McChicken", true),
("Slaters", true),
("Triple Threat", true),
("Steak Sandwich", true),
("Ramen Burger", true),
("Cheeseburger", true);

