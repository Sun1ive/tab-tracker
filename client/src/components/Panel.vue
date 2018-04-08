<template>
  <v-container grid-list-xl>
    <v-layout justify-center align-center>
      <v-flex xs10 sm6 class="text-xs-center">
        <v-card>
          <v-toolbar flat dense class="cyan" dark>
            <v-toolbar-title>Songs</v-toolbar-title>
          </v-toolbar>
          <slot />
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    title: 'hello world',
  }),
};
</script>

<style scoped>
</style>
