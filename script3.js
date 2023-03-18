// Challenge 3: Net Salary Calculator (Toy Problem)

// Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. 
// Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 

// pseudocode
// 1. write a function which accept basic salary and benefits as input
// 2. calculate the payee using a formula
// 3. formula: Step 1. Gross Income = Basic salary + allowances + commissions. 
//             Step 2. Taxable Income = Gross Income - all deductions/exemptions allowed by law e.g. NSSF, private pension.







// function paye(basicSalary,benefits){

//     //calculate gross income
//     const allowances = benefits;
//     const commissions = 0;
//     let grossIncome = (basicSalary +allowances)+commissions;

//     //taxable income
    
//     let taxableIncome = grossIncome - deductions
//     alert(taxableIncome);

// }

// paye(1000,50);














// let grossPay = 15000; // replace with the actual gross pay amount

// if (grossPay <= 5999) {
//   console.log("Deduction: 150 Ksh");
// } else if (grossPay >= 6000 && grossPay <= 7999) {
//   console.log("Deduction: 300 Ksh");
// } else if (grossPay >= 8000 && grossPay <= 11999) {
//   console.log("Deduction: 400 Ksh");
// } else if (grossPay >= 12000 && grossPay <= 14999) {
//   console.log("Deduction: 500 Ksh");
// } else if (grossPay >= 15000 && grossPay <= 19999) {
//   console.log("Deduction: 600 Ksh");
// } else if (grossPay >= 20000 && grossPay <= 24999) {
//   console.log("Deduction: 750 Ksh");
// } else if (grossPay >= 25000 && grossPay <= 29999) {
//   console.log("Deduction: 850 Ksh");
// } else if (grossPay >= 30000 && grossPay <= 34999) {
//   console.log("Deduction: 900 Ksh");
// } else if (grossPay >= 35000 && grossPay <= 39999) {
//   console.log("Deduction: 950 Ksh");
// } else if (grossPay >= 40000 && grossPay <= 44999) {
//   console.log("Deduction: 1000 Ksh");
// } else if (grossPay >= 45000 && grossPay <= 49999) {
//   console.log("Deduction: 1100 Ksh");
// } else if (grossPay >= 50000 && grossPay <= 59999) {
//   console.log("Deduction: 1200 Ksh");
// } else if (grossPay >= 60000 && grossPay <= 69999) {
//   console.log("Deduction: 1300 Ksh");
// } else if (grossPay >= 70000 && grossPay <= 79999) {
//   console.log("Deduction: 1400 Ksh");
// } else if (grossPay >= 80000 && grossPay <= 89999) {
//   console.log("Deduction: 1500 Ksh");
// } else if (grossPay >= 90000 && grossPay <= 99999) {
//   console.log("Deduction: 1600 Ksh");
// } else if (grossPay >= 100000) {
//   console.log("Deduction: 1700 Ksh");
// } else {
//   console.log("Invalid gross pay amount");
// }


