// 배열 (Array) 객체
// 하나의 변수에 여러개의 값을 순차적으로 저장할 수 있는 데이터 구조
// 데이터 타입 Object
// 배열의 크기가 동적으로 변화 가능
// 인덱스(index) 번호가 각 요소에 부여되고 이를 이용해서 순서를 정함.
// 반복문을 통해서 배열의 각 요소에 쉽게 접근 가능
const arr1 = [1, 2, 3, 4, 5];

console.log(arr1[4]);

// length: 배열의 길이를 반환
console.log(arr1.length);
const obj = {
  length: 1, // 속성(Property): 객체 안에 선언한 변수
  fnc: () => {
    // 메소드(Method): 객체 안에 선언한 함수
    console.log(`함수임`);
  },
};

// Array.isArray(arg): boolean
// 배열객체인지 아닌지 체크
console.log(Array.isArray(arr1)); // true
console.log(Array.isArray(`array`)); // false

// Array.includes(searchElement): boolean
// 배열의 특정 요소의 존재 여부를 확인하고 true/false 반환
console.log(arr1.includes(5)); // true

// Array.indexOf(searchElement): number
// 배열에서 특정 요소를 검색하고, 해당 인덱스를 반환
// 없으면 `-1`을 반환
let arr = [`홍길동`, `둘리`, `도우너`];
console.log(arr.indexOf(`둘리`)); // 1반환
console.log(arr.indexOf(`도우너`)); // 2반환
console.log(arr.indexOf(`도치`)); // -1반환

// Array.push(...args): number **원본 변경**
// 원본 배열에 마지막 요소를 추가하고, 변경된 length를 반환
arr = [1, 2, 3];
let arr2 = [...arr]; // 얕은 복사(원본 유지)
let resultArr = arr2.push(5);
console.log(resultArr, arr, arr2);

// Array.concat(...args): T[]
// 배열의 마지막 요소를 추가한 새로운 배열을 반환
arr = [1, 2, 3];
resultArr = arr.concat(4, 5, 6);
console.log(arr, resultArr);

// Array.pop(): T | undefined ** 원본 변경 **
// 원본 배열에 마지막 요소를 제거하고, 제거된 요소를 반환
arr = [1, 2, 3];
resultArr = arr.pop();
console.log(arr, resultArr);

// Array.unshift(...args): number ** 원본 변경 **
// 원본 배열의 첫번째 요소를 추가하고, 변경된 length를 반환
arr = [1, 2, 3];
resultArr = arr.unshift(100);
console.log(arr, resultArr);

// Array.shift() : T | undefined ** 원본 변경 **
// 원본 배열의 첫번재 요소를 제거하고, 해당요소를 반환
arr = [1, 2, 3];
resultArr = arr.shift();
console.log(arr, resultArr);

// Array.splice(start, count, ...args): T[] ** 원본 변경 **
// 1, start만 전달했을 경우
// start가 양수일 경우 : 해당 인덱스 요소 부터 모두 제거하고, 제거한 요소들을 배열로 반환
// start가 음수일 경우 : 끝 요소부터 start 수 만큼의 해당 인덱스 요소를 모두 제거하고, 제거한 요소를 배열로 반환
arr = [1, 2, 3, 4, 5];
resultArr = arr.splice(-2);
console.log(arr, resultArr);

// 2, start와 count를 전달했을 경우
// 해당 인덱스 요소부터 count 수 만큼의 요소를 제거하고, 제거한 요소들을 배열로 반환
arr = [1, 2, 3, 4, 5];
resultArr = arr.splice(2, 2);
console.log(arr, resultArr);

// 3, start와 count와 args를 전달했을 경우
// 해당 인덱스 요소부터 count 수 만큼의 요소를 제거하고, 해당 위치에 args를 삽입하고, 제거한 요소들을 배열로 반환
arr = [1, 2, 3, 4, 5];
resultArr = arr.splice(2, 1, [1, 2, 3]);
console.log(arr, resultArr);

// Array.join(separator): String
// 배열의 요소를 구분자로 연결한 문자열을 만들어서 반환
// 배열의 요소가 없으면 빈문자열을 반환
// separator를 생략하면 기본 구분자가 `,`로 연결
arr = [1, 2, 3, 4, 5];
resultArr = arr.join(", ");
console.log(arr, resultArr);

// 배열 [2,4,5,6,9] 있다.
// 여기서 특정 요소가 있는지 확인하고 true/false를 반환하는
// `myIncludes`함수를 만들어 주세요.
const myArr = [2, 4, 5, 6, 9];

function myIncludes(arr, test) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === test) {
      return true;
    }
  }
  return false;
}
console.log(myIncludes(myArr, 0));

// myIncludes = (arr, test) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === test) {
//       return true;
//     }
//   }
//   return false;
// };
