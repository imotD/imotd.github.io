<template>
  <div class="app">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Dottom Universe || @imotd",
  meta: [{ name: "description", content: "My amazing site." }],
});
</script>
