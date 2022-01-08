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
              <NuxtLink
                :to="menu.to"
                :title="menu.hint"
                class="text-decoration-none white--text text--secondary"
              >
                {{ menu.title }} &#8728;
              </NuxtLink>
            </span>
          </div>
          <div>
            <v-btn icon small v-for="ic in sosmed" :key="ic" class="mr-2">
              <v-icon>mdi-{{ ic.icon }}</v-icon>
            </v-btn>
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
          title: "Project",
          to: "/project",
          hint: "Project"
        },
        {
          title: "Podcast",
          to: "/podcast",
          hint: "Suka Ngobrol"
        },
        {
          title: "Dottom Style",
          to: "/art",
          hint: "Suka Ngobrol"
        },
        {
          title: "Support",
          to: "/support",
          hint: "Suka Ngobrol"
        },
        {
          title: "About",
          to: "/about",
          hint: "Suka Ngobrol"
        }
      ],
      sosmed: [
        {
          icon: "github",
          link: ""
        },
        {
          icon: "email",
          link: ""
        },
        {
          icon: "instagram",
          link: ""
        },
        {
          icon: "linkedin",
          link: ""
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
