<template>
  <el-row class="tac">
    <el-col :span="24">
      <!-- default-active   当前激活菜单的index，下标 -->
      <!-- @open  当前指定的sub-menu  index需要展开的sub-menu的Index -->
      <!-- @clode 收起指定的sub-menu index需要收起的sub-menu的index -->
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
        <template>
          <template v-for="(item, index) in menu">
            <router-link :to="item.path">
              <el-menu-item :index="item.path">
              <template slot="title">
                <i v-if="item.meta.icon" :class="item.meta.icon" ></i>
                {{item.title}}
              </template>
              </el-menu-item>
            </router-link>
          </template>
        </template>
      </el-menu>
    </el-col>
  </el-row>
  <!-- <router-view></router-view> -->
</template>

<script>
import { personMenu } from "@/router";
export default {
  name: "menuNav",
  data() {
    return {
      menu: ""
    };
  },
  mounted() {
    console.log(personMenu);
    this.menu = personMenu[0].children;
    console.log(this.menu);
  },
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
.tac {
  width: 100%;
  height: 100%;
  background-color: rgb(84, 92, 100);
}
</style>