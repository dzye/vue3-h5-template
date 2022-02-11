import { createRouter, createWebHistory } from 'vue-router';
import { constantRouterMap } from './router.config';

const router = createRouter({
  history: createWebHistory(),
  routes: constantRouterMap,
});

// router.beforeEach((to, from, next) => {
//   if (to.name !== 'Login') {
//     // 判断该路由是否需要登录权限
//     if (sessionStorage.getItem('token')) {
//       // 判断当前的token是否存在
//       next();
//     } else {
//       next({
//         path: '/login',
//         query: { redirect: to.fullPath }, // 将跳转的路由path作为参数，登录成功后跳转到该路由
//       });
//     }
//   } else {
//     next();
//   }
// });

export default router;
