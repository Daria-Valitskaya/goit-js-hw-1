// // **дз от Алексея
// //  * Напиши функцию getAllPropValues(propName)
// //  * которая вернет все значения заданного
// //  * свойства
// //  * Например getAllPropValues('name') возвращает ['Asus', 'Huawei', 'HP', 'Dell']
// //  * getAllPropValues('category') возвращает []
// //  */

// const products = [
//   { name: 'Asus', price: 1300, quantity: 4 },
//   { name: 'Huawei', price: 2700, quantity: 3 },
//   { name: 'HP', price: 400, quantity: 7 },
//   { name: 'Dell', price: 1200, quantity: 9 },
//   { name: 'Apple', price: 1400 },
// ];

// const getAllPropValues = (propname, array) => {
//   // 0(n)
//   return array.reduce((acc, obj) => {
//     // if (obj.hasOwnProperty(propname)) {
//     // if (Object.keys(obj).includes(propname)) {
//     if (propname in obj) {
//       acc.push(obj[propname]);
//     }
//     return acc;
//   }, []);
// };

// console.log(getAllPropValues('name', products)); // ['Asus', 'Huawei', 'HP', 'Dell', 'Apple']
// console.log(getAllPropValues('quantity', products)); // [4, 3, 7, 9]

// console.log(getAllPropValues('category', products)); // []

// Вам дан массив. Значения в массиве будут либо числами, либо строками, либо их комбинацией.
// Ваша задача - вернуть массив, в котором будут идти сначала числа, отсортированные в порядке возрастания, а затем строки,
// отсортированные в алфавитном порядке.Значения должны сохранить свой исходный тип.
// Если на входе была строка, то и вернуться должна строка, если число - число.
// const example1 = [6, 2, 3, 4, 5];
// const example2 = [14, 32, 3, 5, 5];
// const example3 = [1, 2, 3, 4, 5];
// const example4 = ['Banana', 'Orange', 'Apple', 'Mango', 0, 7, 2];
// //перебрать массив
// // разбить на 2 массива числа и буквы
// // отсортировать 2 массива
// // распылить из в 1
// const getAscending = example => {
//   const letters = [];
//   const numbers = [];
//   example.forEach(item => {
//     if (typeof item === 'string') {
//       return letters.push(item);
//     }
//     numbers.push(item);
//   });

//   return [
//     ...numbers.sort((a, b) => a - b),
//     ...letters.sort((a, b) => a.localeCompare(b)),
//   ];
// };
// console.log(getAscending(example4));

// example([6, 2, 3, 4, 5]) = > [2, 3, 4, 5, 6]
// example([14, 32, 3, 5, 5]) = > [3, 5, 5, 14, 32]
// example([1, 2, 3, 4, 5]) = > [1, 2, 3, 4, 5]
// example(['Banana', 'Orange', 'Apple', 'Mango', 0, 2, 2]) = > [0, 2, 2, 'Apple', 'Banana', 'Mango', 'Orange']

// const data = { a: 1, b: { c: 1, d: 2 }, f: { p: 5, q: 6 } };
// const data2 = {a: 1, b: {c: 1, d: 2}, f: {p: 5, q: 6}};
// const data3 = {a: 1, b: {c: 2}, l: {m: 2}};
// const data4 = {a: 1, b: 2, c: {d: 6, e: 8}};
// const data5 = {a: 1, b: 2, c: {d: 6, e: 8}};
// console.log(isEqual(data, data2)); // Выводит true
// console.log(isEqual(data, data3)); // Выводит false
// console.log(isEqual(data4, data5)); // Выводит true
// перебрать первый объект
// написать сравнение есть ли такие же ключи во втором объекте или нет

// const data = { a: 1, b: { c: 1, d: 2 }, f: { p: 5, q: 6 } };
// const data2 = { a: 1, b: { c: 1, d: 2 }, f: { p: 5, q: 6 } };
// const data3 = { a: 1, b: { c: 2 }, l: { m: 2 } };
// const data4 = { a: 1, b: 2, c: { d: 6, e: 8 } };
// const data5 = { a: 1, b: 2, c: { d: 6, e: 8 } };
// const isEqual = (firstObj, secObj) => {
//   return Object.keys(firstObj).every(key => Object.keys(secObj).includes(key));
// };
// // function isEqual(obj1, obj2) {
// //   return JSON.stringify(obj1) === JSON.stringify(obj2);
// // }
// console.log(isEqual(data, data2)); // Выводит true
// console.log(isEqual(data, data3)); // Выводит false
// console.log(isEqual(data4, data5)); // Выводит true

// const account = {
//   owner: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['order-1', 'order-2', 'order-3'],
//   changeDiscount(value) {
//     // метод, который меняет дисконт аккаунта
//   },
//   showOrders() {
//     // метод, который показывает все заказы аккаунта
//   },
//   addOrder(cost, order) {
//     // метод, который проводит списание со счета на сумму cost и добавляет заказ (order) в корзину (orders)
//   },
// };
// account.changeDiscount(0.15);
// console.log(account.discount); // 0.15
// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3']
// account.addOrder(5000, 'order-4');
// console.log(account.balance); // 19000
// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']
// const inventory = {
//   items: ['Knife', 'Gas mask'],
//   add(itemName) {
//     console.log(`Adding ${itemName} to inventory`);
//     // метод, добавляющий новый инвентарь (itemName) в массив items
//   },
//   remove(itemName) {
//     console.log(`Removing ${itemName} from inventory`);
//     // метод, удаляющий инвентарь (itemName) из массива items
//   },
// };
// // Функция, которая вызывает action (метод) и делает манипуляции с инвентарем (удаляет или добавляет)
// const invokeInventoryAction = function (itemName, action) {
//   console.log(`Invoking action on ${itemName}`);
//   action(itemName);
// };
// invokeInventoryAction('Medkit', inventory.add(inventory));
// console.log(inventory.items);
// invokeInventoryAction('Gas mask', inventory.remove(inventory));
// console.log(inventory.items);
