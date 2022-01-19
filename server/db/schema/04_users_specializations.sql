DROP TABLE IF EXISTS users_specializations CASCADE;
CREATE TABLE users_specializations (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id REFERENCES users(id) ON DELETE CASCADE
  specialization_id REFERENCES specializations(id) ON DELETE CASCADE
 );
