// for문 기본문법
// for(초기값; 조건식; 증감연산자) {
// 	반복 하고 싶은 처리
// }

// for (let i = 0; i < 3; i++) {
//   if (i === 1) {
//     // break: 처리 중 break를 만나면 그 즉시 루프 종료
//     break;
//   }
//   console.log(`${i}번째 루프문`);
// }

// for (let i = 1; i < 5; i++) {
//   // continue: 만나는 즉시 그 다음 루프로 진행
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log(`${i}번째 루프문`);
// }

// for (let i = 0; i < 3; i++) {
//   console.log(`부모: ${i}번째`);

//   for (let z = 0; z < 3; z++) {
//     console.log(`자식: ${z}번째`);
//   }
// }

// 구구단 2단
// 예시)
// 2 X 1 = 2
// 2 X 2 = 4
// ...
// 2 X 9 = 18

// let dan = 19;
// let multi = 10;

// for (let i = 1; i < multi; i++) {
//   console.log(`${dan} x ${i} = ${dan * i}`);
// }

// 구구단 2~9단을 출력
// 예시)
// ** 2단 **
// 2 X 1 = 2
// 2 X 2 = 4
// ...
// ** 3단 **
// 3 X 1 = 3
// 3 X 2 = 6
// ...
// 9 X 8 = 72
// 9 X 9 = 81

let startDan = 2;
for (startDan; startDan < 10; startDan++) {
  console.log(`** ${startDan}단 **`);
  for (let j = 1; j < 10; j++) {
    console.log(`${startDan} x ${j} = ${startDan * j}`);
  }
}
