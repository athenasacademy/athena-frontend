// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/LandingPage.vue'),
      },
      {
        path: '/subscription',
        name: 'Inscricao',
        component: () => import('@/views/Subscription.vue'),
      },
      {
        path: '/registration',
        name: 'Matricula',
        component: () => import('@/views/Registration.vue'),
      },
      {
        path: '/classroom',
        name: 'Curso',
        component: () => import('@/views/Classroom.vue'),
      },
      {
        path: '/payment',
        name: 'Pagamentos',
        component: () => import('@/views/Payment.vue'),
      },
      {
        path: '/certification',
        name: 'Certificados',
        component: () => import('@/views/Certification.vue'),
      },
      {
        path: '/sobre',
        name: 'Sobre',
        component: () => import('@/views/About.vue'),
      },
      {
        path: '/recursos',
        name: 'Recursos',
        component: () => import('@/views/Resources.vue'),
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login.vue'),
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
