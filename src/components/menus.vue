<template>
<div id="menus">
          <menuNav class="nav" style="width:300px"></menuNav>

</div>
  
</template>

<script>
import menuNav from "./menuNav"
export default {
  name:"menus",
  data(){
    return{

    }
  },
  components:{
     "menuNav":menuNav
  }
   
  
}
</script>

<style lang="scss" >
#menus{
height: 100%;
}
.nav{
  height: 100%;
}
</style>