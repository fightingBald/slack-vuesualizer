<!-- pages/user-id-input.vue -->
<template>
  <div class="user-id-input">
    <h2>欢迎！</h2>
    <p>请输入您的用户 ID：</p>
    <input v-model="userId" type="text" placeholder="用户 ID" />
    <button @click="submitUserId">确认</button>
  </div>
</template>

<script setup>
// 引入必要的库
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const userId = ref('') // 用于存储用户输入的 ID
const router = useRouter()

const submitUserId = () => {
  if (userId.value) {
    // 将用户 ID 存储在 localStorage 中，以便后续使用
    localStorage.setItem('userId', userId.value)
    // 重定向到主页
    router.push('/')
  } else {
    alert('请输入有效的用户 ID')
  }
}
</script>

<style scoped>
/* 添加一些简单的样式 */
.user-id-input {
  max-width: 400px;
  margin: 50px auto;
  text-align: center;
}
</style>
