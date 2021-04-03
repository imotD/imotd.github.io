<template>
  <div class="">
    <div class="container mx-auto px-32 pt-5">
      <div class="pb-10">
        <h1 class="text-5xl font-black tracking-wide mb-5">Portofolio</h1>
        <span class="font-light tracking-wide">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi,
          adipisci, facere cum error eum magni neque rerum dolores culpa, nihil
          excepturi nulla rem! Corporis non ullam dolore culpa dolores amet.
        </span>
      </div>
      <main class="mb-20">
        <BaseCardProject
          v-for="(p, i) in datas"
          :key="i.id"
          :category="p.category"
          :title="p.title"
          :description="p.description"
          :icon="p.icon[i]"
          :link="p.link"
          :image="p.image"
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
      datas: [],
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
  mounted() {
    this.$http
      .get("https://my-json-server.typicode.com/imotD/imotD.github.io/db")
      // .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((res) => (this.datas = res.data.project));
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
