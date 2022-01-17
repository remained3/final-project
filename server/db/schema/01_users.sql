DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  picture VARCHAR(2000),
  mentor BOOLEAN NOT NULL,
  mentor_id NUMBER,
  institution_id INT REFRENCES institutions(id) ON DELETE CASCADE,
  specialization_id REFRENCES userspecializations(id) ON DELETE CASCADE
  bio VARCHAR(2000),
  last_active DATE
);
