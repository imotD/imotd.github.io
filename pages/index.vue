<template>
  <div class="d-flex justify-start align-center h-screen bg-app">
    <v-container class="hero">
      <div
        class="d-flex flex-column"
        @mouseover="viewToolips = false"
        @mouseleave="viewToolips = true"
      >
        <p>Welcome to my website</p>

        <div class="my-md-2">
          <h1 class="text-h3 font-weight-bold">Dottom Universe 🔥</h1>
          <p
            class="text-h4 text-medium-emphasis font-weight-bold text-capitalize"
          >
            all activities are here
          </p>
        </div>

        <div>
          <template v-for="menu in menus" :key="menu.title">
            <v-btn
              size="small"
              rounded="xs"
              class="mr-3"
              elevation="0"
              variant="plain"
              :to="menu.to"
            >
              {{ menu.title }}
            </v-btn>
          </template>
        </div>

        <div class="mt-md-2">
          <template v-for="sosmed in socialMedia" :key="sosmed.link">
            <v-btn
              :href="sosmed.link"
              :icon="sosmed.icon"
              color="grey-darken-1"
              class="icon"
              target="_blank"
              size="large"
              variant="text"
            />
          </template>
        </div>
      </div>
    </v-container>

    <Tooltips v-show="viewToolips" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const menus = [
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
];

const socialMedia = [
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
];

const viewToolips = ref(true);
</script>

<style lang="scss" scoped>
@use "~/assets/css/main.scss";
</style>
