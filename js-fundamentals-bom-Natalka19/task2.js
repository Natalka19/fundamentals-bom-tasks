// Задано сторінку з 3 кнопками . Напишіть Javascript код і реалізуйте HTML-сторінку 
// з відповідними подіями на кожному елементові:
//         1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
//         2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється 
// на рожевий
//         3) 3-я кнопка – при наведенні колір фону міняється на коричневий

const btn1 = document.querySelector('#button1');
const btn2 = document.querySelector('#button2');
const btn3 = document.querySelector('#button3');

btn1.addEventListener('click', function() {
  document.body.style.background = 'blue';
});

btn2.addEventListener('dblclick', function() {
  document.body.style.background = 'pink';
});

btn3.addEventListener('mouseover', function() {
  document.body.style.background = 'brown';
});
console.log(btn1);
console.log(btn2);
console.log(btn3);
