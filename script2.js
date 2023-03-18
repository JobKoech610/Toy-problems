// Challenge 2: Speed Detector (Toy Problem)

// Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”.
//  Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point 
// and print the total number of demerit points.

//> For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points,
//  the function should print: “License suspended”.


// solution
//  pseudocode
// 1.function that gets in speed 
// 2.print 'OK' if speed<70- conditional statement.
// 3.speed > 70 it should give a demerit points
// 4.for every 5km/s above 70 should give one demerit point meaning (5km/s= 1demerit point)
// 5. output the total number of demerit points.
// 6. more than 12 demerit points, the function should print: “License suspended”.

function car(speed){
    // let inputSpeed = prompt("speed");//accept inputs

    // let speed = parseInt(inputSpeed, 10)
const speedLimit = 70;
// 5km/s= 1demerit point
const kilometersPerDemerit = 5;

 
if (speed<speedLimit){
    return 'OK';
}else {
let speedAboveSeventhy = (speed-speedLimit);
//roundoff using Math.floor
let demeritPoint = Math.floor(speedAboveSeventhy/kilometersPerDemerit)
if(demeritPoint>12){
    return 'License suspended';
}else {
    return `Total number of demerits point is ${demeritPoint}`; 
}

}

}

console.log(car(20));

