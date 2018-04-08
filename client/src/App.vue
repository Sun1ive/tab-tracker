<template>
  <v-app>
    <app-header />
    <v-content class="pt-5">
      <v-container grid-list-xl fluid>
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'Root',
  components: {
    'app-header': Header,
  },
  data() {
    return {};
  },
};
</script>

<style lang="stylus">

</style>
