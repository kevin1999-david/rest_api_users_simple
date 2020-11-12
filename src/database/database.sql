CREATE DATABASE usersDB;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40) NOT NULL,
    email TEXT
);

INSERT INTO users(name, email) VALUES(
    'Kevin Catucuamba', 
    'catucuamba@gmail.com');

INSERT INTO users(name, email) VALUES(
    'Joe Campbell', 
    'joecamp@gmail.com');


INSERT INTO users(name, email) VALUES(
    'Peter Jackson', 
    'peterj@gmail.com');


INSERT INTO users(name, email) VALUES
    ('Wills Diaz','diaz@gmail.com'),
    ('Charles Mcmanam','charles@gmail.com');



SELECT * FROM users WHERE id = 1;


/*QUERY*/
SELECT * FROM users;
