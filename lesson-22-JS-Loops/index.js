// 1. Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.

const userAge = +prompt('Enter your age');
let message;

if (userAge < 12) {
  message = 'You are a child';
} else if (userAge < 18){
  message = 'You are a teenager';
} else if (userAge < 60){
  message = 'You are an adult';
} else if (userAge < 101){
  message = 'You are a senior';
} else {
  message = 'What an unusual age';
}

console.log(message);

// 2. Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).

const userNumber = +prompt('Enter a number between 0 and 9');
let symbol;

if (userNumber === 0) {
  symbol = ')';
} else if (userNumber === 1) {
  symbol = '!';
}  else if (userNumber === 2) {
  symbol = '@';
}  else if (userNumber === 3) {
  symbol = '#';
}  else if (userNumber === 4) {
  symbol = '$';
}  else if (userNumber === 5) {
  symbol = '%';
}  else if (userNumber === 6) {
  symbol = '^';
}  else if (userNumber === 7) {
  symbol = '&';
}  else if (userNumber === 8) {
  symbol = '*';
}  else {
  symbol = '(';
}  
console.log(symbol);

// 3. Підрахуй суму всіх чисел в заданому користувачем діапазоні.

let sum = 0;

while (true) {
  let value = +prompt("Enter a number", '');
  if (!value) break; // The break directive is activated if the user enters an empty line or cancels the input. It stops the loop immediately, passing control to the first line after the loop. Namely, console.log.
  sum += value;
}
console.log( 'Sum: ' + sum );


// 4. Запитай у користувача 2 числа і знайди найбільший спільний дільник.

const firstNumber = +prompt('Enter first number');
const secondNumber = +prompt('Enter second number');
let divisor;
  	// looping from 1 to a and b
  	for (let i = 1; i <= firstNumber && i <= secondNumber; i++) {
    	// check if is factor of both integers
    	if (firstNumber % i == 0 && secondNumber % i == 0) {
      		divisor = i;
    	}
  	console.log(`The Greatest Common Divisor of ${firstNumber} and ${secondNumber} is: ${divisor}`);
  	}


// 5. Запитай у користувача число і виведи всі дільники цього числа.

const number = +prompt('Enter your number: ');

for(let i = 1; i <= number; i++) {
    if(number % i === 0) {
      console.log(`The factor of ${number} is: ${i}`);
    }
}


// 1. Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.

const number = +prompt('Enter 5-digit number: ');
const firstDigit = Math.floor(number / 10000);
const lastDigit = number % 10;
const dozens = number % 10000;
const units = dozens % 1000;
const secondDigit = (dozens - units) / 1000;
const fourthDigit = (number % 100 - lastDigit) / 10 ;

if (firstDigit === lastDigit && secondDigit === fourthDigit) {
console.log(`The number ${number} is a palindrom`);
} else {
  console.log(`Your number is not palindrom`)
}

/* 2. Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
від 200 до 300 - знижка буде 3%; 
від 300 до 500 - 5%;
від 500 і вище - 7%. */
const sum = +prompt('Enter purchase amount: ');
let amount;

if (sum > 200 && sum <= 300) {
  amount = sum - sum * 3 / 100;
} else if (sum > 300 && sum <= 500) {
  amount = sum - sum * 5 / 100;
} else {
  amount = sum - sum * 7 / 100;
}

console.log(`You should pay ${amount}$`);

// OR

const sum = +prompt('Enter purchase amount: ');
let amount;
let discont = (sum > 200 && sum <= 300) ?  amount = sum - sum * 3 / 100 :
(sum > 300 && sum <= 500) ? amount = sum - sum * 5 / 100 :
amount = sum - sum * 7 / 100;
console.log(`You should pay ${amount}$`);


// 3. Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.

let positiveNumbers = 0;
let negativeNumbers = 0;
let nullnumber = 0;
let evenNumbers = 0;
let oddNumbers = 0;
for (let i = 0; i < 10; i++) {
  const userNumber = +prompt('Enter 10 different numbers');
  if (userNumber > 0) {
    positiveNumbers++;
  } else if (userNumber < 0) {
    negativeNumbers++;
  } else if (userNumber == 0) {
    nullnumber++;
  }
  if (userNumber / 2 == 0) {
    evenNumbers++;
  } else if (userNumber / 2 != 0) {
    oddNumbers++;
  }
}
console.log(
  `КPositive numbers: ${positiveNumbers}, Negative numbers: ${negativeNumbers}, Zero: ${nullnumber}, Even numbers: ${evenNumbers}, Odd numbers: ${oddNumbers}`
  );
  

  // 4. Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.

function showNextDay() {
    let days = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"];
    let currentDayIndex = 0;
    
    while (true) {
        let response = confirm(days[currentDayIndex] + ". Хочеш побачити наступний день?");
        
        if (response) {
            currentDayIndex = (currentDayIndex + 1) % days.length;
        } else {
            break;
        }
    }
}

showNextDay();
  
  // 2. Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.
  
  for (let i = 2; i < 10; i++) { 
    for (let j = 1; j <= 10; j++) {
    const result = `${i} x ${j} = ${i * j}`;
    console.log(`${result}\n`);
   }
  }


  