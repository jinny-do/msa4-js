const newLi = document.createElement(`li`);
newLi.textContent = `장기`;
newLi.classList.add(`none-li`);

const apple = document.getElementById(`apple`);

const parent = document.querySelector(`#ul`);
parent.insertBefore(newLi, apple);

const createLi = document.querySelectorAll(`li`);
createLi[2].classList.add(`none-li`);

const liAll = document.querySelectorAll(`li`);
liAll[9].style.backgroundColor = `beige`;
liAll.forEach((item, idx) => {
  if ((idx + 1) % 2 === 0) {
    item.style.color = `red`;
  } else {
    item.style.color = `blue`;
  }
});
