import { createRouter, createWebHistory } from 'vue-router';
import MainPage from './views/MainPage.vue';
import RoutesPage from './views/RoutesPage.vue';
import PersonalPage from './views/PersonalPage.vue';

const routes = [
  { path: '/', component: MainPage },
  { path: '/routes', component: RoutesPage },
  { path: '/account', component: PersonalPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;