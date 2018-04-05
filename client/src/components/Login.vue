<template>
  <v-container grid-list-xl>
    <v-layout justify-center align-center>
      <v-flex xs10 sm6 class="text-xs-center">
        <v-card>
          <v-toolbar flat dense class="cyan" dark>
            <v-toolbar-title>Log in</v-toolbar-title>
          </v-toolbar>
          <v-flex xs10 offset-xs1>
            <v-form @submit.prevent="onLogin">
              <v-alert 
                v-if="isError"
                color="error"
                icon="warning"
                value="true"
                outline 
              >
                {{ error }}
              </v-alert>
              <v-text-field 
                label="E-mail" 
                v-model="email"
                type="text"
              />
              <v-text-field 
                label="Password" 
                v-model="password"
                type="password"
              />
              <v-btn color="cyan" dark type="submit">Register</v-btn>
            </v-form>
          </v-flex>
        </v-card>
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
      return this.error;
    },
  },
  methods: {
    async onLogin() {
      try {
        const { data } = await AuthenticationService.login({
          email: this.email,
          password: this.password,
        });
        this.$store.dispatch('setToken', data.token);
        this.$store.dispatch('setUser', data.user);
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
};
</script>

<style scoped>
</style>
