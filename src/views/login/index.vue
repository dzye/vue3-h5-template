<template>
  <h1 @click="Login">1</h1>
</template>

<script lang="ts" setup>
import { login } from '@/api/user';
const Login = () => {
  login({}).then((res) => {
    console.log(res);
  });
};
</script>

<style scoped></style>
