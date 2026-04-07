// 아래처럼 별을 찍어주세요.
// 예시)
// *****
// *****
// *****
// *****
// *****

for (let i = 0; i < 5; i++) {
  console.log("*****");
}

let star1 = "";
for (let j = 0; j < 5; j++) {
  star1 += "*";
  console.log(star1);
}

let star2 = "";
for (let k = 1; k < 6; k++) {
  let n = "";
  star2 += "*";
  for (let l = 0; l < 5 - k; l++) {
    n += " ";
  }
  console.log(n + star2);
}

// for(let i = 0; i < 5; i++) {
//   let result ='';
//   for(let j = i; j < 4; j++) {
//     result += ' ';
//   }
//   for(let j = 0; j <= i; j++) {
//     result += '*';
//   }
//   console.log(result);
// }

// let space = '     ';
// let star = '';
// for(let i = 0; i < 5; i++) {
//   star += '*';
//   console.log(`${space.slice(1, space.length - i)}${star}`);
// }

for (let a = 0; a < 5; a++) {
  let space = "";
  let star3 = "";

  for (let b = 0; b < 4 - a; b++) {
    space += " ";
  }
  for (let c = 0; c < a * 2 + 1; c++) {
    star3 += "*";
  }
  console.log(space + star3);
}
for (let d = 0; d < 5; d++) {
  let space1 = "";
  let star31 = "";

  for (let e = 0; e < d; e++) {
    space1 += " ";
  }
  for (let f = 0; f < (5 - d) * 2 - 1; f++) {
    star31 += "*";
  }
  console.log(space1 + star31);
}
