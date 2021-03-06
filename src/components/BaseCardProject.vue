<template>
  <div
    class="grid grid-cols-12 border-2 hover:border-blue-500 hover:shadow-lg rounded-md h-80 relative mb-5"
  >
    <div class="col-span-5 p-5 pb-10">
      <!-- title -->
      <p class="text-gray-500 tracking-wider">{{ category }}</p>
      <h3 class="font-black text-2xl tracking-wider leading-loose">
        {{ title }}
      </h3>
      <div
        class="font-light"
        style="
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;  
        overflow: hidden;
        "
      >
        {{ description }}
      </div>
      <div class="flex flex-row gap-2 mt-3">
        <div
          class="h-11 w-11 bg-gray-100 rounded flex justify-items-center items-center"
          :title="icon"
        >
          <img
            class="m-auto"
            :src="require(`@/assets/img/logo/${icon}`)"
            :alt="icon"
          />
        </div>
      </div>
      <div class="absolute bottom-0 p-2 pb-5">
        <router-link :to="link" class="flex gap-5 hover:text-blue-500">
          Selengkapnya <ph-arrow-right :size="22" />
        </router-link>
      </div>
    </div>
    <div class="col-span-7 bg-blue-100 rounded-tr-lg relative">
      <!-- img -->
      <div
        class="absolute bottom-0 m-auto left-0 right-0 h-60 mt-14 w-4/5 bg-cover bg-center m-auto bg-yellow-100 rounded-t "
        :style="{
          'background-image':
            'url(' + require('@/assets/img/project/' + image) + ')',
        }"
      ></div>
      <!-- <img class="h-36 mt-14 w-4/5 bg-green-800 m-auto" src="" alt="img" /> -->
    </div>
  </div>
</template>

<script>
import { PhArrowRight } from "phosphor-vue";
export default {
  name: "BaseCardProject",
  components: {
    PhArrowRight,
  },
  props: ["title", "description", "category", "image", "icon", "link"],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
