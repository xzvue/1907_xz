<template>
  <header class="msite_header">
     <slot name="left"></slot>
    <span class="header_title">
       <span class="header_title_text ellipsis">{{title}}</span>
    </span>
    <slot name="right"></slot>
  </header> 
</template>
<script>
export default {
  props:{
    title:String
  }
}
</script>
<style scoped>
.msite_header {
  background-color: #02a774;
  position: fixed;
  z-index: 200;
  left: 0;
  top: 0;
  width: 100%;
  height: 45px;
}
#app  .msite_header .header_search {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 10%;
  height: 50%;
}
#app  .msite_header .header_search .icon-sousuo {
  font-size: 25px;
  color: #fff;
}
#app .msite_header .header_title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  color: #fff;
  text-align: center;
  margin-left: -5%;
}
#app .msite_header .header_title .header_title_text {
  font-size: 20px;
  color: #fff;
  display: block;
}
#app .msite_header .header_login {
  font-size: 14px;
  color: #fff;
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
}
#app .msite_header .header_login .header_login_text {
  color: #fff;
}
</style>
