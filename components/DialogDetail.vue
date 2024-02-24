<template>
  <div>
    <v-dialog :model-value="model" persistent width="500">
      <v-card>
        <v-window show-arrows="hover">
          <v-window-item v-for="img in data?.img" :key="`card-${img}`">
            <v-card
              elevation="2"
              height="200"
              class="d-flex align-center justify-center ma-2"
            >
              <v-img class="align-end text-white" height="250" :src="img" cover>
              </v-img>
            </v-card>
          </v-window-item>
        </v-window>

        <div class="d-flex justify-space-between align-center">
          <v-card-title class="text-h5"> {{ data?.title }} </v-card-title>
          <v-btn
            :href="data?.url"
            target="_blank"
            rounded="xl"
            variant="text"
            class="mr-4"
          >
            <v-icon
              size="large"
              color="yellow-darken-3"
              icon="mdi-open-in-new"
            ></v-icon>
          </v-btn>
        </div>

        <v-card-text>
          {{ data?.description }}
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="grey-darken-1"
            variant="text"
            @click="$emit('onclickDialog')"
          >
            tutup
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
defineProps(["model", "data"]);
</script>

<style lang="scss" scoped></style>
