import Vue from 'vue'
import Router from 'vue-router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
const Index = r => require.ensure([], () => r(require('@/pages/index')), 'index')
const Test = r => require.ensure([], () => r(require('@/pages/test')), 'test')
const News = r => require.ensure([], () => r(require('@/pages/news')), 'news')
const NewsDetali = r => require.ensure([], () => r(require('@/pages/newsDetali')), 'newsDetali')



Vue.use(VueAwesomeSwiper)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/newsDetali/:id',
      name: 'newsDetali',
      component: NewsDetali
    },
  ]
})
