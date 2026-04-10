// try문
try {
  // 내가 실행할 처리를 작성
  console.log(`아아아`);
  console.log(`아아아`);
  user.name;
} catch (err) {
  // try문에서 에러가 발생시 처리할 로직 작성
  console.log(`에러 발생!!!!!!!`);
  console.log(err.name); // 발생한 에러명
  console.log(err.message); // 발생한 에러 내용
  console.log(err.stack); // 발생한 에러 상세
} finally {
  // 예외 여부와 상관없이 무조건 실행시켜야할 로직 작성
  console.log(`파이널리~~~~`);
}

console.log(`아아아`);
console.log(`아아아`);

try {
  // throw: 강제 예외 발생
  console.log(`트라이 시작`);

  if (true) {
    const error = new Error(`내가 강제로 일으킨 에러`);
    error.name = `커스텀 에러`;
    throw error;
  }

  console.log(`트라이 끝`);
} catch (error) {
  console.log(error.stack);
}

// 에러를 상세하게 처리하는 방법
// 여러 종류의 예외를 처리하고 싶을 때,
// instanceof 연산자를 사용하여 예외를 구체적으로 처리
try {
  throw new ReferenceError();
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log(`싱텍스 에러`);
  } else if (error instanceof ReferenceError) {
    console.log(`참조참조`);
  } else {
    console.log(`짜장면`);
  }
}
