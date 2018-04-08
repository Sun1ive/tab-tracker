<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4" @click="$router.push('/')">
      <span class="logo">TabTracker</span>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn to="songs" flat>Browse</v-btn>
    </v-toolbar-items>
    <v-spacer />
    <v-toolbar-items>
      <v-btn
        v-for="btn in btns"
        :key="btn.title" 
        flat
        dark
        :to="btn.to"
        v-text="btn.title"
      />
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  computed: {
    btns() {
      if (this.$store.state.isAuth) {
        return [
          {
            title: 'Logout',
            to: '/logout',
          },
        ];
      }
      return [
        {
          title: 'Sing Up',
          to: '/register',
        },
        {
          title: 'Sign In',
          to: '/login',
        },
      ];
    },
  },
};
</script>

<style lang="stylus" scoped>

</style>
