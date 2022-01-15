<template>
  <v-app dark class="app">
    <div v-if="$nuxt.isOffline">You are offline</div>
    <div v-else>
      <Nuxt />
    </div>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.app {
  background-color: #111827 !important;
}
</style>
