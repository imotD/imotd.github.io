<template>
  <div class="empty">
    <v-container>
      <v-img
        class="ma-auto"
        lazy-src="../static/img-lazy.jpg"
        max-width="400"
        src="http://api.elements.buildwithangga.com/storage/files/2/assets/Empty%20State/EmptyState4/Empty-4-4.png"
      ></v-img>
      <div class="text-center">
        <h1 class="ft">Opss! Something Missing</h1>
        <p class="">
          The page you’re looking for isn’t found. We<br />
          suggest you Back to Homepage.
        </p>
        <v-btn to="/" small> Back </v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "EmpetyPage404",
};
</script>

<style lang="scss" scoped>
</style>