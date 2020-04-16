DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
 messageID int NOT NULL AUTO_INCREMENT,
 userID int NOT NULl,
 roomname VARCHAR(20) NOT NULL,
 bodyMessage VARCHAR(300) NOT NULL,
 PRIMARY KEY (messageID)
);

/* Create other tables and define schemas for them here! */

CREATE TABLE user (
  userID int NOT NULL AUTO_INCREMENT,
  userName VARCHAR(20) NOT NULL,
  PRIMARY KEY (userID)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

