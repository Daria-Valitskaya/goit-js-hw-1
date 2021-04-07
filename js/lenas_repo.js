// Задачи из репо лены

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  // Пиши код ниже этой строки

  if (password === ADMIN_PASSWORD) {
    return 'Добро пожаловать!';
  }
  return 'Доступ запрещен, неверный пароль!';
}

console.log(checkPassword('jqueryismyjam'));

// 3
function checkStorage(available, ordered) {
  // Пиши код ниже этой строки

  if (ordered === 0) {
    return 'В заказе еще нет товаров';
  }
  if (ordered > available) {
    return 'Слишком большой заказ, на складе недостаточно товаров!';
  }
  return 'Заказ оформлен, с вами свяжется менеджер';
}

console.log(checkStorage(100, 50));
// 5
// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
// // Пиши код ниже этой строки
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];
// console.log(lastElement);

// 8
// Стартовый код
// const fruits = ['яблоко', 'персик', 'груша', 'банан'];
// // Пиши код ниже этой строки

// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];
// console.log(lastElementIndex);

// 9
function getExtremeElements(array) {
  // Пиши код ниже этой строки

  return [array[0], array[array.length - 1]];

  // Пиши код выше этой строки
}
console.log(getExtremeElements([1, 2, 3, 4, 5]));

// 10
function splitMessage(message, delimeter) {
  let words;
  // Пиши код ниже этой строки

  words = message.split(delimeter);

  // Пиши код выше этой строки
  return words;
}
console.log(splitMessage('лучшее_за_неделю', '_'));

// 11
function calculateEngravingPrice(message, pricePerWord) {
  // Пиши код ниже этой строки

  const totalPrice = message.split(' ').length * pricePerWord;
  // const lettersInNamber = letters.length;

  // const total = lettersInNamber * pricePerWord;

  return totalPrice;
  // Пиши код выше этой строки
}
console.log(calculateEngravingPrice('JavaScript у меня в крови', 20));

// 12
function slugify(title) {
  // Пиши код ниже этой строки

  const slug = title.toLowerCase().split(' ').join('-');
  return slug;
  // Пиши код выше этой строки
}
console.log(slugify('Маcсивы для новичков'));

// 13
// const fruits = ['яблоко', 'слива', 'груша', 'апельсин', 'банан'];
// // Пиши код ниже этой строки
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);

// 16
function makeArray(firstArray, secondArray, maxLength) {
  // Пиши код ниже этой строки

  let newArray = firstArray.concat(secondArray);

  if (newArray.length > maxLength) {
    return (newArray = newArray.slice(0, maxLength));
  }

  return newArray;

  // Пиши код выше этой строки
}

console.log(makeArray(['Манго'], ['Аякс', 'Челси', 'Поли', 'Хьюстон'], 3));

// 18
function calculateTotal(number) {
  // Пиши код ниже этой строки
  let total = 0;
  for (let i = 1; i <= number; i += 1) {
    total += i;
  }

  return total;
}
// Пиши код выше этой строки

console.log(calculateTotal(3));

// 19
// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

// for (let i = 0; i <= fruits.length; i += 1) {
//   // Дополни эту строку
//   const fruit = fruits[i]; // Дополни эту строку
//   console.log(fruit);
// }

// 20
function calculateTotalPrice(order) {
  let total = 0;
  // Пиши код ниже этой строки
  // почему тут мы начинаем итерацию с 0
  for (let i = 0; i < order.length; i += 1) {
    total += order[i];
    console.log(order[i]);
  }
  // Пиши код выше этой строки
  return total;
}
console.log(calculateTotalPrice([164, 48, 291]));

// 21 разобрать и как сдеть это через счетчик
function findLongestWord(string) {
  // Пиши код ниже этой строки
  const words = string.split(' ');

  let longestWord = words[0];

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

// Пиши код выше этой строки
console.log(findLongestWord('May the force be with you'));

// 22 тоже разобрать
function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Пиши код ниже этой строки
  for (let i = min; i <= max; i += 1) {
    numbers.push(i);
  }
  // Пиши код выше этой строки
  return numbers;
}
console.log(createArrayOfNumbers(14, 17));

// 23
function filterArray(numbers, value) {
  // Пиши код ниже этой строки
  let newNumbers = numbers[0];
  let a1 = [];
  for (let i = 1; i <= numbers.length; i += 1) {
    if (numbers[i] > value) {
      a1.push(numbers[i]);
    }
  }
  return a1;
  // Пиши код выше этой строки
}
console.log(filterArray([1, 2, 3, 4, 5], 3));
//
24;
function checkFruit(fruit) {
  const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

  // if (fruits.includes(fruit)) {
  //   return true;
  // }
  // const fruitIn= fruits.includes(fruit) ? true : false;
  return fruits.includes(fruit); // Дополни эту строку
}
console.log(checkFruit('абрикос'));
// 25
function getCommonElements(array1, array2) {
  // Пиши код ниже этой строки

  const newArray = [];
  for (let i = 0; i < array1.length; i += 1) {
    if (array2.includes(array1[i])) {
      newArray.push(array1[i]);
    }
  }
  return newArray;

  // Пиши код выше этой строки
}
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));

// 26
function calculateTotalPrice(order) {
  let total = 0;
  // Пиши код ниже этой строки

  for (const attribute of order) {
    total += attribute;
  }

  // Пиши код выше этой строки
  return total;
}
console.log(calculateTotalPrice([12, 85, 37, 4]));

// 27
function filterArray(numbers, value) {
  // Пиши код ниже этой строки
  const filteredNumbers = [];

  for (let number of numbers) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
  // Пиши код выше этой строки
}
console.log(filterArray([12, 24, 8, 41, 76], 38));

// 29
function getEvenNumbers(start, end) {
  // Пиши код ниже этой строки
  let arr = [];
  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      console.log(i);
      arr.push(i);
    }
  }
  return arr;

  // Пиши код выше этой строки
}
console.log(getEvenNumbers(3, 11));

// 32
function includes(array, value) {
  // Пиши код ниже этой строки

  for (let i = 0; i <= array.length; i += 1) {
    if (array[i] === value) {
      return true;
    }
  }

  return false;

  // Пиши код выше этой строки
}

console.log(includes([1, 2, 3, 4, 5], 2));
