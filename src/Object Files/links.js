import { v4 as uuid } from "uuid";

const myLinks = [
  {
    id: uuid(),
    links: "https://github.com/Nishant08521",
    icons: "fa-brands fa-github class-purple",
    label: "connect with me on github ",
  },
  {
    id: uuid(),
    links: "https://www.linkedin.com/in/nishant-singh-a6934624b/",
    icons: "fa-brands fa-linkedin class-purple",
    label: "connect with me on linkedin ",
  },
  {
    id: uuid(),
    links: "https://x.com/Nishant18404452",
    icons: "fa-brands fa-twitter class-purple",
    label: "connect with me on twitter ",
  },
  {
    id: uuid(),
    links: "mailto:nishantkumarsingh0852@gmail.com",
    icons: "fa-solid fa-envelope class-purple",
    label: "Send me an email ",
  },
  {
    id: uuid(),
    links: "tel:7667084784",
    icons: "fa-solid fa-phone class-purple",
    label: "Call me on my cellphone number ",
  },
];

export default myLinks;