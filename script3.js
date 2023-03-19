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
function calNetSalary(basicSalary,benefits){


    //calculate grosspay
    // benefits include all allowances and commissions
    let grossPay = basicSalary + benefits;
    
    //taxable income

    // Calculate payee (tax) 
let payee;
if (grossPay <= 24000) {
  payee = (grossPay)*0.1;
} else if (grossPay >= 24000 && grossPay<=32333) {
  payee = (grossPay) * 0.25;
} else if(grossPay >= 32333){
payee = (grossPay) * 0.3;
}

    // conditional statement to give rate of nhifdeductions of each gross income
    // let grossPay = 15000; // replace with the actual gross pay amount

    let nhifdeDuctions;
   
if (grossPay <= 5999) {
    nhifdeDuctions=150;
} else if (grossPay >= 6000 && grossPay <= 7999) {
    nhifdeDuctions=300;
} else if (grossPay >= 8000 && grossPay <= 11999) {
    nhifdeDuctions=400;
} else if (grossPay >= 12000 && grossPay <= 14999) {
    nhifdeDuctions=500;
} else if (grossPay >= 15000 && grossPay <= 19999) {
    nhifdeDuctions=600;
} else if (grossPay >= 20000 && grossPay <= 24999) {
    nhifdeDuctions=750;
} else if (grossPay >= 25000 && grossPay <= 29999) {
    nhifdeDuctions=850;
} else if (grossPay >= 30000 && grossPay <= 34999) {
    nhifdeDuctions= 900;
} else if (grossPay >= 35000 && grossPay <= 39999) {
    nhifdeDuctions=950;
} else if (grossPay >= 40000 && grossPay <= 44999) {
    nhifdeDuctions=1000;
} else if (grossPay >= 45000 && grossPay <= 49999) {
    nhifdeDuctions=1100;
} else if (grossPay >= 50000 && grossPay <= 59999) {
    nhifdeDuctions=1200;
} else if (grossPay >= 60000 && grossPay <= 69999) {
    nhifdeDuctions=1300;
} else if (grossPay >= 70000 && grossPay <= 79999) {
    nhifdeDuctions=1400;
} else if (grossPay >= 80000 && grossPay <= 89999) {
    nhifdeDuctions=1500;
} else if (grossPay >= 90000 && grossPay <= 99999) {
    nhifdeDuctions= 1600;
} else if (grossPay >= 100000) {
    nhifdeDuctions= 1700;
} else {
  console.log("Invalid gross pay amount");
}
// Calculate NSSF Deductions

const nssfDeductions = (0.06 * basicSalary);
//calculate all deductions
let deductions = (nhifdeDuctions+nssfDeductions)
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
calNetSalary(10000,5000)
//paye()
    
//  console.log(`Net-Salary: ${paye(1000,50)} kshs`);
 
//console.log( )



























