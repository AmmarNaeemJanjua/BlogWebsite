<template>
    <v-app>
        <NavBar/>
        <v-main>
            <v-container>
                <v-row>
                    <v-col v-for="(blog, index) in blogs" :key="index" cols="12" sm="6" md="4">
                        <v-card>
                            <v-img :src="blog.image" height="200px"></v-img>

                            <v-card-text>{{ blog.description }}</v-card-text>

                            <v-card-actions>
                                <v-btn @click="deleteBlog(index)" color="error">Delete</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script setup>
    import NavBar from '../components/NavBar.vue'
</script>

<script>

export default {
  data() {
    return {
      blogs: [],
    };
  },
  created() {
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
    deleteBlog(index) {
      this.blogs.splice(index, 1);
    },
  },
};
</script>