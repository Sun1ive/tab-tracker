<template>
  <v-container grid-list-xl>
    <v-layout justify-center align-center>
      <v-flex xs10 sm6 class="text-xs-center">
        <v-card>
          <v-toolbar flat dense class="cyan" dark>
            <v-toolbar-title>Register</v-toolbar-title>
          </v-toolbar>
          <v-flex xs10 offset-xs1>
            <v-form @submit.prevent="onRegister">
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
    async onRegister() {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password,
        });
        if (this.error) {
          this.error = null;
        }
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
};
</script>

<style scoped>
</style>
