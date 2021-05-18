// // function filterArray(numbers, value) {
// //     const filteredNumbers = [];
// //     // Пиши код ниже этой строки

// //     // for (let i = 0; i < numbers.length; i += 1) {
// //     //  if (numbers[i] > value) {
// //     //    filteredNumbers.push(numbers[i]);
// //     //   }
// //     //  }
// //     numbers.forEach(number, index {
// //         if(number[index] > value) {
// //         filteredNumbers.push(number[index])
// //     }

// //     // Пиши код выше этой строки
// //     return filteredNumbers;
// // };
// // 2
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Пиши код ниже этой строки

//   numbers.forEach(function (number, index) {
//     if (number > value) {
//       filteredNumbers.push(numbers[index]);
//     }
//   });

//   // Пиши код выше этой строки
//   return filteredNumbers;
// }
// // 3
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Пиши код ниже этой строки

//   firstArray.forEach(function (number, index) {
//     if (secondArray.includes(firstArray[index])) {
//       commonElements.push(firstArray[index]);
//     }
//   });
//   return commonElements;
//   // Пиши код выше этой строки
// }
// // 6
// // Пиши код ниже этой строки
// const calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;

//   orderedItems.forEach(item => {
//     totalPrice += item;
//   });

//   return totalPrice;
// };
// // 7
// // Пиши код ниже этой строки
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Пиши код выше этой строки
//   return filteredNumbers;
// };
// // 9
// function changeEven(numbers, value) {
//   // Пиши код ниже этой строки
//   let newArray = [];

//   numbers.forEach((number, index) => {
//     if (number % 2 === 0) {
//       newArray.push(number + value);
//     } else newArray.push(number);
//   });
//   return newArray;
//   // Пиши код выше этой строки
// }
// // 13
// const getUserNames = users => {
//   return users.map(user => user.name);
// };

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Пиши код ниже этой строки

// const evenNumbers = numbers.filter(value => value % 2);
// // const oddNumbers = numbers.filter(num=>(!num===2%));
// // 16
// const books = [
//   {
//     title: 'Последнее королевство',
//     author: 'Бернард Корнуэлл',
//     genres: ['приключения', 'историческое'],
//   },
//   {
//     title: 'На берегу спокойных вод',
//     author: 'Роберт Шекли',
//     genres: ['фантастика', 'мистика'],
//   },
//   {
//     title: 'Красна как кровь',
//     author: 'Ли Танит',
//     genres: ['ужасы', 'мистика', 'приключения'],
//   },
// ];
// // Пиши код ниже этой строки
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter(
//   (genr, index, array) => array.indexOf(genr) === index,
// );

// // 20
// // Пиши код ниже этой строки
// const getUsersWithFriend = (users, friendName) => {
//   return users.filter(user => user.friends.includes(friendName));
// };
// // Пиши код выше этой строки

// // 21
// // Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей всех пользователей (свойство friends). У нескольких пользователей могут быть одинаковые друзья, сделай так чтобы возвращаемый массив не содержал повторений.
// const getFriends = users => {
//   const filterFr = users.flatMap(user => user.friends);
//   const allFr = filterFr.filter(
//     (friend, index, array) => array.indexOf(friend) === index,
//   );
//   return allFr;
// };
// // 30
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Пиши код ниже этой строки

// const totalPlayTime = playtimes.reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);

// // Пиши код выше этой строки
// const averagePlayTime = totalPlayTime / playtimes.length;

// // 31
// const players = [
//   { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Поли', playtime: 469, gamesPlayed: 2 },
//   { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
//   { name: 'Киви', playtime: 241, gamesPlayed: 1 },
// ];
// // Пиши код ниже этой строки

// const totalAveragePlaytimePerGame = players.reduce((game, player) => {
//   return player.playtime / player.gamesPlayed + game;
// }, 0);
// // 33
// const calculateTotalBalance = users => {
//   return users.reduce((value, user) => {
//     return user.balance + value;
//   }, 0);
// };
// // 33
// const getTotalFriendCount = users => {
//   return users.reduce((acc, user) => {
//     return acc + user.friends.length;
//   }, 0);
// };

// // 37
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 },
// ];
// // Пиши код ниже этой строки

// const sortedByAuthorName = [...books].sort((first, sec) =>
//   first.author.localeCompare(sec.author),
// );

// const sortedByReversedAuthorName = [...books].sort((first, sec) =>
//   sec.author.localeCompare(first.author),
// );

// const sortedByAscendingRating = [...books].sort(
//   (first, sec) => first.rating - sec.rating,
// );

// const sortedByDescentingRating = [...books].sort(
//   (first, sec) => sec.rating - first.rating,
// );
// // 41
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
//   { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 },
// ];
// const MIN_BOOK_RATING = 8;
// // Пиши код ниже этой строки

// const names = [...books]
//   .sort((a, b) => a.author.localeCompare(b.author))
//   .filter(book => book.rating > MIN_BOOK_RATING)
//   .map(name => name.author);

// // 42
// // Пиши код ниже этой строки
// const getNamesSortedByFriendCount = users => {
//   const name = [...users]
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map(user => user.name);
//   return name;
// };
// // 43
const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
    isActive: true,
    balance: 3951,
    gender: 'male',
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: [
      'Jacklyn Lucas',
      'Linda Chapman',
      'Adrian Cross',
      'Solomon Fokes',
    ],
    isActive: false,
    balance: 1498,
    gender: 'male',
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
  },
];
const getSortedFriends = users => {
  const name = [...users]
    .flatMap(user => user.friends)
    .filter((friend, index, array) => array.indexOf(friend) === index)
    .sort((a, b) => a.localeCompare(b));
  return name;
};

console.log(getSortedFriends(users));

// // 44
// // Пиши код ниже этой строки
// const getTotalBalanceByGender = (users, gender) => {
//   return [...users]
//     .filter(user => user.gender === gender)
//     .reduce((acc, user) => {
//       return acc + user.balance;
//     }, 0);
// };
// // Пиши код выше этой строки
