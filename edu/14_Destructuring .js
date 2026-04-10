// Destructuring(구조분해) 문법
// 배열이나 객체에서 값을 추출하여 변수에 바로 할당하는 문법
const arr = [1, 2, 3, 4, 5];
// let arrVal1 = arr[0];
// let arrVal2 = arr[1];

// const [val1, val2, val3, val4, val5] = arr;
// const [val1, , , , val5] = arr;
// const [val1, val2] = arr;
const [, val2, , val4] = arr;

// ---------------------------------------------
const user = {
  name: `홍길동`,
  age: 20,
  gender: `M`,
  addr: `서울시`,
};
const age = 0;
const { age: userAge, gender, addr = `없음` } = user;
console.log(addr);
