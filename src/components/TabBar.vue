<template>
  <nut-tabbar :bottom="true" v-model:visible="active" @tab-switch="tabSwitch">
    <nut-tabbar-item
      v-for="(item, index) in props.data"
      :key="index"
      :tab-title="item.title"
      :to="item.to"
      :icon="item.icon"
    >
    </nut-tabbar-item>
  </nut-tabbar>
</template>
<script lang="ts" setup>
import { ref, defineProps } from 'vue';
interface DataItem {
  title?: string;
  to?: { name: string };
  icon?: string;
}
const props = defineProps<{ defaultActive: number; data: DataItem[] }>();
let active = ref<number>(props.defaultActive);
const emits = defineEmits<{
  (e: 'change', data: { item: DataItem; index: number }): void;
}>();
const tabSwitch = (item: DataItem, index: number) => {
  emits('change', { item, index });
};
</script>

<style lang="scss" scoped></style>
