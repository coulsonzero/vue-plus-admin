<template>
  <div class="common-layout">
    <el-container>
      <!-- sidebar -->
      <el-aside class="sidebar" :width="isCollapse ? '64px' : '200px'" >
        <!-- menu -->
        <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="1"
        text-color="#fff"
        router
        :collapse="isCollapse"
       >
          <el-sub-menu>
          <template #title>
              <el-icon><location /></el-icon>
              <span>系统管理</span>
          </template>
          <el-menu-item index="welcome">欢迎页</el-menu-item>
          <el-menu-item index="menu">菜单管理</el-menu-item>
          <el-menu-item index="user">用户管理</el-menu-item>
          </el-sub-menu>
          <el-menu-item index="limit">
              <el-icon><CollectionTag /></el-icon>
              <span>权限管理</span>
          </el-menu-item>
      </el-menu>
      </el-aside>
      <el-container>
        <!-- header -->
        <el-header>
          <div class="header">
            <div class="header-left">
              <el-icon :size="26" @click="handleCollapse" style="cursor: pointer;margin-right: 10px">
                <Expand v-if="isCollapse" /><Fold v-else />
              </el-icon>
              <Bread />
            </div>
            <Avatar />
          </div>
        </el-header>
        <!-- main -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Bread from "@/components/Bread.vue"
import Avatar from "@/components/Avatar.vue"
import { ref } from 'vue'
let isCollapse = ref(false)

function handleCollapse() {
  isCollapse.value = !isCollapse.value
}
</script>

<style scoped>
.sidebar {
  background-color: #545c64;
  height: 100vh;
}
.header {
  display: flex;
  justify-content: space-between;

}
.header-left {
  display: flex;
  align-items: center;
}
</style>