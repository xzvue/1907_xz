<template>
    <!--搜索-->
    <div id="app">
      <section class="search">
        <HeaderTop title="搜索"></HeaderTop>
        <form class="search_form" action="#">
          <input type="search" name="search" placeholder="请输入商家或美食名称" class="search_input">
          <input type="submit" name="submit" class="search_submit">
        </form>
      </section>
    </div>
</template>
<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
export default {
     components:{
      HeaderTop
   } 
}
</script>
<style scoped>
#app .search {
  width: 100%;
  overflow: hidden;
}
#app .header {
  background-color: #02a774;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 45px;
}
.header_title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  color: #fff;
  text-align: center;
  margin-left: -3%;
}
.header_title .header_title_text {
  font-size: 20px;
  color: #fff;
  display: block;
  
}
#app .search .search_form {
  *zoom: 1;
  margin-top: 45px;
  background-color: #fff;
  padding: 12px 8px;
}
#app .search .search_form::after {
  content: '';
  display: block;
  clear: both;
}
#app .search .search_form input {
  height: 35px;
  padding: 0 4px;
  border-radius: 2px;
  font-weight: bold;
  outline: none;
}
#app .search .search_form input.search_input {
  float: left;
  width: 79%;
  border: 4px solid #f2f2f2;
  font-size: 14px;
  color: #333;
  background-color: #f2f2f2;
}
#app .search .search_form input.search_submit {
  float: right;
  width: 18%;
  border: 4px solid #02a774;
  font-size: 16px;
  color: #fff;
  background-color: #02a774;
}
</style>
