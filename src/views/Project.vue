<template>
  <div class="project">
    <div class="container mx-auto px-32 pt-12">
      <div class="pb-10">
        <h1 class="text-5xl font-black tracking-wide">Portofolio</h1>
        <span class="font-light tracking-wide">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi,
          adipisci, facere cum error eum magni neque rerum dolores culpa, nihil
          excepturi nulla rem! Corporis non ullam dolore culpa dolores amet.
        </span>
      </div>
      <main class="mb-20">
        <BaseCardProject
          category="Proyek Pribadi"
          title="Git Master"
          description=" Vue.js adalah kerangka kerja JavaScript yang bersifat progresif,
              bersumber terbuka untuk membangun antarmuka pengguna. Integrasi ke
              dalam proyek yang menggunakan pustaka JavaScript lainnya mudah
              dilakukan dengan Vue karena ia dirancang untuk bisa berjalan hanya
              di beberapa bagian halaman web"
          icon="vuejs.png"
          link="/test"
          :image="bgProject"
        />
      </main>
      <BaseIcon nav="icons icons--left" title="Back" @btn="back()">
        <ph-arrow-u-up-left :size="35" />
      </BaseIcon>

      <BaseIcon nav="icons icons--right" title="Karya" @btn="next()">
        <ph-arrow-u-down-right :size="35" />
      </BaseIcon>
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<script>
import BaseIcon from "@/components/BaseIcon.vue";
import BaseCardProject from "@/components/BaseCardProject.vue";
import { PhArrowUUpLeft, PhArrowUDownRight } from "phosphor-vue";
// import Footer from "@/components/Footer.vue";
export default {
  name: "Project",
  components: {
    BaseIcon,
    BaseCardProject,
    // Footer,
    PhArrowUUpLeft,
    PhArrowUDownRight,
  },
  data() {
    return {
      bgProject: {
        backgroundImage: `url(${require("@/assets/img/project/p-gitmaster.png")})`,
      },
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    next() {
      this.$router.push("/karya");
    },
  },
};
</script>

<style scoped>
.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
</style>
