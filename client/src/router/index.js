import Vue from 'vue'
import Router from 'vue-router'
import Movies from '@/components/Movies/Index'
import Favorites from '@/components/Movies/Favorites'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/movies',
      name: 'movies',
      component: Movies
    },
    {
      path: '*',
      redirect: 'movies'
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: Favorites
    }
  ]
})
