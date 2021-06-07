// Случайное число из диапазона (на основе https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
function getRandomInclusiveInteger(min, max) {
  if (min === max) {
    return Math.floor(min);
  }
  if (min > max) {
    const interimInteger = min;
    min = max;
    max = interimInteger;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInclusiveInteger(1, 10);

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно (на основе https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random и https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)
function getRandomArbitraryInteger(min, max, round) {
  if (min === max) {
    return min.toFixed(round);
  }
  if (min > max) {
    const interimInteger = min;
    min = max;
    max = interimInteger;
  }
  const randomArbitrary = Math.random() * (max - min) + min;
  return randomArbitrary.toFixed(round);
}

getRandomArbitraryInteger(1, 2, 3);
