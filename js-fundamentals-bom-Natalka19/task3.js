// Реалізуйте програму, яка по натисканню на кнопку видалятиме обраний 
// елемент випадаючого списку. 
// Можуть видалятися всі елементи в будь-якому порядку.
// Список з елементами знаходиться у файлі index.html

const deleteButton = document.querySelector('#deleteButton');
const dropdown = document.querySelector('#dropdown');

deleteButton.addEventListener('click', () => {
  const dropdownIndex = dropdown.selectedIndex;

  if (dropdownIndex !== -1) {
    dropdown.remove(dropdownIndex);
  }
});
