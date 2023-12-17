// First try: implementation from pseudo-code
// - Use Remainder op: if divisible, the rest is 0 (prevent decimals)
// - When divisible by both, prints Fizz and Buzz in one line each
function fizzBuzz1() {
  
  for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0){
      console.log("Fizz");
    } 

    if (i % 5 === 0) {
       console.log("Buzz");
    }

    if ((i % 3 !== 0) && (i % 5 !== 0)) {
       console.log(i);
    }
  }
  
}

//Final answer: optimize operations
// - Print FizzBuzz in the same lime
// - Less if statements
// - O(1) since it goes from 0 to 100 (constant). If it went infinitely, would be Linear ( O(n) )
function fizzBuzzFinal() {
  
  for (let i = 0; i <= 100; i++) {
    let output = "";

    if (i % 3 === 0) output += "Fizz";

    if (i % 5 === 0) output += "Buzz";

    // Other conditions can be added

    console.log(output || i); // Logs the output. If empty, logs the number
  }
  
}

fizzBuzzFinal();
