/** @format */
export function generateNumbers() {
  let numbers = [];
  let randomNumber;
  for (let i = 0; i < 15; i++) {
    randomNumber = Math.floor(Math.random() * (100 - 1) + 1);
    if (numbers.includes(randomNumber)) i--;
    else numbers[i] = randomNumber;
  }
  return numbers;
}
