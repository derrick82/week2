// Derrick Adams,  Scott Bowen,  Due Monday September 19th

// Problem 1
var numArray= [18,24,57,98,45,27,3,456,3,35,85];
var position= [5]
console.log(numArray[5])


// Problem 2
var total = 0;
for (var i = 0; i < numArray.length; i++){
    total=total + numArray[i];
    }
console.log(total);


// Problem 3
var numbers= [];
numbers.push(1,2,3,4,5,6,7,8,9,10);
console.log(numbers);
numbers.pop(10);
console.log(numbers);


// Problem 4
function calculate(x, y) {
    if (x + y <= 25) {
        console.log("true")
    } else {
        console.log("false")
    }
}
calculate(18,8);
calculate(15,7);


// Problem 5
function combine(x, y) {
    var word= (x + y);
if (word.length > 12) {
        console.log("Error, string too long.");
    }   else {
        console.log(word);
    }

}
combine("Derrick", "Ashley");
combine("Felice", "Toni");

    
// Problem 6
var num= 0;
while (num <= 20) {
    if (num <= 5) {
    console.log(num + " Very low number");
    num++;
}   else if (num > 5 && num <= 10) {
    console.log(num + " Low Number");
    num++;
}   else if (num > 10 && num <= 15) {
    console.log(num + " High Number");
    num++;
}   else {
    console.log(num + " Very High Number");
    num++;
}
}

 