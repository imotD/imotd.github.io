<template>
  <div
    class="
      grid grid-cols-12
      border-2
      hover:border-yellow-300
      hover:shadow-lg
      rounded-md
      h-80
      relative
      mb-5
      bg-blue-100
      hover:bg-yellow-300
    "
  >
    <div class="col-span-5 bg-white p-5 pb-10">
      <p class="text-gray-500 tracking-wider">{{ category }}</p>
      <h3 class="font-black text-2xl tracking-wider leading-loose">
        {{ title }}
      </h3>
      <div
        v-for="(content, i) in description"
        :key="i"
        class="font-light"
        style="
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        "
      >
        <span v-for="(data, v) in content" :key="v">
          {{ data.value }}
        </span>
      </div>

      <div class="flex flex-row gap-2 mt-3">
        <div
          v-for="(icon, i) in icon"
          :key="i"
          class="
            h-11
            w-11
            bg-gray-100
            rounded
            flex
            justify-items-center
            items-center
          "
          :title="icon.fields.title"
        >
          <img
            class="m-auto"
            :src="icon.fields.file.url"
            :alt="icon.fields.title"
          />
        </div>
      </div>
      <div class="absolute bottom-0 p-2 pb-5">
        <router-link
          :to="`portofolio/${id}`"
          class="flex gap-5 hover:text-blue-500"
        >
          Selengkapnya <ph-arrow-right :size="22" />
        </router-link>
      </div>
    </div>
    <div class="col-span-7 rounded-tr-lg relative">
      <div v-for="(img, i) in image" :key="i">
        <div
          v-for="(item, im) in img"
          :key="im"
          class="
            absolute
            bottom-0
            m-auto
            left-0
            right-0
            h-60
            mt-14
            w-4/5
            bg-cover bg-center
            m-auto
            bg-yellow-100
            rounded-t
          "
          :style="{
            'background-image': 'url(' + item.url + ')',
          }"
        ></div>
      </div>
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
  props: ["title", "description", "category", "image", "icon", "id"],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
