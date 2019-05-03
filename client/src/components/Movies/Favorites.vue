<template>
  <v-layout column>
    <v-flex xs6 offset-x3>
     <movies-panel :movies="favorites[page - 1]" :addTofavorite="addTofavorite" :removeFromfavorite="removeFromfavorite"><div class="movie" v-for="result in favorites" :key="result.id" v-scroll-reveal>
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
    </div></movies-panel>

    </v-flex>
    <div>
      <v-pagination v-model="page" :length="favorites.length"/>
    </div>
  </v-layout>
</template>

<script>
import MoviesPanel from './MoviesPanel'

export default {
  components: {
    MoviesPanel
  },
  data () {
    return {
      favorites: [],
      page: 1
    }
  },
  beforeMount () {
    console.log(this.$route)
    if (!this.$route.params.id || this.$route.params.id.length === 0) {
      this.$router.go(-1)
    } else {
      this.favorites = [this.$route.params.id]
    }
  },
  methods: {
    addTofavorite (item) {
      item.favorite = true
      for (var i = 0; i < this.favorites.length; i++) {
        if (this.favorites[i].name === item.name) {
          return alert('Already added!')
        }
      }
      this.favorites.push(item)
    },
    removeFromfavorite (item) {
      item.favorite = false
      this.favorites = this.favorites.filter(fav => {
        if (fav.name !== item.name) {
          return fav
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
