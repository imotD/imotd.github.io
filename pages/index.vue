<template>
  <div>
    <v-container class="hero">
      <v-row align="center">
        <v-col @mouseover="cv.show = false" @mouseleave="cv.show = true">
          <span class="yellow--text">Hello World, I'm 👋</span>
          <h1 class="font-weight-black my-1">Tommy Alhamra.</h1>
          <h2 id="sayHay" class="text--secondary"></h2>
          <div class="my-5">
            <span v-for="(menu, i) in menus" :key="i">
              <v-btn
                text
                small
                plain
                :to="menu.to"
                :title="menu.hint"
                class="pl-0"
              >
                {{ menu.title }} <span class="yellow--text">&#8728;</span>
              </v-btn>
            </span>
          </div>
          <div>
            <a
              v-for="(icon, i) in sosmed"
              :key="i"
              :href="icon.link"
              target="_blank"
              class="mr-3 text-decoration-none hero--sosmed"
            >
              <v-icon class="hero--sosmed__icon"> mdi-{{ icon.icon }} </v-icon>
            </a>
          </div>
        </v-col>
        <v-col>
          <!-- <img
            id="vue"
            src="../static/vuetify-logo.svg"
            width="300"
            alt="image"
          />
          <div class="circle"></div> -->
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
        url: "https://github.com/imotD",
        msg: "My Super CV"
      },
      menus: [
        {
          title: "Projects",
          to: "/projects",
          hint: "Projects"
        },
        {
          title: "Podcast",
          to: "/podcast",
          hint: "Suka Ngobrol"
        },
        {
          title: "Dottom Style",
          to: "/art",
          hint: "Gallery Seni"
        },
        {
          title: "Support",
          to: "/support",
          hint: "Traktir Kopi untuk saya"
        },
        {
          title: "About",
          to: "/about",
          hint: "Saya Pemalu"
        }
      ],
      sosmed: [
        {
          icon: "github",
          link: "https://github.com/imotD"
        },
        {
          icon: "email",
          link: "mailto:tommy.alhamra@gmail.com",
          hover: "email-open"
        },
        {
          icon: "instagram",
          link: "https://www.instagram.com/tommyalhamra/"
        },
        {
          icon: "linkedin",
          link: "https://id.linkedin.com/in/tommy-alhamra-217112151 "
        }
      ]
    };
  },
  mounted() {
    this.textSayhay();
  },
  methods: {
    textSayhay() {
      this.$gsap.to("#sayHay", {
        duration: 1,
        text: "I like to make something."
      });
    },
    goToCV(link) {
      window.open(link.url, "_blank");
    }
  }
};
</script>
