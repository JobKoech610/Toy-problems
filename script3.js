// // Challenge 3: Net Salary Calculator (Toy Problem)

// // Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. 
// // Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 

// // pseudocode
// // 1. write a function which accept basic salary and benefits as input
// // 2. calculate the payee using a formula
// // 3. formula: Step 1. Gross Income /grossPay= Basic salary + allowances + commissions. 
// //             Step 2. Taxable Income = Gross Income - payee- all deductions/exemptions allowed by law e.g. NSSF, private pension.
                //   payee is tax
/*
let basicsalaryString= prompt("enter your basicsalary");
let basicSalary = parseInt( basicsalaryString,10);
let benefitsString = prompt("enter your benefits");
let benefits =parseInt(benefitsString,10);
*/

//function accepting  basic salary and benefits as inputs
function paye(basicSalary,benefits){


    //calculate grosspay
    // benefits include all allowances and commissions
    let grossPay = basicSalary + benefits;
    
    //taxable income

    // Calculate payee (tax) 
let payee;
if (grossPay <= 24000) {
  payee = 0;
} else if (grossPay <= 40000) {
  payee = (grossPay - 24000) * 0.1;
} else if (grossPay <= 60000) {
  payee = 1600 + (grossPay- 40000) * 0.2;
} else {
  payee = 5600 + (grossPay - 60000) * 0.3;
}

    // conditional statement to give rate of nhifdeductions of each gross income
    // let grossPay = 15000; // replace with the actual gross pay amount

    let nhifdeductions;
   
if (grossPay <= 5999) {
    nhifdeductions=150;
} else if (grossPay >= 6000 && grossPay <= 7999) {
    nhifdeductions=300;
} else if (grossPay >= 8000 && grossPay <= 11999) {
    nhifdeductions=400;
} else if (grossPay >= 12000 && grossPay <= 14999) {
    nhifdeductions=500;
} else if (grossPay >= 15000 && grossPay <= 19999) {
    nhifdeductions=600;
} else if (grossPay >= 20000 && grossPay <= 24999) {
    nhifdeductions=750;
} else if (grossPay >= 25000 && grossPay <= 29999) {
    nhifdeductions=850;
} else if (grossPay >= 30000 && grossPay <= 34999) {
    nhifdeductions= 900;
} else if (grossPay >= 35000 && grossPay <= 39999) {
    nhifdeductions=950;
} else if (grossPay >= 40000 && grossPay <= 44999) {
    nhifdeductions=1000;
} else if (grossPay >= 45000 && grossPay <= 49999) {
    nhifdeductions=1100;
} else if (grossPay >= 50000 && grossPay <= 59999) {
    nhifdeductions=1200;
} else if (grossPay >= 60000 && grossPay <= 69999) {
    nhifdeductions=1300;
} else if (grossPay >= 70000 && grossPay <= 79999) {
    nhifdeductions=1400;
} else if (grossPay >= 80000 && grossPay <= 89999) {
    nhifdeductions=1500;
} else if (grossPay >= 90000 && grossPay <= 99999) {
    nhifdeductions= 1600;
} else if (grossPay >= 100000) {
    nhifdeductions= 1700;
} else {
  console.log("Invalid gross pay amount");
}
// Calculate NSSF Deductions
const nssfDeductions = Math.min(0.12 * basicSalary, 2160);
//calculate all deductions
let deductions = (nhifdeductions+nssfDeductions)
//calculation of netsalary
let netSalary = (grossPay - payee - deductions);
//output 
console.log(`grossPay: ${grossPay}`);
console.log(`payee: ${payee}`)
console.log(`total deductions: ${deductions}`);
console.log(`nssfdeductions: ${nssfDeductions}`);
console.log(`NetSalary: ${netSalary}`);

}
//function calling with basicsalry and benefits as argurments
paye(1000000,50)
//paye()
    
//  console.log(`Net-Salary: ${paye(1000,50)} kshs`);
 
//console.log( )



























