DROP TABLE IF EXISTS assignments CASCADE;

CREATE TABLE assignments (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  teacher_id integer REFERENCES teachers(id) ON DELETE CASCADE NOT NULL,
  subject_id integer REFERENCES subjects(id) ON DELETE CASCADE NOT NULL,
  description VARCHAR(255) NOT NULL,
  url VARCHAR(255) NOT NULL
);