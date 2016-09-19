//while 
var count = 1;

while(count<=5){
    console.log(count);
    count++;

}

// for each 

var names = ["Bob", "Steve", "Janine", "Linus"];
console.log(names.length);
console.log("Supercalifragilisticexpiolidocious".length);
var longWord = "Supercalifragilisticexpiolidocious";
console.log(longWord.length);
console.log(names[2]);

for(var n in names) {
    console.log(names[n]);
}


for(var n in names) {
    var name = names[n];
    if (name[0] == "B" || name[0] == "b") {
        console.log("Name starts with B: " + names[n]);
    }
}

// for 

console.log("\n\n\n\n\n\n\n");

for (var i=0; i<=100; i+=2){
    console.log(i);

}

// do while 
var enteredCorrectAnswer = false;
do{//ask for guess
enteredCorrectAnswer = true;

}while(!enteredCorrectAnswer);


//Challenges

 // BRONZE: 
// Create a loop that prints out all numbers from 0-30 with the exception of 3, 13, and 17.
for (var i=0; i <= 30; i++) {
    // Exclude 3, 13, and 17
    if (i != 3 && i != 13 && i != 17) {
        console.log(i);
    }
}

// alternative approach:
for (var i=0; i <= 30; i++) {
    // Exclude 3, 13, and 17
    if (i == 3 || i == 13 || i == 17) {
        continue;
    }
    console.log(i);
}

// SILVER:
// Create a loop that creates a String full of all numbers between 10-50
// “1011121314151617…” 

var result = "";
for (var i=10; i <= 50; i++) {
    // add the numbers together
    // ...because result is a string,
    // js will add the number as a string
    result += i;
}

console.log(result);

// GOLD:
// Create a loop that prints out the first 20 numbers of the fibonacci sequence

console.log("\n\n--- Beginning Fibonacci Sequence ---\n\n");
var sequences = 2;
var a = 0, b = 1, c = 1; 

while (sequences < 100)
{
	// Calculate and display the current fibonacci value.
	c = a + b;
	console.log(c);
	
	// Do the swap.
	a = b;
	b = c;

	// Increment sequence.
	sequences++;
}

console.log("\n\n--- Done with Fibonacci Sequence ---\n\n");
//count backwards from 100 by 5

for(var i=100 ; i>=0; i-=5){
   console.log(i);
}



//count backwards using 100 with while loop
var i=100;
while(i>=0){
    console.log(i);
    i--;
}

//count to 10 using a while loop

var i=10;
while(i<0){
    console.log(i);
    i++;
}