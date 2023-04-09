<template>
  <div class="app-navbar">
    <!-- 左侧菜单区域 -->
    <div class="left-menu">
      <el-icon class="toggle-btn"><Fold /></el-icon>
      <!-- 面包屑 -->
      <BreadCrumb></BreadCrumb>
    </div>
    <!-- 右侧菜单 -->
    <div class="right-menu">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img class="user-avatar" src="/src/assets/logo.svg" />
          <el-icon class="el-icon-caret-bottom"><CaretBottom /></el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <a href="https://github.com/visionwuwu" target="_blank">
              <el-dropdown-item>我的Github</el-dropdown-item>
            </a>
            <el-dropdown-item divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Navbar',
  setup() {
    // const store = useAppStore()
    // const router = useRouter()
    // const route = useRoute()
    // const handleLogout = async () => {
    //   const res = await ElMessageBox({
    //     type: 'warning',
    //     title: '提示',
    //     message: '您，确认要退出该系统吗？',
    //   })
    //   if (res === 'confirm') {
    //     store.dispatch(UserActionTypes.ACTION_LOGIN_OUT).then(() => {
    //       router.push(`/login?redirect=${route.path}`)
    //     })
    //   }
    // }
    // return {
    //   handleLogout
    // }
  }
})
</script>

<style lang="scss" scoped>
.left-menu {
  display: flex;
  align-items: center;
  line-height: 50px;
  .toggle-btn {
    font-size: 20px !important;
    margin-top: 1px;
    color: gray !important;
    cursor: pointer;
  }
}
.right-menu {
  .avatar-container {
    margin-right: 30px;
    .avatar-wrapper {
      margin-top: 5px;
      position: relative;
      .user-avatar {
        cursor: pointer;
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }
      .el-icon-caret-bottom {
        position: absolute;
        cursor: pointer;
        right: -20px;
        top: 25px;
      }
    }
  }
}
</style>
