<template>
  <div class="login-container">
    <el-form class="login-from" ref="formRef" :model="form" :rules="rules">
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>
      <el-form-item prop="username">
        <el-icon class="svg-container" :size="20"><edit /></el-icon>
        <el-input
          v-model="form.username"
          clearable
          style="width: 200px">
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-icon class="svg-container" :size="20"><edit /></el-icon>
        <el-input
          v-model="form.password"
          type="password"
          show-password
          clearable
          style="width: 200px">
        </el-input>
      </el-form-item>
      <el-button type="primary" @click="handleLogin">登录</el-button>
    </el-form>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Edit } from '@element-plus/icons-vue'
import { login } from '@/api/login'
import router from '@/router'


const form = ref({
  username: '',
  password: ''
})
const rules = ref({
  username: [
    {
      required: true,
      message: 'Please input Activity name',
      trigger: 'blur' },
  ],
  password: [
    {
      required: true,
      message: 'Please input Activity password',
      trigger: 'blur'
    }
  ]
})


const formRef = ref(null)
const handleLogin = () => {
  formRef.value.validate(async (valid) => {
    if (valid) {
      // console.log('submit!', form.value)
      const res = await login(form.value)
      console.log(res)
      // localStorage.setItem('token', '123')
      // router.replace('/')
    } else {
      console.log('error submit!')
    }
  })
}
</script>

<style lang="scss" scoped>
.login-container {
  width: 100%;
  min-height: 100%;
  background-color: #2d3a4b;
  overflow: hidden;
}
.login-form {
  position: relative;
  width: 520px;
  max-width: 100%;
  padding: 160px 35px 0;
  margin: 0 auto;
  overflow: hidden;
}
.svg-container {
  padding: 6px 5px 6px 15px;
}

.title-container {
  position: relative;
  .title {
    font-size: 26px;
    color: #eee;
    margin: 0px auto 40px auto;
    text-align: center;
    font-weight: bold;
  }

}
</style>