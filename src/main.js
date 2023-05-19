import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import './style.css'
import App from './App.vue'
import Movies from './views/Movies.vue';
import SelectCinema from './views/SelectCinema.vue';
import ChooseSeats from './views/ChooseSeats.vue';

const routes = [
  { path: '/movies', name: 'Movies', component: Movies },
  { path: '/', name: 'Select Cinema', component: SelectCinema },
  { path: '/seats', name: 'Choose Seats', component: ChooseSeats },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes
});

createApp(App)
.use(router)
.mount('#app')
