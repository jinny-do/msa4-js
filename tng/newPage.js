const form = document.querySelector(`form`);
form.addEventListener(`submit`, (e) => {
  e.preventDefault(); // 기존에 폼태그가 하려고 했던 이벤트를 취소 (서버에 요청을 보내는 처리)
  const baseUrl = `https://picsum.photos/v2/list`;
  const url = `${baseUrl}?page=${Math.floor(Math.random() * 10) + 1}&limit=5`;
  axios
    .get(url)
    .then((res) => {
      const container = document.querySelector(`.container`);
      container.textContent = ``;

      res.data.forEach((item) => {
        const newCardImg = document.createElement(`div`);
        newCardImg.style.backgroundImage = `url('${item.download_url}')`;
        newCardImg.classList.add(`card-img`);

        // 카드 요소 생성
        const newCard = document.createElement(`div`);
        newCard.classList.add(`card`);
        newCard.appendChild(newCardImg);

        // 컨테이너에 카드 삽입
        container.appendChild(newCard);
      });
    })
    .catch((err) => {
      console.error(err);
    });
});
