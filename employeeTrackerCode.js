// join employee into itself
// join FROM employee INNER JOIN employee ON (employee.id = employee.managerId)
// (table.field = table.field)

// search dept = eng = 1 [{ department: 'Engineering', id: 1}]


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
        //add call sql employee list
        employeeSearch();
        break;

      case 'View all Employees by Department':
        //add call sql department list
        deptSearch();
        break;

      case 'View all Employees by Manager':
        //add call sql manager list
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
  const query = 'SELECT * FROM employee';
    connection.query(
      query, (err, res) => {
        console.table(res);
        runSearch();
      }
    )
};

const employeeByDept = (depart) => {
  // const query = `SELECT id FROM department WHERE department.name = '${depart}'`;
  const query = `SELECT employee.id, employee.first_name, employee.last_name, role.title FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id WHERE department.id = ${depart}`;
  console.log(query);
  connection.query(
    query, (err, res) => {
      console.table(res);
      runSearch();
    }
  )
};

const employeeByMgr = (mgr) => {
  // const query = `SELECT id FROM department WHERE department.name = '${depart}'`;
  const query = `SELECT employee.id, employee.first_name, employee.last_name, role.title FROM employee LEFT JOIN employee ON employee.manager_id = employee.id LEFT JOIN employee ON employee.manager_id = employee.id WHERE employee.id = ${mgr}`;
  console.log(query);
  connection.query(
    query, (err, res) => {
      console.table(res);
      runSearch();
    }
  )
};

const deptSearch = () => {
  inquirer
  .prompt({
    name: 'department',
    type: 'list',
    message: 'Which department would you like to view?',
    // choices: [{ name: 'Engineering', value: 4 }]
  })
  .then((answer) => {
    console.log(answer.department);
    employeeByDept(answer.department[0].toUpperCase() + answer.department.slice(1).toLowerCase());
    // connection.query(
    //   'SELECT * FROM department WHERE ?',
    //   { department: answer.department },
    //   (err, res) => {
    //     if (res[0]) {
    //       console.log(
    //         `Department: ${department_name}`
    //       );
    //     } else {
    //       console.error(`No results for ${answer.department}`);
    //     }
    //     runSearch();
    //   }
    // );
  });
};


const managerSearch = () => {
  inquirer
  .prompt({
    name: 'manager',
    type: 'list',
    message: 'Which manager would you like to view?',
    // choices: [{ name: 'Engineering', value: 4 }]
  })
  .then((answer) => {
    console.log(answer.department);
    employeeByMgr(answer.department[0].toUpperCase() + answer.department.slice(1).toLowerCase());
    // connection.query(
    //   'SELECT * FROM department WHERE ?',
    //   { employee: answer.department },
    //   (err, res) => {
    //     if (res[0]) {
    //       console.log(
    //         `Department: ${department_name}`
    //       );
    //     } else {
    //       console.error(`No results for ${answer.department}`);
    //     }
    //     runSearch();
    //   }
    // );
  });
};


const addEmployee = () => {
  'SELECT * ROLES'
  'SELECT * MANAGER'
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
    type: 'list',
    message: "What is the employee's role?",
    // // get role name and id 
    // choices: [{ name: 'Engineering', value: 4 }]
  },
  {
    name: 'manager',
    type: 'list',
    message: "Who is the employee's manager?",
    // get manager id 
    // choices: [{ name: '', value: }]
  })
  .then((answer) => {
     console.log(answer);
     let firstName = answer.firstName
     let lastName = answer.lastName
     let role = answer.role
     let manager = answer.manager
     // look at ice cream crud
    //  const query = 'INSERT INTO -KEYWORD- SET ?',
    //  {

    //  } 
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



// inquirer
//   .prompt({
//     name: 'employee',
//     type: 'input',
//     message: 'Which employee would you like to view?',
//   })
//   .then((answer) => {
//     console.log(answer.employee);
//     connection.query(
//       'SELECT * FROM employee WHERE ?',
//       { employee: answer.employee },
//       (err, res) => {
//         if (res[0]) {
//           console.log(
//             `Employee ID: ${id} || First Name: ${first_name} || Last Name: ${last_name} || Role: ${role_id} || Manager: ${manager_id}`          
//           );
//         } else {
//           console.error(`No results for ${answer.employee}`);
//         }
//         runSearch();
//       }
//     );
//   });