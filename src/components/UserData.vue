<template>
        <v-card>
            <v-card-title class="text-center">All Users Data</v-card-title>
            <v-card-text>
                <v-table>
                    <thead>
                        <tr>
                            <th class="text-center">Username</th>
                            <th class="text-center">Email</th>
                            <th class="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(user, index) in users" :key="index">
                            <td>{{ user.username }}</td>
                            <td>{{ user.email }}</td>
                            <td space-between>
                                <v-btn class="ml-1" color="red-darken-4" @click="openDeleteConfirmation(index)">Delete</v-btn>
                            </td>
                        </tr>
                    </tbody>
                </v-table>
            </v-card-text>
        </v-card>

        <v-dialog v-model="deleteConfirmationDialog" max-width="400">
            <v-card>
                <v-card-title class="text-h6">Confirm Deletion</v-card-title>
                <v-card-text>
                    Are you sure you want to delete this user?
                </v-card-text>
                <v-card-actions>
                    <v-btn color="red-darken-4" @click="deleteUser(indexToDelete)">Yes</v-btn>
                    <v-btn @click="closeDeleteConfirmation">Cancel</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
</template>
  
<script>
export default {
    name: "AdminView",
    data() {
        return {
            users: [
                { username: "ghi", email: "Email3"},
                { username: "jkl", email: "Email4"},
                { username: "mno", email: "Email5"},
                { username: "def", email: "Email2"},
                { username: "abc", email: "Email1"},
            ],
            deleteConfirmationDialog: false,
            indexToDelete: null,
        };
    },
    methods: {
        openDeleteConfirmation(index) {
            this.indexToDelete = index;
            this.deleteConfirmationDialog = true;
        },
        closeDeleteConfirmation() {
            this.deleteConfirmationDialog = false;
        },
        deleteUser(index) {
            this.users.splice(index, 1);
            this.closeDeleteConfirmation();
        },
    },
};
</script>

<style scoped>
.v-card{
    margin: auto;
}
</style>