<template>
  <v-container grid-list-xl>
    <v-layout justify-center align-center>
      <v-flex xs10 sm6 class="text-xs-center">
        <Panel />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Panel from '@/components/Panel';

export default {
  components: { Panel },
};
</script>

<style scoped>
</style>
