<template>
  <div class="hello">
    <div class="">
      <div>
        <h2 class="">
          <span class="text-indigo-600">{{ msg }}</span>
        </h2>
        <p class="">Lorem ipsum dolor sit amet ...</p>
        <button class="bg-yellow-500 p-2 rounded-lg">
          <p class="text-white hover:text-red-500">Hover me</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
