<template>
  <div class="">
    <div class="container mx-auto px-32 pt-5">
      <div class="pb-10">
        <h1 class="text-5xl font-black tracking-wide mb-5">Portofolio</h1>
        <span class="tracking-wide text-gray-500 font-light	">
          Selamat Datang, di Galery Proyek yang pernah saya buat. Dan mungkin
          kebanyakan personal proyeknya ketimbang yang real dan orang-orang
          biasa menyebutnya Fake Project namun bagi saya itu adalah Mahakarya
          ~hohoi.
        </span>
      </div>

      <main class="mb-20">
        <BaseCardProject
          v-for="(item, i) in data"
          :key="i.id"
          :id="item.fields.id"
          :category="item.fields.category"
          :title="item.fields.title"
          :description="item.fields.description.content[0]"
          :icon="item.fields.icon"
          :image="item.fields.image"
        />
      </main>
      <BaseIcon nav="icons icons--left" title="Back" @btn="back()">
        <ph-arrow-u-up-left :size="35" />
      </BaseIcon>

      <BaseIcon nav="icons icons--right" title="Karya" @btn="next()">
        <ph-arrow-u-down-right :size="35" />
      </BaseIcon>
    </div>
    <Footer />
  </div>
</template>

<script>
import BaseIcon from "@/components/BaseIcon.vue";
import BaseCardProject from "@/components/BaseCardProject.vue";
import { PhArrowUUpLeft, PhArrowUDownRight } from "phosphor-vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Project",
  components: {
    BaseIcon,
    BaseCardProject,
    Footer,
    PhArrowUUpLeft,
    PhArrowUDownRight,
  },
  data() {
    return {
      data: null,
    };
  },
  created() {
    const contentful = require("contentful");
    const client = contentful.createClient({
      space: "i3y6mpxci9qy",
      environment: "master",
      accessToken: "EqpCCpPDhk2o9LQwDVgbR_clnf8jY7avy6-ZnEUqPn4",
    });
    client
      .getEntries()
      .then((res) => {
        this.data = res.items;
      })
      .catch((err) => console.log(err));
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
