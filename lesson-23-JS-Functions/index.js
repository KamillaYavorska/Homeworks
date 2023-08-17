// 1.Напиши всі можливі варіанти створення функцій.

function myFirstFunction() {
  console.log('Have fun');
}


// const myFirstFunction = function() {
//   console.log('Have fun');
// }


// const myFirstFunction = () => {
//   console.log('Have fun');
// }

myFirstFunction();

// const myFirstFunction = function () {
//   return 'Have fun';
// }

// console.log(myFirstFunction());

// 2. Створи функцію, яка буде виводити кількість переданих їй аргументів.Створи функцію, яка буде виводити кількість переданих їй аргументів.

let sum = 0;
const numberOfArgs = (args = []) => {
  for (let i = 1; i <= args.length; i++) {
    sum += 1;
  }
};
numberOfArgs([1, 2, 3, 4, 5, 'now', 7, 98]);

console.log(`Кількість аргументів: ${sum}`);


/* 3. Напиши функцію, яка приймає 2 числа і повертає :
-1, якщо перше число менше, ніж друге; 
1 - якщо перше число більше, ніж друге; 
0 - якщо числа рівні. */

function comparison(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}

console.log(comparison(5, 5));


// 4. Напиши функцію, яка обчислює факторіал переданого їй числа.

function factorialize(num) {
  if (num < 0) 
        return -1;
  else if (num == 0) 
      return 1;
  else {
      return (num * factorialize(num - 1));
  }
}

let num = prompt("Enter your number", '');
console.log(factorialize(num));

// 5. Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.

const numb = (num1, num2, num3) => {
  let sum = +(`${num1}${num2}${num3}`);
  return sum;
}

let num1 = +prompt('Enter first number');  
let num2 = +prompt('Enter second number');  
let num3 = +prompt('Enter third number');  
    
console.log(numb(num1, num2, num3));


// 6. Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.
let area = (length, width) => {
  if (width === 0) {
  // Якщо передано лише один параметр, обчислюємо площу квадрата
  return length * length;
} else {
  // Якщо передані обидва параметри, обчислюємо площу прямокутника
  return length * width;
}
}

let length = +prompt('Enter length');
let width = +prompt('Enter width');

console.log(`Area of a rectangle is ${area(length, width)}`);

// 1. Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.

function isPerfectNumber(number) {
  if (number <= 0) {
    return false;
  }

  let divisorsSum = 0;
  
  for (let i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      divisorsSum += i;
    }
  }

  return divisorsSum === number;
}

console.log(isPerfectNumber(28)); // Returns true, as 28 is a perfect number
console.log(isPerfectNumber(12)); // Returns false, as 12 is not a perfect number

// 2. Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.

const findPerfectNumbersInRange = (min, max) => {
  let perfectNumbers = [];
  
  for (let i = min; i <= max; i++) {
    if (isPerfectNumber(i)) {
      perfectNumbers.push(i);
    }
  }
  return perfectNumbers;
};
console.log(findPerfectNumbersInRange(2, 100));