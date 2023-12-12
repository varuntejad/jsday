console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");

// Using a for loop to repeat code
for (let i = 1; i <= 5; i++) {
    console.log("codekaro");
}

for (let i = 5; i >= 1; i--) {
    console.log(i);
}

let items = ['bread', 'milk', 'coffee', 'apple'];

// Printing items from the array
for (let i = 0; i < 4; i++) {
    console.log(items[i]);
}

// Using a while loop
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

let day = 'Monday';

switch (day) {
    case 'Monday':
        console.log('It\'s the start of the week.');
        break;

    case 'Tuesday':
    case 'Wednesday':
        console.log('It\'s the middle of the week.');
        break;

    case 'Thursday':
    case 'Friday':
        console.log('It\'s almost the weekend.');
        break;

    case 'Saturday':
    case 'Sunday':
        console.log('It\'s the weekend!');
        break;

    default:
        console.log('Invalid day.');
}

// Using a do...while loop
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);


//functions

function sayhello(){
    console.log("hello");
}

sayhello(); //it prints hello 

//block of reusable code
//when ever we want we can call
//when same task need to perform multimple times we can simply call funciton

// Define a function named "grinder" that takes an "items" parameter
function grinder(items) {
    // Logic inside the function
    console.log("Grinding...", items);
}

// Call the function with the argument "tomatoes"
grinder("tomatoes");

// Call the function without providing an argument (items will be undefined)
grinder();

// You can call the function with different arguments
grinder("coffee beans");
grinder("pepper");

//funciton to add 2 numbers

function add(a,b){
    console.log(a+b);
}
add(2,3);
add(13,43);
add(12,12,32);// dont takes 3rd number output is 24

function cube(n){
    console.log(n*n*n);
}

cube(4);
cube(5);


//arrow funcitons 
//introduced in es6 i.e upcoming version of js
//how we write arrow function
//normal function 
//function functionName(){}
//arrowfunction
//fuctionName()=>{}

arrowDemo =() => {
    console.log("arrow funciton")
}
arrowDemo()

sqr=(n)=>{
    console.log(n*n);
}

sqr(3);


// const add = (a, b) => a + b;
// console.log(add(2, 9)); // Outputs: 11

//difference between arrow and normal when to use what