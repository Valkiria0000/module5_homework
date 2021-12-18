//задание 8 
//Создайте произвольный массив Map. 
//Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
let myMap = new Map()
myMap.set('name', 'irina');
myMap.set('age', 32);
myMap.set(25, true);
myMap.forEach((value, key) => {
  console.log(`Ключ - ${key}, значение - ${value}`);
});

