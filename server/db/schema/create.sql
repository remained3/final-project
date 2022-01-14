-- Clear up databases
DROP TABLE IF EXISTS mentors CASCADE;

-- create tables 

CREATE TABLE mentors (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  avatar VARCHAR(255) NOT NULL,
  specialization VARCHAR(255) NOT NULL
);


