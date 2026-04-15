// 콜백 지옥
// setTimeout(() => {
//   console.log(`A`);

//   setTimeout(() => {
//     console.log(`B`);

//     setTimeout(() => {
//       console.log(`C`);
//     }, 1000);
//   }, 1000);
// }, 1000);

// 위 콜백 지옥을 회피하기 위해 프로미스 기반으로 변경해보자
const timePromise = (str, ms) => {
  // resolve: 작업이 성공했을 때를 알려주는 객체
  // reject: 작업이 실패했을 때를 알려주는 객체
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof str === `string`) {
        console.log(str);
        return resolve(`성공`);
      } else {
        return reject(`실패`);
      }
    }, ms);
  });
};

// timePromise(`AA`, 1000)
//   .then(() => timePromise(`BB`, 1000))
//   .then(() => timePromise(`CC`, 1000))
//   .then(() => {
//     timePromise(`CC`, 1000).then(() => timePromise(`DD`, 1000));
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => console.log(`파이널리`));

// 병렬처리 하는 방법
Promise.all([
  timePromise(`A`, 1000),
  timePromise(`B`, 3000),
  timePromise(`c`, 5000),
]).then(() => console.log(`모든 작업 완료`));
