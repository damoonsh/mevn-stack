import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TaskEdit from '../views/tasks/TaskEdit.vue';
import TasksAll from '../views/tasks/TasksAll.vue';
import TasksCreate from '../views/tasks/TasksCreate.vue';
import Login from '../views/authentication/Login.vue';
import Register from '../views/authentication/Register.vue';

Vue.use(VueRouter)

const isLoggedIn = false;

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/tasks',
    name: 'tasks-all',
    beforeEnter: (to, from, next) => {
      if (isLoggedIn) {
        next();
      } else {
        next('/login');
      }
    },
    component: TasksAll
  },
  {
    path: '/tasks/new',
    name: 'task-create',
    beforeEnter: (to, from, next) => {
      if (isLoggedIn) {
        next();
      } else {
        next('/login');
      }
    },
    component: TasksCreate
  },
  {
    path: '/tasks/:id',
    name: 'task-edit',
    component: TaskEdit
  },
  {
    path: '/login',
    name: 'login',
    beforeEnter: (to, from, next) => {
      if (!isLoggedIn) {
        next();
      } else {
        next('/');
      }
    },
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    beforeEnter: (to, from, next) => {
      if (!isLoggedIn) {
        next();
      } else {
        next('/');
      }
    },
    component: Register
  },
  {
    path: "*",
    redirect: '/'
  }
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'active',
  mode: 'history' // it gets rid of the # in the url
})



export default router
