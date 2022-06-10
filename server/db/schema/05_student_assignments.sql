DROP TABLE IF EXISTS student_assignments CASCADE;

CREATE TABLE student_assignments (
  id SERIAL PRIMARY KEY,
  due_date date NOT NULL,
  date_started date default NULL,
  date_completed date default NULL,
  student_id integer REFERENCES students(id) ON DELETE CASCADE NOT NULL,
  assignment_id integer REFERENCES assignments(id) ON DELETE CASCADE NOT NULL
);