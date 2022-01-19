DROP TABLE IF EXISTS specializations CASCADE;
CREATE TABLE specializations (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255)
);
