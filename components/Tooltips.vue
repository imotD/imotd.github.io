<template>
  <v-fab-transition>
    <q-fab class="tooltip">
      <v-tooltip location="top">
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props" color="pink" size="large">
            <v-icon>mdi-rocket-launch-outline</v-icon>
          </v-btn>
        </template>
        <span>My Resume</span>
      </v-tooltip>
    </q-fab>
  </v-fab-transition>
</template>

<script setup></script>

<style lang="scss" scoped>
.tooltip {
  position: absolute;
  bottom: 2%;
  right: 2%;
}
</style>
