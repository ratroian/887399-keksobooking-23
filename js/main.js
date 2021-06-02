// ---Случайное число из диапазона (на основе https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random)---

function getRandomIntInclusive(min, max) {
  if (max > min) {
    min = Math.ceil(min);
    max = Math.floor(max);
  } else {
    min = 0;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются;
}

getRandomIntInclusive(1, 10);

// ---Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно (на основе https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random и https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)---

function getRandomArbitrary(min, max, round) {
  if (max >= min) {
    const randomArbitrary = Math.random() * (max - min) + min;
    return randomArbitrary.toFixed(round);
  } else {
    min = 0;
  }
}

getRandomArbitrary(1, 2, 3);
