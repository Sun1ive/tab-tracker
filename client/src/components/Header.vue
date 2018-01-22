<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4" @click="$router.push('/')">
      <span class="logo">TabTracker</span>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn 
        flat 
        dark 
        to="/browse"
      >Browse</v-btn>
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
    data: () => ({
      btns: [
        {
          title: 'Browse',
          to: '/browse',
        },
        {
          title: 'Sing Up',
          to: '/register',
        },
        {
          title: 'Sign In',
          to: '/login',
        },
      ]
    })
  }
</script>

<style lang="stylus" scoped>
.logo
  cursor pointer
  transition .4s ease-in-out
  &:hover
    color #E93334
</style>
