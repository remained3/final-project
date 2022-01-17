-- Clear up databases
DROP TABLE IF EXISTS users CASCADE;
-- DROP TABLE IF EXISTS questions CASCADE;
-- create tables 


CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  avatar VARCHAR(255) NOT NULL,
  specialization VARCHAR(255) NOT NULL
  university VARCHAR(255) NOT NULL
);


