<template>
  <div>
    <v-dialog :model-value="model" persistent width="500">
      <v-card v-if="data" class="pa-5">
        <v-window show-arrows="hover">
          <v-window-item v-for="img in data?.img" :key="`card-${img}`">
            <v-card
              elevation="2"
              height="200"
              class="d-flex align-center justify-center ma-2"
            >
              <v-img
                class="align-end text-white"
                lazy-src="@/assets/img/img-lazy.jpg "
                height="250"
                :src="img"
                cover
              >
                <template v-slot:placeholder>
                  <div class="d-flex align-center justify-center fill-height">
                    <v-progress-circular
                      color="grey-lighten-4"
                      indeterminate
                    ></v-progress-circular>
                  </div>
                </template>
              </v-img>
            </v-card>
          </v-window-item>
        </v-window>

        <div class="d-flex justify-space-between align-center mx-2">
          <div>
            <v-card-text class="text-h6">
              <p class="text-caption text-disabled">Project:</p>
              {{ data?.title }}
            </v-card-text>
          </div>

          <v-btn
            :href="data?.url"
            target="_blank"
            rounded="xl"
            variant="text"
            class="mr-0"
          >
            <v-icon
              size="large"
              color="yellow-darken-3"
              icon="mdi-open-in-new"
            ></v-icon>
          </v-btn>
        </div>

        <v-card-text>
          <p class="mb-1 text-subtitle-2 text-disabled">Client:</p>
          <span>{{ data?.client }}</span>

          <p class="mt-3 mb-1 text-subtitle-2 text-disabled">Description:</p>
          {{ data?.description }}

          <p class="mt-3 text-subtitle-2 text-disabled">Tech Stack :</p>
          <v-list density>
            <v-list-item
              v-for="list in data?.skills"
              :key="list"
              class="pa-0 my-0 text-capitalize"
            >
              {{ list }}
            </v-list-item>
          </v-list>
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
