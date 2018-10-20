import Vue from 'vue'
import Router from 'vue-router'
import benTing from '../components/benTing'
import discover from '../components/discover'
import tingBa from '../components/tingBa'
import video from '../components/video'
import mine from '../components/mine'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'benTing',
    component: benTing
  }, {
    path: '/discover',
    name: 'discover',
    component: discover
  }, {
    path: '/tingBa',
    name: 'tingBa',
    component: tingBa
  }, {
    path: '/video',
    name: 'video',
    component: video
  }, {
    path: '/mine',
    name: 'mine',
    component: mine
  }]
})
