<template>
  <div class="hello">
    <h1 @click ="change">{{ msg }}</h1>
  <div id="Imgs">
    <div id="Imgs-name">
      <h1>邵帅</h1>
    </div>
    <div id="Imgss">

    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '欢迎来到myLove'
    }
  },
  methods:{
    change(){
      this.$router.push({
        path:'./myLove'
      })
    }
  }
  
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss">
  #Imgs{
    width: 1000px;
    height: 1000px;
    background: url(../assets/timg.jpg);
    position: relative;
    #Imgs-name{
      width: 227px;
      height: 173px;
      background: #fff;
      position: absolute;
      top:214px;
      left:120px;
      h1{
        font-size: 95px;
        text-align: center;
        // line-height: 97px

      }
    }

  }
</style>