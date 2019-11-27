<template >
  <div id="myLove">
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <el-button v-on:click="backHistory">返回上一层</el-button>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          <el-button v-on:click="NextFloor">跳转下一层</el-button>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <div class="img1">
          <img src="../assets/love6.jpg" alt="">
        </div>
      </el-col>
      <el-col :span="8">
        <div class="img2">
          <el-carousel height="500px" interval="2000" autoplay>
            <el-carousel-item v-for="item in list" :key="item.img">
              <img class="imgs" :src="item.img" alt />
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="img3">
          <img src="../assets/love7.jpg" alt="">
          
        </div>
      </el-col>
    </el-row>
  </div>
  <!-- <div class="myLove">
  <span class="demonstration"></span>
  <el-carousel trigger="click" height="150px">
    <el-collapse-item v-for="item in 4" :key="item">
      <h3 class="small"> {{item}}</h3>
    </el-collapse-item>
  </el-carousel>
  </div>-->
</template>
 
 <script>
export default {
  name: "myLove",
  data() {
    return {
      msg: "我是myLove",
      list: [
        { img: require("../assets/love1.jpg") },
        { img: require("../assets/love2.jpg") },
        { img: require("../assets/love3.jpg") },
        { img: require("../assets/love4.jpg") }
      ]
    };
  },
  methods: {
    backHistory() {
      this.$router.go(-1); //返回上一层
    },
    NextFloor() {
      this.$router.push({
        path: "./menus"
      });
    }
  }
};
</script>

 <style lang="scss">
#myLove {
  background: rgb(210, 212, 210);
  .bg-purple {
    background: #ddd;
  }
  .bg-purple-light {
    background: #ddd;
    text-align: right;
  }
  .img1{
  img{
   width:100%;
	height:500px;
  }
  }
  .img3{
    img{
    width:100%;
	height:500px;

    }
  }
}

.block {
  width: 100%;
  height: 100%;
  // border: 1px solid#8896b3;
  img {
    width: 100%;
    height: 100%;
  }
}
.el-carousel__item img {
  width: 100%;
  height: 100%;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>

 