var item = 10 > 2;
var x = 10 == 9;
var y = 20 < 100;
var z = 5 == 5;
var truth = 21 <= 20;
console.log(item);
console.log(x);
console.log(y);
console.log(z);
console.log(truth);
//
console.log("DERRICK");
console.log(78);
console.log("cat");
console.log(3.14);
console.log("a");

console.log(2000+400+62);
console.log(2000-400-62);
console.log(200*400/62);
console.log(2000/400*62);
console.log(10 % 3);
//

var isOn = true;
var isOff = false;

if (isOn) { console.log( "power" );}

var x = (8 < 10 &&  6 < 7);
var y = (8 == 9 || 7 == 6);

if (x || y) {console.log("happy");}
else {console.log("sad");}


var x = (8 < 8 &&  7 < 7);
var y = (8 == 9 || 7 == 6);

if (x || y) {console.log("happy");}
else {console.log("sad");}


var bankAccount = 50000;
var studentDebt = 40000;
var difference = bankAccount - studentDebt;

console.log("I have some money $" + bankAccount + " in my account, and Uncle Sam wants to take it.");
if (bankAccount - studentDebt > 3000) {
    console.log("I can only eat potted meat");
} else {    console.log("bring on the steak, I have $" + difference + "left in the bank.");
}
//
var myNumber = 7;
var newEquation = 7 * 7;
var myString = "hello";
console.log(myNumber * newEquation);

// given 
 var a = 19;
 var b = 40;
 var temp = 0;
 
 // create 3 integers, multiply the first 2, then divide by the third.  print out the result

 var x = 20;
 var y = 10;
 var z = 5;

 console.log(x * y / z);

 var temp = 0

 console.log(x * y * temp + z);

var answer = x * y / z;
console.log(answer); 

//challenge 2

var myNumber = 0; 

console.log((myNumber + 10 - 1) * 9 / 7);

// challenge 3

var age = 34;
var maxage = 75;
var use = 10;

console.log( "You will need  NN to last you until the ripe old age of X "  + ((365 * use) * (maxage - age)));
var death = ((use * 365) * (maxage - age));

console.log("you will need " + death + " to last you until the ripe old age of " + maxage + ".");


var x = "Ford ";
var y = "Focus ";
var z = 2010 ;
var string = x + y + z;
console.log(string);
var kellybluebook = "My car is the not quite brand new " + z + " " + x + y;
console.log(kellybluebook);
//
var myNumber = 7;
var newEquation = 7 * 7;
var myString = "hello";
console.log(myNumber * newEquation);

// given 
 var a = 19;
 var b = 40;
 var temp = 0;
 
 // create 3 integers, multiply the first 2, then divide by the third.  print out the result

 var x = 20;
 var y = 10;
 var z = 5;

 console.log(x * y / z);

 var temp = 0

 console.log(x * y * temp + z);

var answer = x * y / z;
console.log(answer); 

//challenge 2

var myNumber = 0; 

console.log((myNumber + 10 - 1) * 9 / 7);

// challenge 3

var age = 34;
var maxage = 75;
var use = 10;

console.log( "You will need  NN to last you until the ripe old age of X "  + ((365 * use) * (maxage - age)));
var death = ((use * 365) * (maxage - age));

console.log("you will need " + death + " to last you until the ripe old age of " + maxage + ".");


var x = "Ford ";
var y = "Focus ";
var z = 2010 ;
var string = x + y + z;
console.log(string);
var kellybluebook = "My car is the not quite brand new " + z + " " + x + y;
console.log(kellybluebook);
//
// Arrays

var agesInClass = [31,38,39,45,23,71];

console.log(agesInClass[5]);


var agesInClass = [31,38,39,45,23,71];

console.log("Kenn is the very old age of ", agesInClass[5]);

var megaAge = agesInClass[0] + agesInClass[3]

console.log("When their powers combine ", megaAge);
agesInClass.push(20);

console.log(agesInClass.length);

var classNames = [];

classNames.push("Kenn");
console.log(classNames);



var numArray = [1,2,3,4,5,6,7,8,9,10];

for (var i = 0; i < numArray.length; i++){

    console.log("number ", numArray[i]);
}

// or

for(number in numArray){
    console.log("number ", numArray[number])
}
//
var studentScore = 79;

if (studentScore >= 90) {
    console.log("Congratulations you got an A");
}
else if (studentScore >= 80) { 
    console.log("Sweet keep it up!  You have gotten a B");
}
else if (studentScore >= 70) {
    console.log("You're in the middle of the pack!  You got a C");
}
else if (studentScore >= 60) {
    console.log("You got a D on this test, work harder!");
}
else {
    console.log("You failed this test!  Work harder!");
}
//
var timesWeBeatPatriotsLastSeason = 3;
var timesTheyBeatUs = 2;

if (timesWeBeatPatriotsLastSeason > timesTheyBeatUs) {
	console.log("We are just better at football.");
} 
else if (timesTheyBeatUs < timesWeBeatPatriotsLastSeason) {
	console.log("Yea, well Andrew Luck was hurt.");
} 
else if (timesWeBeatPatriotsLastSeason == timesTheyBeatUs) {
	console.log("They were really lucky.");
} 
else {
	console.log("Patriots just cheat.");
}
//
for (var i = 10; i >= 1; i = i - 1) {
    console.log("Lift off in " + i);
}


//Print have a great day three times


for ( i = 3; i >= 1; i = i -1) {
    console.log("have a great day!");
}


for (i = 100; i >= 0; i = i - 5) {
    console.log(i);
}

for (i = 100; i >= 0; i = i - 10) {
    console.log(i);
}

var score = 0;
while (score < 10){
    score = score + 1
    console.log("score " + score)
}

var x = 0;
do {
    x++
    console.log("the number is " + x)
}
while ( x < 10);

// create a for loop that counts to 100 by 25s
// when you get to 50, print "Halfway There!"

for ( x = 0; x <= 100; x = x + 25) {
    console.log(x);
if ( x == 50){
        console.log("You're halfway there! ");}
}

// Funnel cakes spelled vertically

var fun = "Funnel cakes have got to go";

for (var fire = 0; fire <= fun.length; fire++ ){
console.log(fun[fire]);
}

//much better way to do the funnel cake challenge!

for (var letter in fun){
    console.log(fun[letter])
}
//
if(/*hits.length is 0*/) {
    console.log("Your name wasn't found!");
} else {
    console.log(hits);
}
//
// Review

for (var i = 0; i <= 10; i = i + 1){
    console.log(i);
}

var i = 0;

while (i<=100) {
i=i+1;
console.log(i);
}


for (var i = 0; i <= 50; i = i+1){
    if(i == 45) {
        console.log("man its been a short week");
    }  else {
    console.log(i);
}
}

var myNumbers= [1,2,3,4,5,6,7,8,9,10];
var total = 0;
for (var i = 0; i < myNumbers.length; i++){
    total=total + myNumbers[i];
    }
console.log(total);
//
var test = 50;

var score = Math.floor((Math.random() * 25) + 25);

console.log(score);

if (score >= test) { 
    console.log("Congratulations");
}
else {
     console.log("Study up and try again next time.");
}
//
function greetings(name) {
    console.log("The weekend is near " + name);
}
greetings("bob");


function hey(soup) {
    console.log("Hello" + soup);
}

hey("world ");


function hey(soup) {
    console.log("Hello " + soup);
}

hey("Derrick");

function bow(x, y) {
    console.log(x + y);
    console.log(x - y);
    console.log(x * x);
    console.log(y * x);
    console.log(x^2);
}

bow(5, 7);

// even and odd function

function how(x) {
    if (x % 2 == 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}
how(4);
how(9);

// Minimum function

function golf(x , y) {
    if (x > y) {
        console.log(y);
    } else  {
        console.log(x);
    }
}
golf(17, 9);

//another way for above

function smallerNumber(num1, num2) {
    if (num1<num2) {
        return num1;
    } else {
        return num2;
    }
}

var minProblem = smallerNumber( 9, 5);
console.log(minProblem);

// easier way to do even and odd function

function isEven(num) {
    return num % 2 == 0;
}
var result = isEven(48);
console.log(result ? "Even" : "Odd");

// average an array of numbers

var values = [10, 20, 30, 40], thisTotal=0, thisAverage=0;
for(var i=0; i<values.length; i++) {
    thisTotal += values[i];
}
thisAverage = (thisTotal / values.length);
console.log(thisAverage);

// using a function, reverse the string Kentucky then 
//write out the solution
var reverse = "";
var ken = "Kentucky";
for (var i = ken.length - 1; i >= 0; i--) {
    reverse = reverse + ken[i];
    }
  console.log(reverse);

//sort the numbers: [8,6,7,5,3,0,9]

var value = [10, 20, 30, 40], thisTotal=0;
    for(var i=0; i<value.length; i++) {
    thisTotal += value[i];
}

console.log(thisTotal);
//




