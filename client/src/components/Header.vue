<template>
  <v-toolbar fixed class="blue-grey darken-2">
  <v-toolbar-title class="mr4">
    <router-link class="home" tag="span" :to="{name:'movies'}">MovieWatch</router-link>
      </v-toolbar-title>

  <v-spacer></v-spacer>
  <v-toolbar-items>

  </v-toolbar-items>
  </v-toolbar>
</template>
<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
.home{
  cursor: pointer;
}
.home:hover{
  color: #E9
}
</style>
