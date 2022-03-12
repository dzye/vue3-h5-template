<template>
  <nut-input v-model="formData.username" label="账号" />
  <nut-input v-model="formData.password" label="密码" />
  <nut-button block type="primary" @click="Login">登录</nut-button>
</template>

<script lang="ts" setup>
import { login } from '@/api/user';
import router from '@/router';
import { reactive } from 'vue';
interface IformData {
  username: string;
  password: string;
}
const formData = reactive<IformData>({
  username: '',
  password: '',
});
const Login = () => {
  router.push({ name: 'Home' });
  // login(formData).then((res) => {
  //   console.log(res);
  // });
};
</script>

<style lang="scss" scoped></style>
