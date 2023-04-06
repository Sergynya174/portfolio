import KiberGid from "../images/kibergid.jpg";
import Chat from "../images/chat.jpg";
import Mesto from "../images/mesto.jpg";
import Travel from "../images/travel.jpg";

const images = [
  {
    name: "КиберГид",
    image: KiberGid,
    link: "https://kibergid.ru/",
    text: "Командный проект аудиогид для создания, прохождения и прослушивания интересных маршрутов в городах России. Технологии: React.js, Redux, mui, axios, Git.",
  },
  {
    name: "Чат",
    image: Chat,
    link: "https://luminous-lebkuchen-c842a3.netlify.app/",
    text: "Чат в реальном времени для общения! Технологии: React.js, Socket.io, Node.js, Express.js",
  },
  {
    name: "Место",
    image: Mesto,
    link: "https://sergynya174.github.io/react-mesto-auth/",
    text: "Сервис предоставляет возможность делиться красивыми фотографиями мест в которых побывал фотограф. Технологии: HTML5, CCS3, JavaScript (стандарт ES6), React, Методология БЭМ, Flexbox, GRID, Webpack",
  },
  {
    name: "Путешествия по России",
    image: Travel,
    link: "https://sergynya174.github.io/russian-travel/",
    text: "Фронтенд проекта «Путешествия по России» — это одностраничный сайт с адаптивной вёрсткой для разных устройств. Технологии: HTML5, CSS3, БЭМ, Flexbox, Grid Layout, Figma.",
  },
];

export default images;
