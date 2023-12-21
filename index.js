/* 
Реалізувати рекурсивну функцію, яка зводить число в ступінь:
- Число, яке треба піднести до ступеню, передається як перший аргумент у функції;
- Ступінь передається як другий аргумент у функцію pow(num, degree).
- Число і ступінь вводить юзер
- Для від'ємних ступенів має рахувати (x^n = 1/x^(-n) ), для нецілих ступенів має писати помилку 
*/

debugger;

function pow(num, degree) {
  if (degree === 0) {
    return 1;
  } else if (degree > 0) {
    return num * pow(num, degree - 1);
  } else {
    return 1 / (num * pow(num, -degree - 1));
  }
  // return degree === 0
  //   ? 1
  //   : degree === 0 && num === 0
  //   ? 1
  //   : degree > 0
  //   ? num * pow(num, degree - 1)
  //   : 1 / (num * pow(num, -degree - 1));
}

let numInput = prompt('Введіть число, які хочете возвести в ступінь.');
let degreeInput = prompt(
  'Введіть ціле числове значення ступеня у яке хочете возвести число'
);
while (
  numInput !== null &&
  degreeInput !== null &&
  (!numInput?.trim() ||
    !degreeInput?.trim() ||
    isNaN(numInput) ||
    isNaN(degreeInput) ||
    !Number.isInteger(parseFloat(degreeInput)))
) {
  // numInput = !numInput?.trim()
  //   ? prompt('Пусте значення не можна возвести в ступінь. Введіть число!')
  //   : !isNaN(numInput)
  //   ? numInput
  //   : prompt('Лише число можна возвести в ступінь. Введіть число!');

  // degreeInput = !degreeInput?.trim()
  //   ? prompt('Значення ступені не може бути пустим. Введіть ціле число!')
  //   : !isNaN(degreeInput) && Number.isInteger(parseFloat(degreeInput))
  //   ? degreeInput
  //   : prompt(
  //       'Ступінь має бути цілим числом. Введіть ціле числове значення ступеня!'
  //     );

  if (!numInput?.trim()) {
    numInput = prompt(
      'Пусте значення не можна возвести в ступінь. Введыть число!'
    );
  } else if (!degreeInput?.trim()) {
    degreeInput = prompt(
      'Значення ступені не може бути пустим. Введіть ціле число!'
    );
  } else if (isNaN(numInput)) {
    numInput = prompt('Лише число можна возвести в ступінь. Введіть число!');
  } else {
    degreeInput = prompt(
      'Ступінь має бути цілим числом. Введіть ціле число значення ступені!'
    );
  }
}

if (numInput === null || degreeInput === null) {
  alert('Відміна');
} else {
  const result = pow(parseFloat(numInput), parseInt(degreeInput));
  alert(
    `Число ${numInput.trim()} в ступені ${parseInt(degreeInput)} дорівнює ${result}`
  );
}
