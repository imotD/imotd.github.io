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
        class="grid grid-cols-12 border-2 hover:border-blue-500 hover:shadow-lg rounded-md"
      >
        <div class="col-span-5 p-5">
          <p class="text-gray-500 tracking-wider">Proyek Pribadi</p>
          <h3 class="font-black text-2xl tracking-wider leading-10">
            Git Master
          </h3>
          <span class="font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            distinctio quae dicta incidunt sunt quos rem iure impedit non vel?
          </span>
          <div class="flex">
            <div class="h-10 w-10 bg-gray-100 rounded">
              <img class="m-auto" src="@/assets/img/logo/logo-vuejs.png" alt="tech" />
            </div>
          </div>
          <router-link to="/test">
            Selengkapnya
          </router-link>
        </div>
        <div class="col-span-7 bg-blue-100 rounded-tr-lg">
          <div
            class="h-36 mt-14 w-4/5 bg-cover bg-center m-auto bg-yellow-100 rounded-t"
            :style="bgProject"
          ></div>
          <!-- <img class="h-36 mt-14 w-4/5 bg-green-800 m-auto" src="@/assets/img/project/p-gitmaster.png" alt="img" /> -->
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
export default {
  name: "Project",
  components: {
    Footer,
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

<style lang="scss" scoped></style>
