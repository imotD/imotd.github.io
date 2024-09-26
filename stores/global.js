import { defineStore } from "pinia";

export const useGlobalStore = defineStore("global", {
  state: () => ({
    menus: [
      {
        title: "Projects",
        to: "/projects",
        hint: "Proyek/Karya",
      },
      {
        title: "Podcast",
        to: "/podcast",
        hint: "Keluh Kesah",
      },
      {
        title: "Dottom Style",
        to: "/art",
        hint: "Karya Iseng",
      },
      {
        title: "Support",
        to: "/support",
        hint: "Traktir Kopi untuk saya",
      },
      {
        title: "About",
        to: "/about",
        hint: "Saya Pemalu",
      },
    ],

    socialMedia: [
      {
        icon: "mdi-github",
        link: "https://github.com/imotD",
      },
      {
        icon: "mdi-email",
        link: "mailto:tommy.alhamra@gmail.com",
        hover: "email-open",
      },
      {
        icon: "mdi-instagram",
        link: "https://www.instagram.com/tommyalhamra/",
      },
      {
        icon: "mdi-book-open-blank-variant",
        link: "https://medium.com/@tommyalhamra ",
      },
      {
        icon: "mdi-linkedin",
        link: "https://id.linkedin.com/in/tommy-alhamra ",
      },
    ],
  }),

  actions: {},
});
