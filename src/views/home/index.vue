<template>
  <h1>{{ userStore.name }}</h1>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'HOME',
});
</script>
<script lang="ts" setup>
import { onMounted } from 'vue';
import { useUserStore } from '@/store/user';
const userStore = useUserStore();
onMounted(() => {
  console.log(0);
});
</script>
<style lang="scss" scoped></style>
