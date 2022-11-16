<template>
  <v-footer dark padless>
    <v-card flat tile class="black white--text text-center">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0"> </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        Design & Build by <strong>imotD</strong> <br />
        &copy; 2022 - JKT
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
