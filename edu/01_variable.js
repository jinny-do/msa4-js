// 변수 (variable) : 변하는 데이터(값)를 저장하는 공간

// var: 중복 선언이 가능, 재할당 가능, 함수레벨 스코프
var num1; // 변수 선언
var num1; // 중복 선언 가능
var age = 1; // 변수 선언 및 초기화
age = 20; // 재할당
num1 = 90; // 초기화
str1 = "abcd"; // str1 변수 var로 선언 및 초기화

// let : 중복 선언이 불가능, 재할당 가능, 블록레벨 스코프
let name = "홍길동";
// let name; -> 중복 선언 불가능
name = "둘리";
console.log(name); // 출력

// 상수 constance: 중복 선언 불가능, 재할당 불가능, 블록레벨 스코프
const gender = "M";
// gender = 'F';// error - 재할당 불가능

// 호이스팅 (hoisting): 인터프리터가 변수와 함수의 메모리 공간을 선언 전에 미리 할당하는 것
console.log(hoho); // undefined
var hoho = "aaa";
console.log(`hoho : ${hoho}`); // aaa

// console.log(haha); //let 사용시 초기화 전 접근 시 참조 에러남
let haha = "vvv";
console.log(haha);
