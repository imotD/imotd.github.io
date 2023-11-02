<template>
  <div>
    <v-tooltip top color="pink darken-4 d">
      <template v-slot:activator="{ on, attrs }">
        <v-fab-transition>
          <v-btn color="pink" fab class="hero--button">
            <v-icon>mdi-rocket-launch-outline</v-icon>
          </v-btn>
          <v-btn icon="$vuetify"> Button </v-btn>
        </v-fab-transition>
      </template>
      <span class="text-caption">tolong</span>
    </v-tooltip>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
