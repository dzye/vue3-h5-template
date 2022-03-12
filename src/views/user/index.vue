<template>
  <h1>{{ userStore.name }}</h1>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/store/user';
import { onMounted } from 'vue';
const userStore = useUserStore();
onMounted(() => {
  console.log(1);
});
</script>

<style lang="scss" scoped></style>
