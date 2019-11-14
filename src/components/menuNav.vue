<template>
  <el-row class="tac">
    <el-col :span="24">
<el-menu
        :default-active="this.$route.path"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
      >
        <h3>后台系统后台</h3>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-s-custom"></i>
            <span>用户分析</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/menuNav/index1">数据统计</el-menu-item>
            <el-menu-item index="/menuNav/index2">用户管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-upload"></i>
            <span>资料上传</span>
          </template>
        </el-submenu>
 
      </el-menu>
    </el-col>
  </el-row>
  <!-- <router-view></router-view> -->
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style lang="scss" scoped>

.tac{
    width :300px;
    height: 100%;
    background-color: rgb(84, 92, 100)
}
</style>