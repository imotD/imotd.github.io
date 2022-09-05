<template>
  <div class="">
    <p class="text-center p-10">
      <span class="font-black text-4xl text-yellow-500">404</span>
      | Page Not Found
    </p>
    <!-- <BaseIcon nav="icons icons--left" title="Back" @btn="back()">
      <ph-arrow-u-up-left :size="35" />
    </BaseIcon> -->
  </div>
</template>

<script>
// import BaseIcon from "@/components/BaseIcon.vue";
export default {
  name: "Footer",
  components: {
    // BaseIcon,
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped></style>
