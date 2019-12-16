<template>
  <div id="app">
   
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>
<script>
import {reqFoodCategorys} from './api'
export default {
  mounted(){
   reqFoodCategorys().then(response=>{
      console.log(response.data)
   })
   
  }
}
</script>>
<style>

#app{
  width:100%;
  height:100%; 
  background-color:#f5f5f5;
  /* position:relative; */
}
</style>
