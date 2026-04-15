const form = document.querySelector(`form`);

form.addEventListener(`submit`, async (e) => {
  e.preventDefault(); // 기존에 폼태그가 하려고 했던 이벤트를 취소 (서버에 요청을 보내는 처리)

  const baseUrl = `https://picsum.photos/v2/list`;

  const page = form.page.value;
  const limit = form[`limit`].value;
  const url = `${baseUrl}?page=${page}&limit=${limit}`;

  try {
    const response = await axios.get(url);

    // 카드들 넣을 컨테이너
    const container = document.querySelector(`.container`);
    container.textContent = ``; // 검색 누를 때 마다 카드 누적 x 새로운 화면에 카드 줌

    // res.data: 서버가 보내온 데이터가 저장된 프로퍼티
    response.data.forEach((item) => {
      // 카드 이미지 요소 생성
      const newCardImg = document.createElement(`div`);
      newCardImg.style.backgroundImage = `url('${item.download_url}')`;
      newCardImg.classList.add(`card-img`);

      // 카드 저작권자 요소 생성
      const newAuthor = document.createElement(`span`);
      newAuthor.textContent = `${item.id}: ${item.author}`;

      // 카드 요소 생성
      const newCard = document.createElement(`div`);
      newCard.classList.add(`card`);
      newCard.appendChild(newCardImg);
      newCard.appendChild(newAuthor);

      // 컨테이너에 카드 삽입
      container.appendChild(newCard);
    });
  } catch (error) {
    console.log(error);
  }

  //   axios
  //     .get(url)
  //     .then((res) => {})
  //     .catch((err) => {
  //       console.error(err);
  //     });
});
