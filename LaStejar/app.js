const menuItems = [
  {
    category: "starters", name: "Platou rustic moldovenesc", nameRu: "Молдавское деревенское плато",
    description: "Brânză de oi, legume proaspete, măsline și pâine de casă.",
    descriptionRu: "Овечья брынза, свежие овощи, оливки и домашний хлеб.",
    price: 185, label: "De împărțit", labelRu: "На компанию",
    image: "photo-1547592180-85f173990554"
  },
  {
    category: "starters", name: "Salată mediteraneană", nameRu: "Средиземноморский салат",
    description: "Roșii, castraveți, feta, măsline și dressing cu ulei de măsline.",
    descriptionRu: "Помидоры, огурцы, фета, оливки и заправка с оливковым маслом.",
    price: 145, label: "Proaspăt", labelRu: "Свежий выбор",
    image: "photo-1512621776951-a57141f2eefd"
  },
  {
    category: "starters", name: "Salată de vinete", nameRu: "Салат из запечённых баклажанов",
    description: "Vinete coapte, ceapă, ulei și pâine proaspătă.",
    descriptionRu: "Запечённые баклажаны, лук, масло и свежий хлеб.",
    price: 95, label: "Rețetă de casă", labelRu: "Домашний рецепт",
    image: "photo-1547592180-ec6c91e0b0b3"
  },
  {
    category: "mains", name: "Mici la grătar", nameRu: "Мититеи на гриле",
    description: "Patru mici rumeniți, muștar și pâine de casă.",
    descriptionRu: "Четыре мититея с гриля, горчица и домашний хлеб.",
    price: 165, label: "De pe grătar", labelRu: "С гриля",
    image: "photo-1544025162-d76694265947"
  },
  {
    category: "mains", name: "Sarmale tradiționale", nameRu: "Традиционные сармале",
    description: "Sarmale cu carne, mămăligă și smântână.",
    descriptionRu: "Сармале с мясом, мамалыга и сметана.",
    price: 175, label: "Preferatul casei", labelRu: "Любимое блюдо",
    image: "photo-1547592180-85f173990554"
  },
  {
    category: "mains", name: "Piept de pui la grătar", nameRu: "Куриная грудка на гриле",
    description: "Piept de pui, cartofi copți și legume de sezon.",
    descriptionRu: "Куриная грудка, запечённый картофель и сезонные овощи.",
    price: 195, label: "De sezon", labelRu: "Сезонное",
    image: "photo-1532550907401-a500c9a57435"
  },
  {
    category: "mains", name: "Mușchi de vită la grătar", nameRu: "Говяжья вырезка на гриле",
    description: "Mușchi de vită, piure fin și legume la grătar.",
    descriptionRu: "Говяжья вырезка, нежное пюре и овощи на гриле.",
    price: 345, label: "De pe grătar", labelRu: "С гриля",
    image: "photo-1546833999-b9f581a1996d"
  },
  {
    category: "pizza", name: "Pizza Margherita · 32 cm", nameRu: "Пицца Маргарита · 32 см",
    description: "Sos de roșii, mozzarella și busuioc proaspăt.",
    descriptionRu: "Томатный соус, моцарелла и свежий базилик.",
    price: 145, label: "Clasică", labelRu: "Классика",
    image: "photo-157 pizza"
  },
  {
    category: "pizza", name: "Pizza Pepperoni · 32 cm", nameRu: "Пицца Пепперони · 32 см",
    description: "Sos de roșii, mozzarella și pepperoni.",
    descriptionRu: "Томатный соус, моцарелла и пепперони.",
    price: 185, label: "Din cuptor", labelRu: "Из печи",
    image: "photo-1628840042765-356cda07504e"
  },
  {
    category: "dessert", name: "Papanași cu smântână și dulceață", nameRu: "Папанаши со сметаной и вареньем",
    description: "Papanași pregătiți la comandă, cu dulceață de fructe.",
    descriptionRu: "Папанаши, приготовленные на заказ, с фруктовым вареньем.",
    price: 115, label: "Făcuți la comandă", labelRu: "Готовим на заказ",
    image: "photo-1563805042-7684c019e1cb"
  },
  {
    category: "dessert", name: "Fondant de ciocolată", nameRu: "Шоколадный фондан",
    description: "Prăjitură caldă cu interior de ciocolată și înghețată.",
    descriptionRu: "Тёплый десерт с жидкой шоколадной серединой и мороженым.",
    price: 125, label: "Calde și bune", labelRu: "Тёплый десерт",
    image: "photo-1606313564200-e75d5e30476c"
  },
  {
    category: "drinks", name: "Limonadă de casă · 400 ml", nameRu: "Домашний лимонад · 400 мл",
    description: "Lămâie proaspătă, mentă și apă rece.",
    descriptionRu: "Свежий лимон, мята и прохладная вода.",
    price: 65, label: "De casă", labelRu: "Домашний",
    image: "photo-1513558161293-cda2ea0de1e2"
  },
  {
    category: "drinks", name: "Cafea cappuccino", nameRu: "Капучино",
    description: "Espresso și lapte spumat fin.",
    descriptionRu: "Эспрессо и нежная молочная пена.",
    price: 45, label: "Cafea", labelRu: "Кофе",
    image: "photo-1509042239860-f550ce710b93"
  },
  {
    category: "drinks", name: "Ceai", nameRu: "Чай",
    description: "Ceai aromat, servit fierbinte.",
    descriptionRu: "Ароматный чай, подаётся горячим.",
    price: 35, label: "Ceai", labelRu: "Чай",
    image: "photo-1544787219-7f47ccb76574"
  },
  {
    category: "drinks", name: "Apă minerală · 500 ml", nameRu: "Минеральная вода · 500 мл",
    description: "Apă minerală, plată sau carbogazoasă.",
    descriptionRu: "Минеральная вода: негазированная или газированная.",
    price: 30, label: "500 ml", labelRu: "500 мл",
    image: "photo-1523362628745-0c100150b504"
  },
  {
    category: "drinks", name: "Suc natural · 250 ml", nameRu: "Натуральный сок · 250 мл",
    description: "Suc de fructe, servit rece.",
    descriptionRu: "Фруктовый сок, подаётся охлаждённым.",
    price: 55, label: "250 ml", labelRu: "250 мл",
    image: "photo-1600271886742-f049cd451bba"
  }
];

const translations = {
  ro: {
    categories: { starters: "APERITIVE", mains: "FEL PRINCIPAL", pizza: "PIZZA", dessert: "DESERT", drinks: "BĂUTURI" },
    alt: name => `Preparat La Stejar: ${name}`,
    imageFallback: "photo-1547592180-85f173990554"
  },
  ru: {
    categories: { starters: "ЗАКУСКА", mains: "ОСНОВНОЕ", pizza: "ПИЦЦА", dessert: "ДЕСЕРТ", drinks: "НАПИТКИ" },
    alt: name => `Блюдо La Stejar: ${name}`,
    imageFallback: "photo-1547592180-85f173990554"
  }
};

let language = "ro";
let activeCategory = "all";
let reviewIndex = 0;
const reviewData = [
  {
    quote: "„O seară tare plăcută, mâncare gustoasă și o atmosferă în care chiar te simți binevenit. Revenim cu drag!”",
    quoteRu: "«Очень приятный вечер, вкусная еда и атмосфера, в которой чувствуешь себя желанным гостем. Обязательно вернёмся!»",
    name: "Alina M.", context: "Oaspete · cină în familie", contextRu: "Гость · семейный ужин", initials: "AM"
  },
  {
    quote: "„Am găsit aici gustul sarmalelor de acasă. Terasa e foarte plăcută, iar personalul ne-a întâmpinat cu multă căldură.”",
    quoteRu: "«Нашли здесь вкус домашних сармале. На террасе очень уютно, а персонал встретил нас с большой теплотой.»",
    name: "Victor R.", context: "Oaspete · prânz cu prietenii", contextRu: "Гость · обед с друзьями", initials: "VR"
  },
  {
    quote: "„Un loc potrivit pentru o cină liniștită în doi. Ne-au plăcut preparatele și atmosfera relaxată. Mulțumim!”",
    quoteRu: "«Прекрасное место для спокойного ужина вдвоём. Нам понравились блюда и непринуждённая атмосфера. Спасибо!»",
    name: "Irina C.", context: "Oaspete · cină în doi", contextRu: "Гость · ужин вдвоём", initials: "IC"
  }
];

const menuGrid = document.querySelector("#menu-grid");
const languageButton = document.querySelector(".language-switch");
const tabs = [...document.querySelectorAll(".menu-tab")];

function renderMenu() {
  const items = menuItems.filter(item => activeCategory === "all" || item.category === activeCategory);
  menuGrid.innerHTML = items.map((item, index) => {
    const name = language === "ru" ? item.nameRu : item.name;
    const description = language === "ru" ? item.descriptionRu : item.description;
    const label = language === "ru" ? item.labelRu : item.label;
    const imageId = item.image.startsWith("photo-") ? item.image : translations[language].imageFallback;
    return `<article class="dish-card" style="animation-delay:${Math.min(index * 35, 210)}ms">
      <div class="dish-image"><img src="https://images.unsplash.com/${imageId}?auto=format&fit=crop&w=700&q=80" alt="${translations[language].alt(name)}" loading="lazy"><span class="dish-category">${translations[language].categories[item.category]}</span></div>
      <div class="dish-info"><h3>${name}</h3><span class="dish-price">${item.price} <small>MDL</small></span></div>
      <p class="dish-description">${description}</p><span class="dish-label">${label}</span>
    </article>`;
  }).join("");
}

function setLanguage(nextLanguage) {
  language = nextLanguage;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-ro][data-ru]").forEach(element => {
    const translation = element.dataset[language];
    if (translation !== undefined) element.innerHTML = translation;
  });
  document.querySelectorAll("[data-placeholder-ro][data-placeholder-ru]").forEach(element => {
    element.placeholder = element.dataset[`placeholder${language.toUpperCase()}`];
  });
  document.querySelector(".language-switch .lang-active").textContent = language.toUpperCase();
  languageButton.setAttribute("aria-label", language === "ro" ? "Schimbă limba în rusă" : "Переключить язык на румынский");
  document.querySelector(".menu-toggle").setAttribute("aria-label", language === "ro" ? "Deschide meniul" : "Открыть меню");
  document.querySelector(".lightbox").setAttribute("aria-label", language === "ro" ? "Fotografie mărită" : "Увеличенное фото");
  document.querySelector(".lightbox-close").setAttribute("aria-label", language === "ro" ? "Închide fotografia" : "Закрыть фото");
  const guestsOption = document.querySelector('select[name="guests"] option[value="7+"]');
  guestsOption.textContent = language === "ro" ? "7+ (te rugăm să ne suni)" : "7+ (пожалуйста, позвоните)";
  const timePlaceholder = document.querySelector('select[name="time"] option[value=""]');
  const guestPlaceholder = document.querySelector('select[name="guests"] option[value=""]');
  timePlaceholder.textContent = language === "ro" ? "Alege ora" : "Выберите время";
  guestPlaceholder.textContent = language === "ro" ? "Câte persoane?" : "Сколько гостей?";
  renderMenu();
  renderReview();
}

function renderReview() {
  const review = reviewData[reviewIndex];
  document.querySelector("#review-quote").textContent = language === "ru" ? review.quoteRu : review.quote;
  document.querySelector("#review-name").textContent = review.name;
  document.querySelector("#review-context").textContent = language === "ru" ? review.contextRu : review.context;
  document.querySelector(".review-avatar").textContent = review.initials;
  document.querySelector(".review-count").innerHTML = `0${reviewIndex + 1} <i>/ 03</i>`;
}

tabs.forEach(tab => tab.addEventListener("click", () => {
  activeCategory = tab.dataset.category;
  tabs.forEach(item => {
    const selected = item === tab;
    item.classList.toggle("active", selected);
    item.setAttribute("aria-selected", String(selected));
  });
  renderMenu();
}));

languageButton.addEventListener("click", () => setLanguage(language === "ro" ? "ru" : "ro"));

const menuToggle = document.querySelector(".menu-toggle");
menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(open));
  document.querySelector(".main-nav").classList.toggle("open", open);
});
document.querySelectorAll(".main-nav a").forEach(link => link.addEventListener("click", () => {
  menuToggle.setAttribute("aria-expanded", "false");
  document.querySelector(".main-nav").classList.remove("open");
}));

document.querySelector(".review-prev").addEventListener("click", () => {
  reviewIndex = (reviewIndex + reviewData.length - 1) % reviewData.length;
  renderReview();
});
document.querySelector(".review-next").addEventListener("click", () => {
  reviewIndex = (reviewIndex + 1) % reviewData.length;
  renderReview();
});

const lightbox = document.querySelector(".lightbox");
document.querySelectorAll(".gallery-item").forEach(button => button.addEventListener("click", () => {
  const image = lightbox.querySelector("img");
  image.src = button.dataset.full;
  image.alt = button.querySelector("img").alt;
  lightbox.hidden = false;
  document.body.classList.add("no-scroll");
  lightbox.querySelector(".lightbox-close").focus();
}));
function closeLightbox() {
  lightbox.hidden = true;
  document.body.classList.remove("no-scroll");
}
lightbox.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", event => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !lightbox.hidden) closeLightbox();
});

const dateInput = document.querySelector('input[name="date"]');
const today = new Date();
dateInput.min = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
document.querySelector("#reservation-form").addEventListener("submit", event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const values = new FormData(form);
  const labels = language === "ro"
    ? { title: "SOLICITARE REZERVARE — LA STEJAR", name: "Nume", phone: "Telefon", date: "Data", time: "Ora", guests: "Număr de persoane", note: "Vă rog să confirmați rezervarea. Înțeleg că masa este rezervată doar după confirmarea echipei." }
    : { title: "ЗАПРОС НА БРОНИРОВАНИЕ — LA STEJAR", name: "Имя", phone: "Телефон", date: "Дата", time: "Время", guests: "Количество гостей", note: "Пожалуйста, подтвердите бронирование. Я понимаю, что столик забронирован только после подтверждения команды." };
  const body = [
    labels.title,
    "",
    `${labels.name}: ${values.get("name")}`,
    `${labels.phone}: ${values.get("phone")}`,
    `${labels.date}: ${values.get("date")}`,
    `${labels.time}: ${values.get("time")}`,
    `${labels.guests}: ${values.get("guests")}`,
    "",
    labels.note
  ].join("\n");
  const whatsappUrl = `https://wa.me/37369836472?text=${encodeURIComponent(body)}`;
  const status = document.querySelector("#form-status");
  status.textContent = language === "ro"
    ? "Se deschide WhatsApp cu solicitarea pregătită către restaurant. Apasă „Trimite” în WhatsApp; echipa noastră te va contacta pentru confirmare."
    : "Откроется WhatsApp с подготовленной заявкой для ресторана. Нажмите «Отправить» в WhatsApp; наша команда свяжется с вами для подтверждения.";
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
});

renderMenu();
renderReview();
