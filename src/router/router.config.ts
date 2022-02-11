/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/',
    component: () => import('@/views/layouts/index.vue'),
    redirect: '/home',
    meta: {
      title: '首页',
      keepAlive: false,
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/index.vue'),
        meta: { title: '首页', keepAlive: true },
      },
      {
        path: '/user',
        component: () => import('@/views/user/index.vue'),
        name: 'User',
        meta: {
          title: '个人中心',
          keepAlive: false,
        },
      },
    ],
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'Login',
    meta: {
      title: '登录页',
      keepAlive: false,
    },
  },
];
