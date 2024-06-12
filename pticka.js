const itemArr = [
  {
    img: "img/1.jpg",
    artist: "Марсель Руссо",
    name: "Охота Амура",
    size: "Холст, масло (50х80)",
    price: "14 500 руб",
    country: "fr",
  },
  {
    img: "img/2.jpg",
    artist: "Анри Селин",
    name: "Дама с собачкой",
    size: "Акрил, бумага (50х80)",
    price: "16 500 руб",
    country: "fr",
  },
  {
    img: "img/3.jpg",
    artist: "Франсуа Дюпон",
    name: "Процедура",
    size: "Цветная литография (40х60)",
    price: "20 000 руб",
    country: "fr",
  },
  {
    img: "img/4.jpg",
    artist: "Луи Детуш",
    name: "Роза",
    size: "Бумага, акрил (50х80)",
    price: "12 000 руб",
    country: "fr",
  },
  {
    img: "img/5.jpg",
    artist: "Франсуа Дюпон",
    name: "Птичья трапеза",
    size: "Цветная литография (40х60)",
    price: "22 500 руб",
    country: "fr",
  },
  {
    img: "img/6.jpg",
    artist: "Пьер Моранж",
    name: "Пейзаж с рыбой",
    size: "Цветная литография (40х60)",
    price: "20 000 руб",
    country: "fr",
  },
  {
    img: "img/gr1.jpg",
    artist: "Курт Вернер",
    name: "Над городом",
    size: "Цветная литография (40х60)",
    price: "16 000 руб",
    country: "gr",
  },
  {
    img: "img/gr2.jpg",
    artist: "Макс Рихтер",
    name: "Птенцы",
    size: "Холст, масло (50х80)",
    price: "14 500 руб",
    country: "gr",
  },
  {
    img: "img/gr3.jpg",
    artist: "Мартин Майер",
    name: "Среди листьев",
    size: "Цветная литография (40х60)",
    price: "20 000 руб",
    country: "gr",
  },
  {
    img: "img/gr4.jpg",
    artist: "Герман Беккер",
    name: "Яркая птица",
    size: "Цветная литография (40х60) ",
    price: "13 000 руб",
    country: "gr",
  },
  {
    img: "img/gr5.jpg",
    artist: "Вульф Бауэр",
    name: "Дятлы",
    size: "Бумага, акрил (50х80) ",
    price: "20 000 руб",
    country: "gr",
  },
  {
    img: "img/gr6.jpg",
    artist: "Вальтер Хартманн",
    name: "Большие воды",
    size: "Бумага, акрил (50х80) ",
    price: "23 000 руб",
    country: "gr",
  },
  {
    img: "img/en1.jpg",
    artist: "Пол Смит",
    name: "Дикий зверь",
    size: "Акварель, бумага (50х80) ",
    price: "19 500 руб",
    country: "en",
  },
  {
    img: "img/en2.jpg",
    artist: "Джон Уайт",
    name: "Скалистый берег",
    size: "Цветная литография (40х60) ",
    price: "17 500 руб",
    country: "en",
  },
  {
    img: "img/en3.jpg",
    artist: "Джим Уотсон",
    name: "Река и горы",
    size: "Акварель, бумага (50х80) ",
    price: "20 500 руб",
    country: "en",
  },
  {
    img: "img/en4.jpg",
    artist: "Юджин Зиллион",
    name: "Белый попугай",
    size: "Цветная литография (40х60) ",
    price: "15 500 руб ",
    country: "en",
  },
  {
    img: "img/en5.jpg",
    artist: "Эрик Гиллман",
    name: "Ночная рыба",
    size: "Бумага, акрил (50х80) ",
    price: "12 500 руб",
    country: "en",
  },
  {
    img: "img/en6.jpg",
    artist: "Альфред Барр",
    name: "Рыжий кот",
    size: "Цветная литография (40х60) ",
    price: "21 000 руб",
    country: "en",
  },
];

const removeActive = () => {
  const allBtn = document.querySelectorAll(".countries");
  allBtn.forEach((item) => {
    item.classList.remove("active");
  });
};

const filterCountry = (arr, country) => {
  return arr.filter((item) => item.country === country);
};

const addItems = (arr) => {
  const itemArr = document.querySelector(".reproductions-item");
  itemArr.innerText = "";
  arr.forEach((item) => {
    const itemElement = `
      <div class="item">
                      <img src="${item.img}" alt="" />
                      <div class="item-artist">${item.artist}</div>
                      <div class="item-name">${item.name}</div>
                      <div class="item-size">${item.size}</div>
                      <div class="item-price">${item.price}</div>
                      <button class="item-button"> В корзину</button>
                    </div>
            `;
    itemArr.innerHTML += itemElement;
  });
};

const addDefCountry = () => {
  const filtered = filterCountry(itemArr, "fr");
  addItems(filtered);
};
addDefCountry();

const countries = document.querySelector(".reproductions-countries");
countries.addEventListener("click", (event) => {
  const button = event.target;
  const countryAttribute = button.dataset.country;
  removeActive();
  button.classList.add("active");
  const filtered = filterCountry(itemArr, countryAttribute);
  addItems(filtered);
});
