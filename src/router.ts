import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/home/index.vue';
// import Community from './views/community/index.vue';
import My from './views/my/index.vue';
import Chat from './views/chat/index.vue';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    // {
    //   path: '/community',
    //   name: 'community',
    //   component: Community,
    // },
    {
      path: '/my',
      name: 'my',
      component: My,
    },
  ],
});
