
// Count backwards from 100 with a while loop.
// If it's divisible by 25, print that it is.
i = 100;
while(i >= 0) {
    // If it's divisible by 25, print that.
    if (i % 25 == 0 && i != 0) {
      console.log(i + " is divisible by 25.");        
    }
    // Otherwise, just print the number.
    else {
      console.log(i);
    }
    // No matter what, increment i.
    i--;
}

// Count from 1-100 and fizz buzz


for (var i=1; i <= 100; i++){

    if (i % 15 == 0)
        console.log("FizzBuzz");
    else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else
        console.log(i);
}