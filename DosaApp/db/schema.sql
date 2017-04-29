### Schema

CREATE DATABASE dosaDB;

USE dosaDB;

CREATE TABLE dosas
(
	id int NOT NULL AUTO_INCREMENT,
	dosaName varchar(255),
	savoured BOOLEAN DEFAULT false,
    date timestamp,
	PRIMARY KEY (id)
);