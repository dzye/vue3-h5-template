import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import nutuiComponents from './plugins/nutui';
// import "@nutui/nutui/dist/styles/themes/default.scss";

const app = createApp(App);

nutuiComponents.forEach((item) => {
  app.use(item);
});
app.use(router);
app.mount('#app');
