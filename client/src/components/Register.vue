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
            type="text"
          />
          <v-text-field 
            label="password" 
            v-model="password"
            placeholder="password"
            type="password"
          />
          <v-alert 
            v-if="isError"
            color="error"
            icon="warning"
            value="true"
            outline 
          >
            {{ error }}
          </v-alert>
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
    error: null,
  }),
  computed: {
    isError() {
      return this.error
    }
  },
  methods: {
    async onRegister() {
      try {
        const { data } = await AuthenticationService.register({
          email: this.email,
          password: this.password,
        });
        /* eslint-disable no-console */
        console.log(data);
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
};
</script>

<style scoped>

</style>
