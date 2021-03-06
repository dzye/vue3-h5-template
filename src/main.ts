import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import nutuiComponents from './plugins/nutui';
const app = createApp(App);

nutuiComponents.forEach((item) => {
  app.use(item);
});
app.use(router);
app.use(store);
app.mount('#app');
