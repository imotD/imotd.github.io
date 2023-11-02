<template>
  <div>
    <Header />
    <v-container>
      <p>Project</p>
      <v-row>
        <v-col cols="12" sm="6">
          <v-card class="project--card" tile flat>
            <v-container fluid>
              <v-row dense>
                <v-col cols="12" md="8" class="pa-0">
                  <div class="project--image__wrapper">
                    <!-- <v-img
                      lazy-src="require('/static/img-lazy.jpg')"
                      src="data.fields.img"
                      class="project--image__picture"
                      height="300px"
                      width="100%"
                      alt="image"
                    >
                      <template v-slot:placeholder>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <v-progress-circular
                            indeterminate
                            color="grey lighten-5"
                          ></v-progress-circular>
                        </v-row>
                      </template>
                    </v-img> -->
                  </div>
                </v-col>
                <v-col cols="12" md="4" class="pa-4 my-1">
                  <div>
                    <span
                      class="project--title__name ls--m text--disabled text-uppercase"
                    >
                      Client
                    </span>
                    <p class="project--title mt-1 text-capitalize">
                      data.fields.client
                    </p>
                    <span
                      class="ls--m project--title__name text--disabled text-uppercase"
                    >
                      Project
                    </span>
                    <p class="project--title mt-1 text-capitalize">
                      data.fields.title
                    </p>
                  </div>
                  <div>
                    <!-- <v-list-item class="pa-0 text--disabled">
                      <v-list-item-content>
                        <v-list-item-subtitle
                          v-for="list in data.fields.category"
                          :key="list"
                          class="text-caption text-capitalize"
                        >
                          {{ list }}
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item> -->
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
