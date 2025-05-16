import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      meta: {
        title: "登录页"
      },
      component: () => import('@/views/LoginView.vue'),
    },
    {
      path: '/',
      name: '',
      meta: {
        title: "首页"
      },
      component: () => import('@/views/LayoutView.vue'),
      redirect: '/welcome',
      children: [
        {
          path: '/welcome',
          name: 'welcome',
          meta: {
            title: "欢迎页"
          },
          component: () => import('@/views/Welcome.vue'),
        },
        {
          path: '/menu',
          name: 'menu',
          meta: {
            title: "菜单页面"
          },
          component: () => import('@/views/Menu.vue'),
        },
        {
          path: '/user',
          name: 'user',
          meta: {
            title: "系统页面"
          },
          component: () => import('@/views/User.vue'),
        },
        {
          path: '/limit',
          name: 'limit',
          meta: {
            title: "权限页面"
          },
          component: () => import('@/views/Limit.vue'),
        },
      ]
    },
  ],
})

export default router
