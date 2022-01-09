<template>
  <div>
    <v-container class="hero">
      <v-row align="center">
        <v-col class="hero--title">
          <span class="yellow--text">Hello World, I'm 👋</span>
          <h1 class="font-weight-black">Tommy Alhamra.</h1>
          <h2 class="text--secondary">I like to make something.</h2>
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
                {{ menu.title }} &#8728;
              </v-btn>
            </span>
          </div>
          <div>
            <a
              v-for="ic in sosmed"
              :key="ic"
              :href="ic.link"
              target="_blank"
              class="mr-2 text-decoration-none white--text text--secondary"
            >
              <v-icon>mdi-{{ ic.icon }}</v-icon>
            </a>
          </div>
        </v-col>
        <v-col>
          <img src="" alt="image" />
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
          link: "mailto:tommy.alhamra@gmail.com"
        },
        {
          icon: "instagram",
          link: ""
        },
        {
          icon: "linkedin",
          link: "https://id.linkedin.com/in/tommy-alhamra-217112151 "
        }
      ]
    };
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
}
</style>
