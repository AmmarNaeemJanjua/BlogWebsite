<template>
  <v-app>
      <v-card min-width="400">
          <v-card-title class="headline">Login</v-card-title>
          <v-card-text>
              <v-form @submit.prevent="submitForm">
                  <v-text-field v-model="email" label="Email" required :rules="emailRules"></v-text-field>
                  <v-text-field v-model="password" label="Password" type="password" required :rules="passwordRules"></v-text-field>
                  <v-btn type="submit" color="primary" :disabled="!isFormValid">Login</v-btn>
              </v-form>
          </v-card-text>
      </v-card>
  </v-app>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
      return {
          email: '',
          password: '',
      };
  },
  computed: {
      emailRules() {
          return [
              v => !!v || 'Email is required',
              v => /.+@.+/.test(v) || 'Email must be valid',
          ];
      },
      passwordRules() {
          return [
              v => !!v || 'Password is required',
          ];
      },
      isFormValid() {
          return this.emailRules.every(rule => rule(this.email) === true) &&
              this.passwordRules.every(rule => rule(this.password) === true);
      },
  },
  methods: {
      submitForm() {
          const formData = {
              email: this.email,
              password: this.password,
          };
          console.log(formData);
      },
  },
};
</script>

<style scoped>
.v-card{
    margin: auto;
}
</style>