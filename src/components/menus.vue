<template>
  <div id="menus">
    <el-row id="menus_header">
      <el-col :span="24" >
        <headers></headers>
      </el-col>
    </el-row>
      <el-row id="menusList">
      <el-col :span="4" id="menuLift" >
    <menuNav class="nav" ></menuNav>

      </el-col>
      <el-col :span="20"id="menuRight" >
      </el-col>
    </el-row>
  </div>
</template>

<script>
import menuNav from "./menuNav";
import headers from "./headers"
export default {
  name: "menus",
  data() {
    return {};
  },
  components: {
    menuNav: menuNav,
    headers:headers
  }
};
</script>

<style lang="scss" >
#menus {
  height: 100%;
  #menus_header{
    height: 10%;
    background: #ddd
  }
  #menusList{
    height: 90%;
    
    #menuLift{
      height: 100%;
      background: blue;
      // width: 300px;
        color: #333;
        transition: width .28s;
        width: 180px !important;
        height: 100%;
        position: fixed;
        top: 100px;
        bottom: 0;
        left: 0;
        z-index: 1001;
        background-color: rgb(48, 65, 86);
    }
    #menuRight{
      height: 100%;
    }
  }

}
</style>