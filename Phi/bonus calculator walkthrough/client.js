var atticus = { name: "Atticus", employeeNumber: "2405", annualSalary: "47000", reviewRating: 3 };
var jem = { name: "Jem", employeeNumber: "62347", annualSalary: "63500", reviewRating: 4 };
var boo = { name: "Boo", employeeNumber: "11435", annualSalary: "54000", reviewRating: 3 };
var scout = { name: "Scout", employeeNumber: "6243", annualSalary: "74750", reviewRating: 5 };
var robert = { name: "Robert", employeeNumber: "26835", annualSalary: "66000", reviewRating: 1 };
var mayella = { name: "Mayella", employeeNumber: "89068", annualSalary: "35000", reviewRating: 2 };

var employees = [ atticus, jem, boo, scout, robert, mayella ];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

//console.log(employees);

// loop through all of the employees
for (var i = 0; i < employees.length; i++) {
  //console.log(employees[i]);
  //employee object has name, employee #, annualSalary, reviewRating

  var newEmployeeObject = firstFunction(employees[i]);
  //use each employee object as the input to your first function
  //console.log the results of each iteration.
  console.log(newEmployeeObject);
}
// the function that creates a new employee object with bonusPercentage, totalBonus, totalCompensation
function firstFunction(employee){
  var bonusEmployeeInformation = {};         // create a new empty object
  bonusEmployeeInformation.name = employee.name;          // adds name from first object into empty Array
  bonusEmployeeInformation.bonusPercentage = 0;
  if (employees.reviewRating==3) {
    bonusEmployeeInformation.bonusPercentage= 0.04;
  }else if (employees.reviewRating == 4) {
      bonusEmployeeInformation.bonusPercentage =  0.06;
    }else if (employees.reviewRating == 5) {
        bonusEmployeeInformation.bonusPercentage =  0.1;
    }
    bonusEmployeeInformation.totalBonus = employee.annualSalary*bonusEmployeeInformation.bonusPercentage;
  }
  return bonusEmployeeInformation{};
}













// Employee Array
//
// Each employee object currently is configured in this way:
//
// The name property holds the employees name.
// The employeeNumber property has their employee number.
// The annualSalary property contains their base annual salary.
// The reviewRating property contains their review rating.
// Logic
// Write a function that takes in one employee object (as an argument to the function), and returns a new object:
//
// The name property should contain the employee's name.
// The bonusPercentage property should contain the bonus percentage the employee is to receive. See section below for calculation instructions.
// The totalCompensation property should be the adjusted annual compensation (base annual + bonus)
// The totalBonus should be the employee's total bonus rounded to the nearest dollar.
// Finally, iterate over the employees array and
//
// use each employee object as the input to your first function
// console.log the results of each iteration.
// Individual Bonus calculation
//
// Those who have a rating of a 2 or below should not receive a bonus.
// Those who have a rating of a 3 should receive a base bonus of 4% of their base annual income.
// Those who have a rating of a 4 should receive a base bonus of 6% of their base annual income.
// Those who have a rating of a 5 should receive a base bonus of 10% of their base annual income.
// If their employee number is 4 digits long, this means they have been with the company for longer than 15 years, and should receive an additional 5%.
// However, if their annual income is greater than $65,000, they should have their bonus adjusted down 1%.
// No bonus can be above 13% or below 0% total.
