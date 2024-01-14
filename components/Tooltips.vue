<template>
  <v-fab-transition>
    <q-fab class="tooltip">
      <v-btn
        class="tooltip__btn"
        icon="$vuetify"
        color="pink"
        size="large"
        variant="tonal"
      >
        <v-icon>mdi-rocket-launch-outline</v-icon>
        <!-- TOOLTIP -->
        <span class="tooltip__btn--active">My Resume</span>
      </v-btn>
    </q-fab>
  </v-fab-transition>
</template>

<script setup></script>

<style lang="scss" scoped>
.tooltip {
  position: absolute;
  bottom: 2%;
  right: 1%;

  &__btn {
    &--active {
      visibility: hidden;
      background-color: rgb(117 117 117);
      color: #f5f5f5;
      text-align: center;
      border-radius: 6px;
      padding: 5px 10px;
      position: absolute;

      right: -18px;
      bottom: 48px;
      z-index: 1;
      font-size: 0.7rem;
    }

    &:hover {
      .tooltip__btn--active {
        visibility: visible;
      }
    }
  }
}
</style>
