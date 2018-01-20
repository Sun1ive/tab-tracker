<template>
  <v-container grid-list-xl>
    <v-layout justify-center align-center>
      <v-flex xs12 sm6 lg3 class="text-xs-center">
        <v-form @submit.prevent="onRegister">
          <h1>Register form</h1>
          <v-text-field 
            label="email" 
            v-model="email"
            placeholder="email"
          />
          <v-text-field 
            label="password" 
            v-model="password"
            placeholder="password"
          />
          <v-btn type="submit">Register</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService';

export default {
  data: () => ({
    email: '',
    password: '',
  }),
  methods: {
    async onRegister() {
      const { data } = await AuthenticationService.register({
        email: this.email,
        password: this.password,
      });
      console.log(data);
    },
  },
};
</script>

<style scoped>

</style>
