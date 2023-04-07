const nameInput = document.getElementById('name');

nameInput.addEventListener('input', () => {
  const regex = /^[a-zA-Zа-яА-ЯёЁ]+$/; // регулярное выражение, которое позволяет вводить только буквенные символы
  const isValid = regex.test(nameInput.value); // проверяем значение поля на соответствие регулярному выражению
  if (!isValid) {
    nameInput.setCustomValidity('Имя должно содержать только буквенные символы'); // устанавливаем сообщение об ошибке, если введены недопустимые символы
  } else {
    nameInput.setCustomValidity(''); // если введены только допустимые символы, устанавливаем пустое сообщение об ошибке
  }
});
// ДЛя перевырки правильносты воду имени