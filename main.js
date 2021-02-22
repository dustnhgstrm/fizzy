/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/
function fizzy(num) {
  const fizz = "Fizz"
  const buzz = "Buzz"
  const fBuzz = "FizzBuzz"
  if (num % 3 !== 0 && num % 5 !== 0) {
    return num;
  } else if (num % 3 === 0 && num % 5 === 0) {
    return fBuzz;
  } else if ( num % 3 === 0) {
    return fizz;
  } else return buzz;  
}
 
  








/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/


if (typeof fizzy === "undefined") {
  fizzy = undefined;
}

module.exports = {
  fizzy,
};
