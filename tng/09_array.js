// 원본은 보존하면서 오름차순 정렬 해주세요.
const ARR1 = [6, 3, 5, 8, 92, 3, 7, 5, 100, 80, 40];
const copy = JSON.parse(JSON.stringify(ARR1)); // Deep copy
const newArr = [...ARR1];
newArr.sort((a, b) => a - b);
console.log(ARR1, newArr);

// 짝수와 홀수를 분리해서 각각 새로운 배열 만들어 주세요.
const ARR2 = [5, 7, 3, 4, 5, 1, 2];
const evenArr = ARR2.filter((item) => item % 2 === 0);
console.log(evenArr);

const oddArr = ARR2.filter((item) => item % 2 === 1);
console.log(oddArr);

// 버블정렬
const arr = [6, 4, 7, 1, 11];
const bubble = [...arr];
for (let i = 0; i < bubble.length - 1; i++) {
  let tmp = 0;
  for (let j = 0; j < bubble.length - 1 - i; j++) {
    if (bubble[j] > bubble[j + 1]) {
      tmp = bubble[j];
      bubble[j] = bubble[j + 1];
      bubble[j + 1] = tmp;
    }
  }
}
console.log(arr, bubble);

// 각 요소에 3으로 나눈 나머지를 구해서, 새로운 배열로 생성해 주세요.
const ARR3 = [5, 7, 3, 4, 5, 1, 2, 0];
const newArr1 = ARR3.map((item) => item % 3);
console.log(ARR3, newArr1);

function newArr3(arr) {
  const arr3 = [];
  for (let i = 0; i < arr.length; i++) {
    arr3.push(arr[i] % 3);
  }
  return arr3;
}
console.log(ARR3, newArr3(ARR3));
