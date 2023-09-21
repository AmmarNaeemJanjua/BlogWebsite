<template>
    <v-app-bar app color="primary">
        <v-toolbar-title>Blog Website</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text>Log out</v-btn>
    </v-app-bar>
    <v-navigation-drawer permanent expand-on-hover rail>
        <v-list density="compact" nav>
            <v-list-item to="userdata" prepend-icon="mdi-account-multiple" title="Users" value="allUsers"></v-list-item>
            <v-list-item to="admin" prepend-icon="mdi-file-document" title="Blog" value="shared"></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>
  
<script>
export default {
    name: "NavBar",
};
</script>