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

const hid = () => {
  alert(`두근두근`);
};

const btn = document.querySelector(`#btn`);
btn.addEventListener(`click`, () => {
  alert(`안녕하세요\n숨어있는 div를 찾아주세요`);
});

const hidDiv = document.querySelector(`#hidDiv`);
hidDiv.addEventListener(`mouseenter`, hid);

let val = false;
// 클릭 했을 때
hidDiv.addEventListener(`click`, () => {
  val = !val;
  if (val) {
    hidDiv.removeEventListener(`mouseenter`, hid);
    alert(`들켰다.`);
    hidDiv.style.backgroundColor = `#000`;
  } else {
    alert(`숨는다`);
    hidDiv.style.backgroundColor = "";
    hidDiv.style.left = Math.random() * window.innerWidth + "px";
    hidDiv.style.top = Math.random() * window.innerHeight + "px";
    hidDiv.addEventListener(`mouseenter`, hid);
  }
});
