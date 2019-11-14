<template>
  <div class="hello">
    <h1 @click ="change">{{ msg }}</h1>
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

