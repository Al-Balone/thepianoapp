CREATE DATABASE pernpiano;

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    user_fname VARCHAR(10),
    user_lname VARCHAR(10)
);