<template>
    <v-app>
        <v-card min-width="400">
            <v-card-title class="headline">Sign Up</v-card-title>
            <v-card-text>
                <v-form @submit.prevent="submitForm">
                    <v-text-field v-model="email" label="Email" required :rules="emailRules"></v-text-field>
                    <v-text-field v-model="username" label="Username" required :rules="usernameRules"></v-text-field>
                    <v-text-field v-model="password" label="Password" type="password" required
                        :rules="passwordRules"></v-text-field>
                    <v-text-field v-model="confirmpass" label="Confirm Password" type="password" required
                        :rules="confirmpassRules"></v-text-field>
                    <v-btn type="submit" color="primary" :disabled="!isFormValid">Sign Up</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-app>
</template>
  
<script>
import axios from 'axios';

export default {
    name: "SignupForm",
    data() {
        return {
            email: '',
            username: '',
            password: '',
            confirmpass: '',
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
                v => (v && v.length >= 8) || 'Password must be at least 8 characters',
            ];
        },
        confirmpassRules() {
            return [
                v => !!v || 'Password is required',
                v => (v && v.length >= 8) || 'Password must be at least 8 characters',
                v => (v === this.password) || 'Passwords do not match',
            ]
        },
        usernameRules() {
            return [
                v => !!v || 'Username is required',
            ];
        },
        isFormValid() {
            return this.emailRules.every(rule => rule(this.email) === true) &&
                this.passwordRules.every(rule => rule(this.password) === true) &&
                this.usernameRules.every(rule => rule(this.username) === true) &&
                (this.password) === this.confirmpass;
        },
    },
    methods: {
    async submitForm() {
        // object with the data to send to the API
        const formData = {
            email: this.email,
            password: this.password,
            username: this.username,
        };

        try {
            // Make a POST request to the API
            const response = await axios.post('http://10.0.10.216:80/register', formData);

            // Check the response status code
            if (response.status === 200) {
                console.log('Registration successful:', response.data);
            } else {
                console.error('Registration failed:', response.statusText);
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    },
},
};
</script>

<style scoped>
.v-card{
    margin: auto;
}
</style>