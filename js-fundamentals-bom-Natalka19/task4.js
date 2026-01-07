// Реалізуйте програму, яка відслідковуватиме зміну розміру 
// (ширини і висоти) вікна браузера
// і виводитиме на поточну сторінку при її розтязі/стисканні відповідні значення.

const width = document.querySelector('#widthValue');
const height = document.querySelector('#heightValue');

function updateWindowSize() {
  width.textContent = window.innerWidth;
  height.textContent = window.innerHeight;
}
updateWindowSize();

window.addEventListener('resize', updateWindowSize);
