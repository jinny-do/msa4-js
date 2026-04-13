// Event 이벤트
// 웹페이지세어의 유저의 행위에 따라 특정 처리를 실행 되도록 하는 처리

// inline 방식
// 이벤트 대상인 요소의 속성으로 이벤트를 지정하는 방법
// HTML문서에 JS가 혼재되므로 관리상의 문제가 발생

// property Linstener 방식
// DOM을 이용해서 해당 노드에 이벤트 프로퍼티를 통해 지정하는 방법
// const btn = document.querySelector(`button`);
// btn.onclick = () => {
//   alert(`프로퍼티 리스너`);
// };

// addEventListener 방식
// DOM 요소에 이벤트 리스너를 추가하는 가장 현대적인 방법으로 권장
// 동일한 이벤트를 여러번 사용 가능
const btnNow = document.querySelector(`#btnNow`);
btnNow.addEventListener(`click`, () => {
  alert(`첫번째 클릭 이벤트`);
});

btnNow.addEventListener(`click`, () => {
  alert(`두번째 클릭 이벤트`);
});

// window.addEventListener(`scroll`, () => {
//   console.log(`스크롤 생성`);
// });

window.addEventListener(`scroll`, printScroll);

// removeEventListener
// DOM 요소에 추가된 이벤트를 제거하는 방법
// window.removeEventListener(`scroll`, printScroll);

// 처음에는 스크롤 이벤트가 살아있다가, 삭제 버튼을 눌렀을 때 window의 스크롤 이벤트가 삭제되도록
const btnDel = document.querySelector(`#btnDel`);
btnDel.addEventListener(`click`, () => {
  window.removeEventListener(`scroll`, printScroll);
});

function printScroll(e) {
  console.log(`스크롤 실행`);
}

// 이벤트 객체
// 이벤트가 발생 했을 때 해당 이벤트에 대한 정보를 포함하는 객체
const btnObj = document.querySelector(`#btnObj`);
btnObj.addEventListener(`click`, (e) => {
  console.log(e);
  e.target.textContent = `XXXXXX`;
});

function eventInformation(e) {
  console.log(e);
}

const container = document.querySelector(`.container`);
container.addEventListener(`scroll`, eventInformation);
