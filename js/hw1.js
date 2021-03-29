//задача 2

// Базовый код
// let productName = 'Дроид';
// let pricePerItem = 2000;

// // Пиши код ниже этой строки
// productName = 'Ремонтный дроид';
// pricePerItem = pricePerItem + 1500;

// console.log(pricePerItem);

//задача 5
// // Базовый код
// const productName = 'Дроид';
// const pricePerItem = 3500;

// // Пиши код ниже этой строки
// const message = `Вы выбрали ${productName}, цена за штуку ${pricePerItem} кредитов.`;
// console.log(message);

// //задача 8
// // Пиши код ниже этой строки
// function add(a, b, c) {
//   console.log(`'Результат сложения равен ${a + b + c}.'`);
//   // Пиши код выше этой строки
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);
//задача 10

// function makeMessage(name, price) {
//   // Пиши код ниже этой строки
//   const message = `Вы выбрали ${name}, цена за штуку ${price} кредитов`;
//   // Пиши код выше этой строки
//   return message;
// }
// // что бы эта функция выводила значения нужно присваивать переменной имя функции с аргументами и выводить на консоль
// let result = makeMessage('Двигатель', 4070);
// console.log(result);

// задача 16
// function checkStorage(available, ordered) {
//   let message;
//   // Пиши код ниже этой строки
//   if (available < ordered) {
//     message = 'На складе недостаточно товаров!';
//   } else {
//     message = 'Заказ оформлен, с вами свяжется менеджер';
//   }
//   // Пиши код выше этой строки
//   return message;
// }

// let result = checkStorage(100, 50);
// console.log(result);

// задача 18
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Пиши код ниже этой строки
//   const totalPrice = pricePerDroid * orderedQuantity;
//   if (totalPrice > customerCredits) {
//     message = 'Недостаточно средств на счету!';
//   } else {
//     message = `Вы купили ${orderedQuantity} дроидов, на счету осталось ${
//       customerCredits - totalPrice
//     } кредитов`;
//   }
//   // Пиши код выше этой строки
//   return message;
// }

// let result = makeTransaction(3000, 5, 23000);
// console.log(result);

// задача 29

// function getShippingCost(country) {
//   let message;
//   // Пиши код ниже этой строки
//   let price;
//   switch (country) {
//     case 'Китай':
//       price = 100;
//       message = `Доставка в ${country} будет стоить ${price} кредитов`;
//       break;

//     case 'Чили':
//       price = 250;
//       message = `Доставка в ${country} будет стоить ${price} кредитов`;
//       break;

//     case 'Австралия':
//       price = 170;
//       message = `Доставка в ${country} будет стоить ${price} кредитов`;
//       break;
//     case 'Ямайка':
//       price = 120;
//       message = `Доставка в ${country} будет стоить ${price} кредитов`;
//       break;
//     default:
//       message = 'Извините, в вашу страну доставки нет';
//       // Пиши код выше этой строки
//       return message;
//   }
// }

// задача 31
// const courseTopic = 'JavaSript для начинающих';
// // Пиши код ниже этой строки

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// // Пиши код выше этой строки

// console.log(firstElement);

// function getSubstring(string, length) {
//   const substring = substring.slice(string.length); // Дополни эту строку

//   return substring;
// }

// let result = getSubstring('hello', 2);
// console.log(result);

// задача 33
// function formatMessage(message, maxLength) {
//   let result;
//   // Пиши код ниже этой строки
//   if (message.length <= maxLength) {
//     result = message;
//   } else {
//     // result = `${message.slice(0, maxLength)}...`;
//   }
//   // Пиши код выше этой строки
//   return result;
// }

// let finish = formatMessage('hello', 12);
// console.log(finish);
// задача 36

function checkForSpam(message) {
  let result;
  // Пиши код ниже этой строки
  result = message.toLowerCase().includes('spam' || 'sale');
  // Пиши код выше этой строки
  return result;
}

let result = checkForSpam('spam');
console.log(result);

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  switch (password) {
    case null:
      message = 'Отменено пользователем!';
      break;
    case ADMIN_PASSWORD:
      message = 'Добро пожаловать!';
      break;
    default:
      message = 'Доступ запрещен, неверный пароль!';
  }

  return message;
}
