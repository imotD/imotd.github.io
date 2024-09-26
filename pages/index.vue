<template>
  <div class="d-flex justify-start align-center h-screen bg-app">
    <v-container class="hero">
      <div
        class="d-flex flex-column"
        @mouseover="viewToolips = false"
        @mouseleave="viewToolips = true"
      >
        <p>Welcome to my website</p>

        <div class="my-md-2">
          <h1 class="text-h3 font-weight-bold">Dottom Universe 🔥</h1>
          <p
            class="text-h4 text-medium-emphasis font-weight-bold text-capitalize"
          >
            all activities are here
          </p>
        </div>

        <div>
          <template v-for="menu in menus" :key="menu.title">
            <v-btn
              size="small"
              rounded="xs"
              class="mr-3"
              elevation="0"
              variant="plain"
              :to="menu.to"
            >
              {{ menu.title }}
            </v-btn>
          </template>
        </div>

        <div class="mt-md-2">
          <template v-for="sosmed in socialMedia" :key="sosmed.link">
            <v-btn
              :href="sosmed.link"
              :icon="sosmed.icon"
              color="grey-darken-1"
              class="icon"
              target="_blank"
              size="large"
              variant="text"
            />
          </template>
        </div>
      </div>
    </v-container>

    <Tooltips v-show="viewToolips" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useGlobalStore } from "@/stores/global";
import { storeToRefs } from "pinia";

const { menus, socialMedia } = storeToRefs(useGlobalStore());

const viewToolips = ref(true);
</script>

<style lang="scss" scoped>
@use "~/assets/css/main.scss";
</style>
