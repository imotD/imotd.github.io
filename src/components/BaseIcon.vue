<template>
  <div :class="nav">
    <button
      class="p-2 bg-gray-100 rounded text-gray-300 hover:text-black"
      :title="title"
      @click="$emit('btn')"
      :to="link"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "BaseIcon",
  props: ["nav", "title", "link"],
};
</script>

<style lang="scss" scoped></style>
