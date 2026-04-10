// 요소 선택

// document.getElementById(id): 요소의 ID로 선택
const titleEle = document.getElementById(`title`);
titleEle.style.color = `blue`;

// document.getElementsByTagName(tagName): 요소의 태그명으로 선택
// 해당 요소들을 HTMLCollection 객체로 획득
const tagEle = document.getElementsByTagName(`h1`);

for (let i = 0; i < tagEle.length; i++) {
  tagEle[i].style.color = `#ff0000`;
}

// document.getElementByClassName(ClassName): 클래스 요소를 선택
// 해당 요소들을 HTMLCollection 객체로 획득
const classEle = document.getElementsByClassName(`title2`);

// **** 매우중요(현업 사용) *****
// document.querySelector(selector): CSS 선택자를 사용해 요소를 찾는 메소드
// 선택된 요소가 복수일 경우, 가장 첫번째 요소만 선택
const queryId = document.querySelector(`#title`);
queryId.style.color = `skyblue`;
const queryType = document.querySelector(`h1`);
queryType.style.color = `green`; // 여러개지만 가장 첫번째 h1태그만 가져옴

// document.querySelectorAll(selector): CSS 선택자를 사용해 요소를 찾는 메소드
// 선택된 요소가 복수일 경우, 전부 선택
// 해당 요소들을 NodeList 객체로 획득
const queryAll = document.querySelectorAll(`h1`);
queryAll.forEach((item) => {
  item.style.fontSize = `5rem`;
});

// 요소 조작
// -----------------------------------------------

// Element.textContent: 컨텐츠를 획득 및 변경
// 순수한 텍스트 데이터를 전달
const title1 = document.querySelector(`#title`);
title1.textContent; // 콘텐트 접근
title1.textContent = `테스트`; // 콘텐트 변경
// element.innerHTML: 콘텐츠를 획득 및 변경
// 태그는 태그로 인식해서 전달
title1.innerHTML = `<p>p태그</p>`;

// Element.setAttribute(attributeName, value)
// 요소에 속성과 속성 값을 추가하는 메서드
const setAttrInput = document.querySelector(`.set-attr`);
setAttrInput.setAttribute(`placeholder`, `js에서 추가`);
setAttrInput.setAttribute(`style`, `color: pink;`);

// Element.removeAttribute(attributeName)
// 요소의 특정 속성을 제거
setAttrInput.removeAttribute(`placeholder`);

// -----------------------------------------------
// 요소 스타일링
// -----------------------------------------------
// Element.style: 요소에 인라인 스타일을 추가
title1.style.color = `red`;

// Element.classList: DOMTokenList 객체로 클래스를 제어
title1.classList.add(`display-none`); // 클래스 추가
title1.classList.remove(`display-none`); // 클래스 제거
title1.classList.toggle(`display-none`); // 클래스 토글

// -----------------------------------------------
// 새로운 요소 생성
// -----------------------------------------------
// document.createElement(tagName): 해당 tag요소를 생성
const newP = document.createElement(`p`);
newP.textContent = `탕수육`;
newP.style.color = "#c72cff";

// Node.appendChild(node)
// 해당 부모노드의 가장 마지막 자식 노드로 추가
const parentContainer = document.querySelector(`.container`);
parentContainer.appendChild(newP);

const newSpan = document.createElement(`span`);
newSpan.textContent = `크림새우`;
parentContainer.appendChild(newSpan);

// Node.insertBefore(newNode, refernceNode);
const newH3 = document.createElement(`h3`);
newH3.textContent = `짬뽕`;
parentContainer.insertBefore(newH3, newSpan); // 탕수육과 크림새우 사이에 들어감

// Node.removeChild(node)
// 해당 부모 노드의 특정 자식 노드를 제거
parentContainer.removeChild(newH3);
