<template>
  <div>
    <v-container class="hero">
      <v-row align="center">
        <v-col class="hero--title">
          <span class="yellow--text">Hello World, I'm 👋</span>
          <h1 class="font-weight-black">Tommy Alhamra.</h1>
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
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
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
    }
  }
};
</script>

<style lang="scss" scoped>
$font-title: "Merriweather", serif;
$font-default: "Be Vietnam Pro", sans-serif;

.hero {
  height: 100vh;
  display: flex;
  &--title {
    font-family: $font-title !important;
    h1 {
      font-size: 3.7rem;
    }
  }
  &--sosmed {
    &__icon {
      color: #3a4867;
      &:hover {
        color: #90939b;
      }
    }
  }
}
</style>
