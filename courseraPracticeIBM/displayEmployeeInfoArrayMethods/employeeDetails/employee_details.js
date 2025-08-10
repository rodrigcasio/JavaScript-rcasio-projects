// array of employees
const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'html'},
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'Java'},
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'Python'},
    { id: 4, name: 'Rodrigo Casio', age: 25, department: 'Cloud Development', salary: 60000, specialization: 'JavaScript'},
    { id: 5, name: 'Thomas Jefferson', age: 50, department: 'Finance', salary: 50000, specialization: 'C'},
    { id: 6, name: 'Oscar Salcido', age: 21, department: 'Cloud Development', salary: 60000, specialization: 'JavaScript'},
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
        const hrEmployeesDisplay = hrEmployee.map((employee, index) => `<p>${employee.id}: ${employee.name}: - ${employee.age} - ${employee.department} - $${employee.salary}</p>`).join('');
        document.getElementById('employeesDetails').innerHTML =  hrEmployeesDisplay; //displays de result of the employee filtered from the hrEmployee
}

//  ex: using filter method and map to show the financeEmployee result
function displayFinanceEmployees() {
    const financeEmployee = employees.filter(employee => employee.department === 'Finance');    // creates a new array with elements that satisfy the condition
        const financeEmployeesDisplay = financeEmployee.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.age} - ${employee.department} - $${employee.salary}</p>`).join('');
        document.getElementById('employeesDetails').innerHTML = financeEmployeesDisplay;
}

// ex
function displayCloudDevEmployees() {
    const cloudDevEmployees = employees.filter((employees) => employees.department === 'Cloud Development');
        const cloudDevDisplay = cloudDevEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.age} - ${employee.department} - $${employee.salary}</p>`).join('');
        document.getElementById('employeesDetails').innerHTML = cloudDevDisplay;
}

function findEmployeeById(employeeId){
    const foundEmployee = employees.find((employee) => employee.id === employeeId);
        if(foundEmployee){
            document.getElementById('employeesDetails').innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.age} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
        }else{
            document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
        }
}

function findBySpecialization(employeeSpecialization){
    const foundEmployee = employees.filter((employee) => employee.specialization === employeeSpecialization);
        if(foundEmployee.length > 0){
            const displayFoundEmployee = foundEmployee.map((foundEmployee, index) => `<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.age} - ${foundEmployee.department} - $${foundEmployee.salary} - ${foundEmployee.specialization}</p>`).join('');
            document.getElementById(`employeesDetails`).innerHTML = displayFoundEmployee;
        }else{
            document.getElementById(`employeesDetails`).innerHTML = `no employee has been found with this specialization`;
        }
}

// the .filter() method creates a new array with the elements from the employee array that fits the condition and stores the entire object properties..
// the .map() method works on the new array created by .filter() which contains  th full employees objects with all their properties 
// when foundEmployee.map(employee => or (FoundEmployee) => `<p> ${foundEmployee.id} ...) each employee or foundEmployee inside the .map() refers to an object from the filtered array and we can access all the same properties 
// foundEmployee.length > 0 checks if the array has any elements available inside

// only works to find the first one that the method finds..
function findBySpecializationWithFindMethod(employeeSpecialization){
    const foundEmployee = employees.find((employee) => employee.specialization === employeeSpecialization);
    if(foundEmployee){
        document.getElementById('employeeDetails').innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.age} - ${foundEmployee.department} - $${foundEmployee.salary} - ${foundEmployee.specialization}</p>`;
    }else{
        document.getElementById('employeeDetails').innerHTML = `no employee has been found with this specialization`;
    }
}


// last comments polished for better understanding

// The .filter() method creates a new array with elements from the employees array 
// that satisfy the condition, including all the properties of each employee object.
// The .map() method then works on this filtered array, which contains full employee objects,
// to format each employee's details into HTML strings.
// In the .map() callback, each parameter (employee or foundEmployee) refers to one object 
// from the filtered array, allowing access to all its properties.
// Checking foundEmployee.length > 0 verifies that the filtered array has elements before displaying.