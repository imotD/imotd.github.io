<template>
  <div>
    <v-container class="hero">
      <v-row align="center" class="text-center text-md-left">
        <v-col
          cols="12"
          md="8"
          @mouseover="cv.show = false"
          @mouseleave="cv.show = true"
        >
          <div class="yellow--text">
            <i
              class="em em-fire p-5 mb-1 ma-auto d-block d-md-none"
              aria-role="presentation"
              aria-label="FIRE"
            ></i>
            <p class="py-0">Selamat Datang di Galeri</p>
          </div>
          <div class="mb-3">
            <h1 class="font-weight-bold text-light mb-1">
              S
              <span class="d-inline d-md-none">u</span>
              <i
                class="em em-fire d-none d-md-inline-block mx-0 mx-md-1"
                aria-role="presentation"
                aria-label="FIRE"
              >
              </i>
              p e r_ Dottom
            </h1>
            <h2 id="sayHay" class="font-weight-bold" />
          </div>
          <div class="mb-5">
            <div class="d-sm-inline-block" v-for="(menu, i) in menus" :key="i">
              <v-btn
                class="pl-md-0"
                text
                small
                plain
                :to="menu.to"
                :title="menu.hint"
              >
                <h3 class="font-weight-medium">{{ menu.title }}</h3>
                <span class="yellow--text ml-1">&#8728;</span>
              </v-btn>
            </div>
          </div>
          <div>
            <a
              v-for="(icon, i) in sosmed"
              :key="i"
              :href="icon.link"
              target="_blank"
              class="mr-5 text-decoration-none hero--sosmed"
            >
              <v-icon class="hero--sosmed__icon"> mdi-{{ icon.icon }} </v-icon>
            </a>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-tooltip top color="pink darken-4">
      <template v-slot:activator="{ on, attrs }">
        <v-fab-transition>
          <v-btn
            v-bind="attrs"
            v-on="on"
            v-show="cv.show"
            color="pink"
            fab
            class="hero--button"
            @click="goToCV(cv)"
          >
            <v-icon>mdi-rocket-launch-outline</v-icon>
          </v-btn>
        </v-fab-transition>
      </template>
      <span class="text-caption">{{ cv.msg }}</span>
    </v-tooltip>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      cv: {
        show: true,
        url: "https://cv.dottomuniverse.tech/",
        msg: "My Resume",
      },
      menus: [
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
      ],
      sosmed: [
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
      ],
    };
  },
  mounted() {
    this.textSayhay();
  },
  methods: {
    textSayhay() {
      this.$gsap.to("#sayHay", {
        duration: 1,
        text: "Tempat berkumpulnya hal-hal yang saya sukai.",
      });
    },
    goToCV(link) {
      window.open(link.url, "_blank");
    },
  },
};
</script>
