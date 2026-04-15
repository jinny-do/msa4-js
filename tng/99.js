// 0. 페이지 처음 로드시 카드는 아무것도 없습니다.

// 1. 다음 버튼을 누르면 다음 페이지를 3개 가져옵니다.

// 2. 리셋 버튼을 누르면 모든 카드가 초기화 됩니다.
// 	2-1. 리셋 후 다음 버튼을 누르면 첫 페이지부터 불러옵니다.

// 3. 사용하는 API는 아래와 같습니다.
// 	- baseURL: https://picsum.photos/v2/list
// 	- paramers:
// 	  - page: number
// 	  - limit: number

(() => {
  const nextBtn = document.querySelector(`#next`);
  const resetBtn = document.querySelector(`#reset`);
  let page = 1;

  const nextPage = () => {
    page++;
  };

  const resetPage = () => {
    page = 1;
  };

  nextBtn.addEventListener(`click`, async () => {
    const baseUrl = `https://picsum.photos/v2/list`;
    const url = `${baseUrl}?page=${page}&limit=3`;

    try {
      const response = await axios.get(url);
      const container = document.querySelector(`.container`);

      response.data.forEach((item) => {
        const cardImg = document.createElement(`div`);
        cardImg.style.backgroundImage = `url('${item.download_url}')`;
        cardImg.classList.add(`card-img`);

        const author = document.createElement(`span`);
        author.textContent = `${item.id}: ${item.author}`;

        const newCard = document.createElement(`div`);
        newCard.classList.add(`card`);
        newCard.appendChild(cardImg);
        newCard.appendChild(author);

        container.appendChild(newCard);
      });

      nextPage();
    } catch (error) {
      console.log(error);
    }
  });

  resetBtn.addEventListener(`click`, () => {
    const container = document.querySelector(`.container`);
    container.textContent = ``;
    resetPage();
  });
})();
