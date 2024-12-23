'use strict';

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/2003',
    showMyPublicData: function() { // Метод для отображения имени и фамилии
        console.log(`${this.name}${this.surname}`);
    }
}

// for (const key of user) {
//     console.log(user[key]);
// }
// Ошибка: объект `user` не итерируемый (нет [Symbol.iterator])

const arr = ['b', 'a', 'c']; // Массив строк
Array.prototype.someMethod = function() {}; // Добавление кастомного метода в прототип массива

console.dir(arr); // Показать структуру массива, включая прототипные свойства

for (const key of arr) { // Итерация по массиву (использует [Symbol.iterator])
    console.log(key); // Вывод каждого элемента массива
}

// const str = 'string';

// for (const key in str) {
//     console.log(str[key]);
// }
// Работает, так как строки являются индексируемыми объектами (но не рекомендуется использовать for...in)

const salaries = {
    john: 500,
    ivan: 1000,
    ann: 5000,
    sayHello: function() { // Метод объекта
        console.log('Hello');
    }
}

// Создание метода-итератора для объекта `salaries`
salaries[Symbol.iterator] = function() {
    return {
        current: this.john, // Начальное значение
        last: this.ann, // Конечное значение

        next() { // Метод итерации
            if (this.current < this.last) { // Если текущее значение меньше конечного
                this.current = this.current + 500; // Увеличиваем текущее значение
                return {done: false, value: this.current}; // Возвращаем текущее значение
            } else {
                return {done: true}; // Итерация завершена
            }
        }
    }
}

// for (let res of salaries) {
//     console.log(res);
// }
// Итерация по объекту `salaries` через пользовательский итератор



// const iterator = salaries[Symbol.iterator]();
// console.log(iterator.next());
// Создание итератора вручную и вызов метода `next()` для пошаговой итерации
