<template>
  <v-layout>
  <v-flex>
  <panel title="Movies">
    <v-btn @click="navigateTo({name: 'songs-create'})" slot= "action" class="blue-grey lighten-4" light small absolute right middle fab><v-icon>add</v-icon></v-btn>
    <div class="movie" v-for="result in movies" :key="result.id" v-scroll-reveal>
      <v-layout>
        <v-flex xs6>
          <div class = "song-title">
            {{result.name}}
          </div>
        </v-flex>
        <v-flex>
          <img class="album-image" :src="result.artworkUrl100" />
        </v-flex>
        <a :href="result.url" target="_blank"><v-btn class="blue-grey lighten-4" >View on Itunes</v-btn></a>
        <v-btn class="blue-grey lighten-4" @click="addTofavorite(result)" v-if="!result.favorite">Add to Favorites</v-btn>
        <v-btn class="blue-grey lighten-4" @click="removeFromfavorite(result)" v-else>Remove from Favorites</v-btn>
      </v-layout>
    </div>
     </panel>
   </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    movies: Array,
    addTofavorite: Function,
    removeFromfavorite: Function
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.value = value
      }
    }
  }
}
</script>

<style scoped>
.movie {
  padding: 20px;
  height: 250px;
  overflow: hidden;
  border-style: solid;
  border-width: 2px;
  border-color: #FFBF00;
}
a {
  text-decoration: none;
}
.movie {
  height: 200px;
}
</style>
