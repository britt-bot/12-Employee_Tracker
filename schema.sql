DROP DATABASE IF EXISTS employeetracker_DB;
CREATE DATABASE employeetracker_DB;
USE employeetracker_DB;

CREATE TABLE department(
  id INTEGER AUTO_INCREMENT NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE job(
  id INTEGER AUTO_INCREMENT NOT NULL,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INTEGER NULL,
  PRIMARY KEY (id),
  INDEX department_ind (id),
  CONSTRAINT department_fk FOREIGN KEY (id) REFERENCES department (id)
);

CREATE TABLE employee(
  id INTEGER AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INTEGER NOT NULL,
  manager_id INTEGER NULL,
  PRIMARY KEY (id),
  INDEX manager_ind (id),
  CONSTRAINT manager_fk FOREIGN KEY (id) REFERENCES employee (id)
);

SELECT * FROM department;
SELECT * FROM job;
SELECT * FROM employee;


INSERT INTO department (department_name) VALUES ('Engineering');
INSERT INTO job (title, salary, department_id) VALUES ('Software Engineer', 120000.00, 1);
INSERT INTO job (title, salary, department_id) VALUES ('Manager', 40000.00, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Jimbo', 'Frankfurter', 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Britt', 'Bot', 1, 2);