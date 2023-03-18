// Challenge 1: Student Grade Generator (Toy Problem)

// Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 

//         A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

// soloution to student grade generator
// Pseudocode 
// 1.write a function that allows input using prompt(). 
// 2.range of input 0-100.
// 3.use conditional statement i.e if... else if 
// 4.we should expect correct output when student enter the mark.
// 5.output the grade through the alert() for grade to be visible.

  


function marks(mark){
//     let input = prompt("enter your marks here");//accept inputs

// let mark = parseInt(input, 10); //change input from text to number

    // let grade;
    if (mark> 79) {
        return "grade A";
      } else if (mark >= 60 && mark <= 79) {
        return "grade B";
      } else if (mark >= 50 && mark <= 59) {
        return "grade C";
      } else if (mark >= 40 && mark <= 49) {
        return "grade D";
      } else if (mark <= 39) {
        return "grade E";
      }

    
}

console.log(marks(100));
console.log(marks(50));
console.log(marks(20));
console.log(marks(70));



