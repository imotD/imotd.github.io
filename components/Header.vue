<template>
  <div>
    <v-container>
      <v-toolbar color="transparent">
        <div class="style-headers">
          <p class="font-header">{{ name }}</p>
        </div>

        <v-spacer></v-spacer>

        <!-- <v-btn icon>
          <v-icon>mdi-export</v-icon>
        </v-btn> -->
      </v-toolbar>
      <!-- <h1 class="">Project</h1>
      <p class="text--secondary">Kerjaan/Latihan Random (@imotD)</p> -->
    </v-container>
  </div>
</template>

<script setup>
defineProps(["name"]);
</script>
