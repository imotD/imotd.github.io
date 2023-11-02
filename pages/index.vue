<template>
  <div class="d-flex justify-start align-center h-screen bg-app">
    <v-container class="hero">
      <div class="d-flex flex-column">
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
          <v-btn
            v-for="menu in menus"
            :key="i"
            size="small"
            rounded="xs"
            class="mr-md-3"
            elevation="0"
            variant="plain"
            :to="menu.to"
          >
            {{ menu.title }}
          </v-btn>
        </div>
        <div>
          <v-btn
            v-for="sosmed in socialMedia"
            :key="i"
            size="small"
            variant="plain"
          >
            <v-icon start :icon="`mdi-${sosmed.icon}`"></v-icon>
            <!-- {{ sosmed.icon }} -->
          </v-btn>
        </div>
      </div>
    </v-container>
    <Tooltips />
  </div>
</template>

<script setup>
import { ref } from "vue";

const menus = ref([
  {
    title: "Projects",
    to: "/projects",
    hint: "Kerjaan/Karya",
  },
  {
    title: "Podcast",
    to: "/podcast",
    hint: "Keluh Kesah",
  },
  {
    title: "Dottom Style",
    to: "/art",
    hint: "Gallery Seni",
  },
  {
    title: "Support",
    to: "/support",
    hint: "Traktir Kopi untuk saya",
  },
  {
    title: "Tentang",
    to: "/about",
    hint: "Saya Pemalu",
  },
]);

const socialMedia = ref([
  {
    icon: "github",
    link: "https://github.com/imotD",
  },
  {
    icon: "email",
    link: "mailto:tommy.alhamra@gmail.com",
    hover: "email-open",
  },
  {
    icon: "instagram",
    link: "https://www.instagram.com/tommyalhamra/",
  },
  {
    icon: "book-open-blank-variant",
    link: "https://medium.com/@tommyalhamra ",
  },
  {
    icon: "linkedin",
    link: "https://id.linkedin.com/in/tommy-alhamra ",
  },
]);
</script>

<style lang="scss" scoped>
@use "~/assets/css/main.scss";
</style>
