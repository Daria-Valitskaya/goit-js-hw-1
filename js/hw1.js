//задача 2

// Базовый код
// let productName = 'Дроид';
// let pricePerItem = 2000;

// // Пиши код ниже этой строки
// productName = 'Ремонтный дроид';
// pricePerItem = pricePerItem + 1500;

// console.log(pricePerItem);

//задача 5
// Базовый код
const productName = 'Дроид';
const pricePerItem = 3500;

// Пиши код ниже этой строки
const message = `Вы выбрали ${productName}, цена за штуку ${pricePerItem} кредитов.`;
console.log(message);

//задача 8
// Пиши код ниже этой строки
function add(a, b, c) {
  console.log(`'Результат сложения равен ${a + b + c}.'`);
  // Пиши код выше этой строки
}

add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);
//задача 10

function makeMessage(name, price) {
  // Пиши код ниже этой строки
  const message = `Вы выбрали ${name}, цена за штуку ${price} кредитов`;
  // Пиши код выше этой строки
  return message;
}
// что бы эта функция выводила значения нужно присваивать переменной имя функции с аргументами и выводить на консоль
let result = makeMessage('Двигатель', 4070);
console.log(result);
