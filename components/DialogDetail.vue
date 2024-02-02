<template>
  <div>
    <v-dialog :model-value="model" persistent width="500">
      <v-card>
        <v-img class="align-end text-white" height="200" :src="data.img" cover>
          <v-card-title>{{ data.client }}</v-card-title>
        </v-img>

        <v-card-title class="text-h5"> {{ data.title }} </v-card-title>
        <v-card-text>
          {{ data.description }}
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green-darken-1"
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
