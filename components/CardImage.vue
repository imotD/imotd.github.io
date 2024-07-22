<template>
  <v-card
    class="project--card cursor-pointer"
    tile
    flat
    @click="$emit('onDialog', item?.fields?.id)"
  >
    <v-container fluid>
      <v-row dense>
        <v-col cols="12" md="8" class="pa-0">
          <div class="project--card__image">
            <v-img
              :src="item?.fields?.img[0]"
              lazy-src="@/assets/img/img-lazy.jpg "
              class="project--card__image--scale"
              alt="image"
              height="250px"
              cover
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </div>
        </v-col>

        <v-col
          cols="12"
          md="4"
          class="d-flex flex-column justify-space-around pa-2"
        >
          <div>
            <div class="mb-2">
              <span class="text-caption text-uppercase"> Client </span>
              <p class="text-capitalize">
                {{ item?.fields?.client }}
              </p>
            </div>
            <div>
              <span class="text-caption text-uppercase"> Project </span>
              <p class="text-capitalize">
                {{ item?.fields?.title }}
              </p>
            </div>
          </div>

          <div>
            <v-list-item class="pa-0 text--disabled">
              <v-list-item-content>
                <v-list-item-subtitle
                  v-for="list in item?.fields?.skills"
                  :key="list"
                  class="text-caption text-capitalize"
                >
                  {{ list }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script setup>
defineProps(["item"]);
</script>
