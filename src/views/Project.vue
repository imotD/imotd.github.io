<template>
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
      <div
        class="grid grid-cols-12 border-2 hover:border-blue-500 hover:shadow-lg rounded-md h-80 relative"
      >
        <div class="col-span-5 p-5">
          <p class="text-gray-500 tracking-wider">Proyek Pribadi</p>
          <h3 class="font-black text-2xl tracking-wider leading-loose">
            Git Master
          </h3>
          <div class="font-light line-clamp overflow-hidden">
            Vue.js adalah kerangka kerja JavaScript yang bersifat progresif,
            bersumber terbuka untuk membangun antarmuka pengguna. Integrasi ke
            dalam proyek yang menggunakan pustaka JavaScript lainnya mudah
            dilakukan dengan Vue karena ia dirancang untuk bisa berjalan hanya
            di beberapa bagian halaman web
          </div>
          <div class="flex flex-row gap-2 mt-3">
            <div
              class="h-11 w-11 bg-gray-100 rounded flex justify-items-center items-center"
              title="vue"
            >
              <img
                class="m-auto"
                src="@/assets/img/logo/logo-vuejs.png"
                alt="tech"
              />
            </div>
          </div>
          <div class="absolute bottom-0 p-2 pb-5">
            <router-link to="/test" class="flex gap-5 hover:text-blue-500">
              Selengkapnya <ph-arrow-right :size="22" />
            </router-link>
          </div>
        </div>
        <div class="col-span-7 bg-blue-100 rounded-tr-lg relative">
          <div
            class="absolute bottom-0 m-auto left-0 right-0 h-60 mt-14 w-4/5 bg-cover bg-center m-auto bg-yellow-100 rounded-t"
            :style="bgProject"
          ></div>
          <!-- <img class="h-36 mt-14 w-4/5 bg-green-800 m-auto" src="" alt="img" /> -->
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import { PhArrowRight } from "phosphor-vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Project",
  components: {
    Footer,
    PhArrowRight,
  },
  data() {
    return {
      bgProject: {
        backgroundImage: `url(${require("@/assets/img/project/p-gitmaster.png")})`,
      },
    };
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
