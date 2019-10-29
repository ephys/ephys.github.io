export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomItem(array) {
  return array[getRandomInt(0, array.length - 1)];
}

export function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

export function mapNumbers(val, rangeAStart, rangeAEnd, rangeBStart, rangeBEnd) {
  return (val - rangeAStart) / (rangeAEnd - rangeAStart) * (rangeBEnd - rangeBStart) + rangeBStart;
}

export function replaceAt(str, index, replacement) {
  return str.substr(0, index) + replacement + str.substr(index + replacement.length);
}
