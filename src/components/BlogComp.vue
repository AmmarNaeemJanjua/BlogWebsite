<template>
  <v-container>
    <v-btn @click="openCreateBlogDialog" color="success">Create Blog</v-btn>
    <v-row>
      <v-col v-for="(blog, index) in blogs" :key="index" cols="12" sm="6" md="4">
        <v-card>
          <!-- Blog Image -->
          <v-img :src="blog.image" height="200px"></v-img>
          
          <!-- Blog Description -->
          <v-card-text>{{ blog.description }}</v-card-text>
          
          <!-- Edit and Delete Buttons -->
          <v-card-actions>
            <v-btn @click="editBlog(index)" color="primary">Edit</v-btn>
            <v-btn @click="deleteBlog(index)" color="error">Delete</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <!-- Create Blog Dialog -->
  <v-dialog v-model="createBlogDialog" max-width="500px">
    <v-card>
      <v-card-title>Create a Blog</v-card-title>
      <v-card-text>
        <v-file-input v-model="selectedImage" accept="image/*"></v-file-input>
        <v-textarea v-model="newBlogDescription" label="Blog Description"></v-textarea>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="createBlog">Post</v-btn>
        <v-btn color="error" @click="closeCreateBlogDialog">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      blogs: [],
      createBlogDialog: false,
      selectedImage: null,
      newBlogDescription: "",
    };
  },
  created() {
    // Fetch data from the API
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        // Map the API data to the blogs array
        this.blogs = data.products.map((product) => ({
          image: product.thumbnail,
          description: product.description,
        }));
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  },
  methods: {
    openCreateBlogDialog() {
      this.createBlogDialog = true;
    },
    closeCreateBlogDialog() {
      this.createBlogDialog = false;
      this.selectedImage = null;
      this.newBlogDescription = "";
    },
    createBlog() {
      // Validate inputs (e.g., ensure an image is selected and description is not empty)
      if (!this.selectedImage || this.newBlogDescription === "") {
        // Handle validation error, display a message to the user.
        return;
      }

      // Create a new blog object
      const newBlog = {
        image: URL.createObjectURL(this.selectedImage),
        description: this.newBlogDescription,
      };

      // Add the new blog to the list
      this.blogs.push(newBlog);

      // Close the dialog
      this.closeCreateBlogDialog();
    },
    editBlog(index) {
      // Implement logic to open a dialog or navigate to a blog edit page for the specified index.
    },
    deleteBlog(index) {
      this.blogs.splice(index, 1);
    },
  },
};
</script>
