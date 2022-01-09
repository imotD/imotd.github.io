<template>
  <v-container>
    <v-row>
      <v-col v-for="(data, index) in datas" :key="index" cols="6">
        <v-card class="project" tile flat>
          <v-container fluid>
            <v-row dense>
              <v-col cols="8">
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                  height="300px"
                ></v-img>
              </v-col>
              <v-col cols="4" class="pa-4 my-1">
                <div>
                  <span class="text-caption text--secondary">Client</span>
                  <p class="project--title mt-1">{{ data.client }}</p>
                  <span class="text-caption text--secondary">Project</span>
                  <p class="project--title mt-1">{{ data.title }}</p>
                </div>
                <div>
                  <v-list-item class="pa-0 text--secondary">
                    <v-list-item-content>
                      <v-list-item-title
                        v-for="list in data.category"
                        :key="list"
                        class="text-caption"
                      >
                        {{ list }}
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ProjectPage",
  data() {
    return {
      datas: ""
    };
  },
  created() {
    this.datas = this.$store.state.projects;
  }
};
</script>

<style lang="scss" scoped>
.project {
  background: #0a0f19 !important;

  &--title {
    font-size: 0.9rem;
  }
}
</style>
