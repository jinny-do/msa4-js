// 1.`버튼` 클릭시 아래 문구 알러트로 출력
// 	안녕하세요.
// 	숨어있는 div를 찾아주세요.

// 2. 숨어있는 div에 마우스가 진입하면 아래 문구 알러트 출력
// 	- 두근두근

// 3. 숨어있는 div를 마우스로 클릭하면 아래 문구 알러트 출력 및 나타나기
// 	- 들켰다

// 4. 들킨 div에는 마우스가 진입해도 두근두근이 뜨지 않습니다.

// 5. 나타난 div를 다시 클릭하면 아래 문구 알러트 출력 및 사라지기
// 	- 숨는다

// 6. 다시 숨은 div에 마우스가 진입하면 아래 문구 알러트 출력
// 	- 두근두근

// -- 보너스 문제 --
// 다시 숨을 때 랜덤한 위치로 이동

// 내 코드 ------------------------------------------------------------------------
// const hid = () => {
//   alert(`두근두근`);
// };

// const btn = document.querySelector(`#btn`);
// btn.addEventListener(`click`, () => {
//   alert(`안녕하세요\n숨어있는 div를 찾아주세요`);
// });

// const hidDiv = document.querySelector(`#hidDiv`);
// hidDiv.addEventListener(`mouseenter`, hid);

// let val = false;
// // 클릭 했을 때
// hidDiv.addEventListener(`click`, () => {
//   val = !val;
//   if (val) {
//     hidDiv.removeEventListener(`mouseenter`, hid);
//     alert(`들켰다.`);
//     hidDiv.style.backgroundColor = `#000`;
//   } else {
//     alert(`숨는다`);
//     hidDiv.style.backgroundColor = "";
//     hidDiv.style.left = Math.random() * window.innerWidth + "px";
//     hidDiv.style.top = Math.random() * window.innerHeight + "px";
//     hidDiv.addEventListener(`mouseenter`, hid);
//   }
// });
// -----------------------------------------------------------------------------------

// 선생님 코드 -------------------------------------------------------------------------

(() => {
  const hidDiv = document.querySelector(`#hidDiv`);
  const container = document.querySelector(`.container`);

  const randomPosition = () => {
    const randomX = Math.floor(
      Math.random() * (window.innerWidth - hidDiv.offsetWidth),
    );
    const randomY = Math.floor(
      Math.random() * (window.innerHeight - hidDiv.offsetHeight),
    );

    container.style.top = `${randomY}px`;
    container.style.left = `${randomX}px`;
  };

  const dokidoki = () => {
    alert(`두근두근`);
  };

  const hide = () => {
    alert(`숨는다`);
    hidDiv.classList.remove(`busted`);
    randomPosition();

    hidDiv.removeEventListener(`click`, hide);
    container.addEventListener(`mouseenter`, dokidoki);
    hidDiv.addEventListener(`click`, busted);
  };

  const busted = () => {
    hidDiv.classList.add(`busted`);

    container.removeEventListener(`mouseenter`, dokidoki);
    hidDiv.removeEventListener(`click`, busted);

    hidDiv.addEventListener(`click`, hide);

    alert(`들켰다!`);
  };

  randomPosition();
  container.addEventListener(`mouseenter`, dokidoki);
  hidDiv.addEventListener(`click`, busted);

  const btnInfo = document.querySelector(`button`);
  btnInfo.addEventListener(`click`, () => {
    alert(`안녕하세요.\n숨어있는 'div'를 찾아주세요.`);
  });
})();
