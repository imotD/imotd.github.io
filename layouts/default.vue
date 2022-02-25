<template>
  <v-app class="app">
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
  },
};
</script>

