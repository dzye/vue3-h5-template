<template>
  <div class="layout-content">
    <router-view v-slot="{ Component }">
      <keep-alive :include="includeRoutes">
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
  <div class="layout-footer">
    <tab-bar :defaultActive="0" :data="tabbars" @change="handleChange" />
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

import TabBar from '@/components/TabBar.vue';
const includeRoutes = reactive(['HOME']);
const tabbars = reactive([
  {
    title: '首页',
    to: {
      name: 'Home',
    },
    icon: 'home',
  },
  {
    title: '关于我',
    to: {
      name: 'User',
    },
    icon: 'my2',
  },
]);
const handleChange = (data: object) => {
  console.log(data);
};
</script>
<style lang="scss" scoped></style>
