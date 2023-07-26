// Multiplication of 0.1 and 0.2
const firstNumber = 0.1*10;
const secondNumber = 0.2*10;
const mul = (firstNumber*secondNumber) / 100;
console.log(mul);


// Addition of "1" and 2
const typeText = '1';
const typeNumber = 2;
const sum = +typeText + typeNumber;
console.log(sum);


// Calculating amount of files on USB
const storageCapacity = +prompt('Enter Memory storage capacity of USB in GB');
const MBtoGB = 0.001;
const fileUsb = 820 * MBtoGB;
const amountOfFiles = storageCapacity * fileUsb;
console.log('Amount of files : ' + Math.floor(amountOfFiles));


// Calculating how many chocolates can user buy
const amountOfMoney = +prompt('How much money do you have?');
const priceOfProduct = +prompt('How much does one bar of chocolate cost?');
const amountOfProduct = amountOfMoney / priceOfProduct;
const restOfMoney = amountOfMoney % priceOfProduct;
console.log(`Amount of chocolate : ${Math.floor(amountOfProduct)} pieces,%nYour change : ${restOfMoney}$`);


// Request a three-digit number from a user and type out its this number in reverse. Use the % operator (the remainder in division) for this task.
const userNumber = +prompt('Enter number');
const hundreds = Math.floor(userNumber / 100);
const dozens = userNumber % 100;
const units = dozens % 10;
const secondDigit = (dozens - units) / 10;
console.log(+`${units}${secondDigit}${hundreds}`);


// Request an amont of money a user is putting in bank for 2 month. Deposit percentage is 5% per year. Type out user benefit for 2 month. 
const bankDeposit = +prompt('Enter bank deposit for 2 month');
const months = 12;
const amountOfMonth = 2;
const depositPercentage = 5;
const twoMonthBenefit = bankDeposit * (depositPercentage / 100) * amountOfMonth;
console.log(`Your benefit : ${twoMonthBenefit}`);


// Logical Operators
const a = 2;
const b = 0;
const c = 3;
/*Returns 0, because 0 is false and AND operator :
1)Evaluates operands from left to right.
2)For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
3)If all operands have been evaluated (i.e. all were truthy), returns the last operand.*/
const and = a && b && c; 
/* Returns 2, because 2 is first true operator to be evaluated. OR operator :
1)Evaluates operands from left to right.
2)For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
3)If all operands have been evaluated (i.e. all were false), returns the last operand. */
const or = a || b || c;
/*Returns 3, because the precedence of AND && is higher than ||, so it executes first.*/ 
const andOr = a && b || c;
console.log(`&& ${and}\n|| ${or}\n ${andOr}`);


