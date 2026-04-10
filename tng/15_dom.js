const newLi = document.createElement(`li`);
newLi.textContent = `장기`;
newLi.classList.add(`none-li`);

const apple = document.getElementById(`apple`);

const parent = document.querySelector(`#ul`);
parent.insertBefore(newLi, apple);

const createLi = document.querySelectorAll(`li`);
createLi[2].classList.add(`none-li`);

const liAll = document.querySelectorAll(`.none-li`);
liAll[9].style.backgroundColor = `begie`;
liAll.forEach((item, idx) => {
  if (idx === 9) {
    item.style.backgroundColor = "beige";
  }
  if (idx % 2 === 1) {
    item.style.color = `red`;
  } else {
    item.style.color = `blue`;
  }
});
