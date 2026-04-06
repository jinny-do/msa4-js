// 산술 연산자
// +, -, *, /, %
let num1 = 5;
let num2 = 10;

let sum = num1 + num2;
console.log(sum);

let minus = num1 - num2;
console.log(minus);

let multi = num1 * num2;
console.log(multi);

let division = num1 / num2;
console.log(division);

let remainder = num1 % num2;
console.log(remainder);

// 문자열 연결
let str1 = "a" + "b";
let str2 = `test${str1}`; // 리터럴 템플릿 문법
console.log(str1);
console.log(str2);

// 산술 대입 연산자
let num = 1; // '=': 대입 연산자
num = num + 1;
num += 1; // num = num + 1
num -= 1;
num *= 2;
num /= 3;
num %= 2;
console.log(num);

// 증감 연산(++, --)
num = 0;
console.log(`전위 증감 연산자1 : ${++num}`);
console.log(`전위 증감 연산자2 : ${num}`);

num = 0;
console.log(`후위 증감 연산자1 : ${num++}`);
console.log(`후위 증감 연산자2 : ${num}`);

// 비교 연산자
// 두 값을 비교해서 true 또는 false를 반환하는 연산자
console.log(1 > 0); // true 크다 or 초과
console.log(1 < 0); // false 작다 or 미만
console.log(1 >= 0); // true 크거나 같다 or 이상
console.log(1 <= 0); // false 작거나 같다 or 이하

console.log(1 == "1"); //true 불완전 비교 - 데이터 타입 체크 하지 않음
console.log(1 === "1"); //false 완전 비교 - 데이터 타입까지 깐깐하게 체크
console.log(1 != "1"); // false 불완전 비교
console.log(1 !== "1"); // true 완전 비교

// 논리 연산자
// and 연산자: &&
//     연결한 모든 조건이 true 여야 true,
//     하나라도 false면 false 반환
console.log(1 === 1 && 1 >= 3); //false

// or 연산자: ||
//     연결한 조건 중 하나라도 true면 treu 반환,
//     모든 조건이 false면 false를 반환
console.log(1 === 1 || 1 >= 3); //true

// not 연산자
console.log(!(1 === 1)); // flase 반환
let bool = true;
console.log(!bool); // flase

// 삼항 연산자
// 조건식 ? 참일 경우 : 거짓일 경우
1 < 2 ? "참" : "거짓";
