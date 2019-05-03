<template>
  <v-layout column>
    <v-flex xs6 offset-x3>
    <v-btn class="blue-grey lighten-4" @click="navigateTo({name: 'favorites'})">My Favorites</v-btn>
    <v-layout column>
      <panel title="Search">
        <v-text-field label="Search by movie title" v-model="searchString"></v-text-field>
      </panel>
    </v-layout>

     <movies-panel :movies="results[page - 1]" :addTofavorite="addTofavorite" :removeFromfavorite="removeFromfavorite"/>

    </v-flex>
    <div>
      <v-pagination v-model="page" :length="results.length"/>
    </div>
  </v-layout>
</template>

<script>
import movies from '@/assets/movies.json'
import MoviesPanel from './MoviesPanel'
import Fuse from 'fuse.js'

export default {
  components: {
    MoviesPanel
  },
  data () {
    return {
      results: [],
      page: 1,
      searchString: '',
      favorites: []
    }
  },
  beforeMount () {
    var i
    var temparray = []
    var chunk = 5

    for (i = 0; i < movies.feed.results.length; i += chunk) {
      temparray = movies.feed.results.slice(i, i + chunk)
      temparray.map(item => {
        item.favorite = false
      })
      this.results.push(temparray)
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push({name: route.name, params: { id: this.favorites }})
    },
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
  },
  watch: {
    searchString (value) {
      if (value) {
        var options = {
          shouldSort: true,
          threshold: 0,
          location: 0,
          distance: 100,
          maxPatternLength: 32,
          minMatchCharLength: 1,
          keys: [
            'name'
          ]
        }
        var fuse = new Fuse(movies.feed.results, options)
        var result = fuse.search(value)
        this.results = [result]
      } else {
        this.results = []
        var i
        var temparray = []
        var chunk = 5
        for (i = 0; i < movies.feed.results.length; i += chunk) {
          temparray = movies.feed.results.slice(i, i + chunk)
          this.results.push(temparray)
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
