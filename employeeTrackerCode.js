// join employee into itself
// join FROM employee INNER JOIN employee ON (employee.id = employee.managerId)
//(table.field = table.field)


const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
  host: 'localhost',

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: 'root',

  // Be sure to update with your own MySQL password!
  password: 'password',
  database: 'employeetracker_DB',
});

connection.connect((err) => {
  if (err) throw err;
  runSearch();
});

const runSearch = () => {
  inquirer
    .prompt({
      name: 'action',
      type: 'rawlist',
      message: 'What would you like to do?',
      choices: [
        'View all Employees',
        'View all Employees by Department',
        'View all Employees by Manager',
        'Add Employee',
        'Remove Employee',
        'Update Employee',
        'Update Employee Role',
        'Update Employee Manager',
        'View All Roles',
      ],
    })
    .then((answer) => {      
      switch (answer.action) {
      case 'View all Employees':
        employeeSearch();
        break;

      case 'View all Employees by Department':
        deptSearch();
        break;

      case 'View all Employees by Manager':
        managerSearch();
        break;

      case 'Add Employee':
        addEmployee();
        break;

      case 'Remove Employee':
        remEmployee();
        break;
      
      case 'Update Employee':
        updEmployee();
        break;

      case 'Update Employee Role':
        updRole();
        break;

      case 'Update Employee Manager':
        updManager();
        break;

      case 'View All Roles':
        viewRoles();
        break;

      default:
        console.log(`Invalid action: ${answer.action}`);
        break;
    }
  });
};

const employeeSearch = () => {
  inquirer
  .prompt({
    name: 'employee',
    type: 'input',
    message: 'Which employee would you like to view?',
  })
  .then((answer) => {
    console.log(answer.employee);
    connection.query(
      'SELECT * FROM employee WHERE ?',
      { employee: answer.employee },
      (err, res) => {
        if (res[0]) {
          console.log(
            `Employee ID: ${id} || First Name: ${first_name} || Last Name: ${last_name} || Role: ${role_id} || Manager: ${manager_id}`          
          );
        } else {
          console.error(`No results for ${answer.employee}`);
        }
        runSearch();
      }
    );
  });
};

// first attempt
//   const query = 'SELECT * FROM employee WHERE ?';
//     connection.query(
//       query, { employee: answer.employee }, 
//       (err, res) => {
//       res.forEach(({ id, first_name, last_name, role_id, manager_id }) => {
//         console.log(
//           `Employee ID: ${id} || First Name: ${first_name} || Last Name: ${last_name} || Role: ${role_id} || Manager: ${manager_id}`
//         );
//       });
//       runSearch();
//     });
// };

const deptSearch = () => {
  inquirer
  .prompt({
    name: 'department',
    type: 'input',
    message: 'Which department would you like to view?',
  })
  .then((answer) => {
    console.log(answer.department);
    connection.query(
      'SELECT * FROM department WHERE ?',
      { department: answer.department },
      (err, res) => {
        if (res[0]) {
          console.log(
            `Department: ${department_name}`
          );
        } else {
          console.error(`No results for ${answer.department}`);
        }
        runSearch();
      }
    );
  });
};

// first attempt
//   .then((answer) => { 
//     const query = 'SELECT name FROM department WHERE ?';
//     connection.query(query, { department: answer.department }, (err, res) => {
//       res.forEach(({ name }) => {
//         console.log(
//           `Department: ${name}`
//         );
//       });
//       runSearch();
//     })
//   })
// };

const managerSearch = () => {
  inquirer
  .prompt({
    name: 'manager',
    type: 'input',
    message: 'Which manager would you like to view?',
  })
  .then((answer) => {
    console.log(answer.department);
    connection.query(
      'SELECT * FROM department WHERE ?',
      { employee: answer.department },
      (err, res) => {
        if (res[0]) {
          console.log(
            `Department: ${department_name}`
          );
        } else {
          console.error(`No results for ${answer.department}`);
        }
        runSearch();
      }
    );
  });
};


// first attempt
//   .then((answer) => { 
//     const query = 'SELECT manager_id FROM employee WHERE ?';
//     connection.query(query, { employee: answer.employee }, (err, res) => {
//       res.forEach(({ manager_id }) => {
//         console.log(
//           `Manager Name: ${manager_id}`
//         );
//       });
//       runSearch();
//     })
//   })
// };

const addEmployee = () => {
  inquirer
  .prompt({
    name: 'firstname',
    type: 'input',
    message: "What is the employee's first name?",
  },
  {
    name: 'lastname',
    type: 'input',
    message: "What is the employee's last name?",
  },
  {
    name: 'role',
    type: 'input',
    message: "What is the employee's role?",
  },
  {
    name: 'manager',
    type: 'input',
    message: "Who is the employee's manager?",
  })
  .then((answer) => { 
  })
};

const remEmployee = () => {
  inquirer
  .prompt({
    name: 'remEmployee',
    type: 'input',
    message: 'Which employee would you like to remove?',
  })
  .then((answer) => {
  })
};

const updEmployee = () => {
  inquirer
  .prompt({
    name: 'artist',
    type: 'input',
    message: 'Which employee would you like to update?',
  })
  .then((answer) => {
  })
};

const updRole = () => {
  inquirer
  .prompt({
    name: 'artist',
    type: 'input',
    message: "Which employee's role would you like to update?",
  })
  .then((answer) => {
  })
};

const updManager = () => {
  inquirer
  .prompt({
    name: 'artist',
    type: 'input',
    message: "Which employee's manager would you like to update?",
  })
  .then((answer) => {
  })
};

const viewRoles = () => {
  inquirer
  .prompt({
    name: 'job',
    type: 'input',
    message: 'Which role would you like to view?',
  })
  .then((answer) => {
    console.log(answer.job);
    connection.query(
      'SELECT * FROM job WHERE ?',
      { job: answer.job },
      (err, res) => {
        if (res[0]) {
          console.log(
            `Role: ${title}`          
          );
        } else {
          console.error(`No results for ${answer.job}`);
        }
        runSearch();
      }
    );
  });
};