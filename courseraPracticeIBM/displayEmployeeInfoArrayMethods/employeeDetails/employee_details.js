// array of employees
const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
    { id: 4, name: 'Rodrigo Casio', age: 40, department: 'Cloud Development', salary: 60000 },
    { id: 5, name: 'Thomas Jefferson', age: 50, department: 'Finance', salary: 50000 },
    { id: 6, name: 'Oscar Salcido', age: 21, department: 'Cloud Development', salary: 60000 },
];

// display employees   (employee : acces the properties of each employee object) (index: if we want to use the position of the employees in the array [for example: to display a row number or for special formating])
// the map method stores employee's detials in the variable totalEmployees, which shows details in the <div> element (with the help of the ID) displays employee detials into one continous string without separations.
function displayEmployees() {
    const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.age} - ${employee.department} - $${employee.salary} </p>`).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

// using reduce method
function calculateTotalSalaries() {  // total = accumulator, 0 = initialValue of accumulator
    const totalSalaries = employees.reduce((total, employee) => total + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}

// using filter method and map to show the hrEmployee result
function displayHREmployees() {
    const hrEmployee = employees.filter(employee => employee.department === 'HR');
        const hrEmployeesDisplay = hrEmployee.map((employee, index) => `<p>${employee.id}: ${employee.name}: - ${employee.age} - ${employee.department} - ${employee.salary}</p>`).join('');
        document.getElementById('employeesDetails').innerHTML =  hrEmployeesDisplay; //displays de result of the employee filtered from the hrEmployee
}

//  ex: using filter method and map to show the financeEmployee result
function displayFinanceEmployees() {
    const financeEmployee = employees.filter(employee => employee.department === 'Finance');    // creates a new array with elements that satisfy the condition
        const financeEmployeesDisplay = financeEmployee.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.age} - ${employee.department} - ${employee.salary}</p>`).join('');
        document.getElementById('employeesDetails').innerHTML = financeEmployeesDisplay;
}

// ex
function displayCloudDevEmployees() {
    const cloudDevEmployees = employees.filter((employees) => employees.department === 'Cloud Development');
        const cloudDevDisplay = cloudDevEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.age} - ${employee.department} - ${employee.salary}</p>`).join('');
        document.getElementById('employeesDetails').innerHTML = cloudDevDisplay;
}

function findEmployeeById(employeeId){
    const foundEmployee = employees.find((employee) => employee.id === employeeId);
        if(foundEmployee){
            document.getElementById('employeesDetails').innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.age} - ${foundEmployee.department} - ${foundEmployee.salary}</p>`;
        }else{
            document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
        }
}



