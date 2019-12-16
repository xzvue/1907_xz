<template>
    <div id="app">
        <HeaderTop title="昌平区北七家宏福科技园(337省道北)">
         <span class="header_search" slot="left">
            <i class="iconfont icon-sousuo"></i>
          </span> 
        <span class="header_login" slot="right">
            <span class="header_login_text">登录|注册</span>
          </span>    
        </HeaderTop>
        <!-- 轮播图 -->
    <div class="swiper-nav">
<div class="swiper-container" id="swiper1">
    <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="./img/nav/lunbo1.jpg" alt=""></div>
       <div class="swiper-slide"><img src="./img/nav/lunbo.png" alt=""></div>
       <div class="swiper-slide"><img src="" alt=""></div> 
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    

</div>
</div>
<!-- 导航轮播 -->
<div class="msite_nav">
    <div class="swiper-container" id="swiper2">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
           <ul class="food_container">
             <li class="list_food"><a href="javascript:;"><img src="./img/nav/1.jpg" alt=""></a><span>甜品饮品</span></li>  
              <li class="list_food"><a href="javascript:;"><img src="./img/nav/2.jpg" alt=""></a><span>商超便利</span></li>  
               <li class="list_food"><a href="javascript:;"><img src="./img/nav/3.jpg" alt=""></a><span>美食</span></li>  
              <li class="list_food"><a href="javascript:;"><img src="./img/nav/4.jpg" alt=""></a><span>简餐</span></li>  
              <li class="list_food"><a href="javascript:;"><img src="./img/nav/5.jpg" alt=""></a><span>新店特惠</span></li>  
              <li class="list_food"><a href="javascript:;"><img src="./img/nav/6.jpg" alt=""></a><span>准时达</span></li>  
               <li class="list_food"><a href="javascript:;"><img src="./img/nav/7.jpg" alt=""></a><span>预订早餐</span></li>  
              <li class="list_food"><a href="javascript:;"><img src="./img/nav/8.jpg" alt=""></a><span>土豪推荐</span></li>  
           </ul> 
            
        </div>
        <div class="swiper-slide">Slide 2</div>
        
    </div>
     <!-- 如果需要分页器  -->
    <div class="swiper-pagination"></div>
</div>
</div> 
<!-- 首页附近商家 -->
<div class="msite_shop_list">
<div class="shop_header">
    <i class="iconfont icon-xuanxiang"></i>
    <span class="shop_header_title">附近商家</span>
</div>
<!-- 商家分类 -->
<ShopList></ShopList>
 </div>
</div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import 'swiper/js/swiper.min.js'
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
import ShopList from '../../components/ShopList/ShopList.vue'
export default {
    components:{
        HeaderTop,
        ShopList
    },
    mounted(){
        new Swiper('#swiper1',{
        // direction: 'vertical', // 垂直切换选项
         loop: true, // 循环模式选项
         autoplay:true,
          // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // // 如果需要前进后退按钮
     navigation: {
      nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
    },
    
    // // 如果需要滚动条
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
        }),
       new Swiper('#swiper2',{
         loop: true, // 循环模式选项
        
          // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },  
      })   
    },
   
}

</script>
<style scoped>


.swiper-nav .swiper-container {
    position:absolute;
    top:45px;
    width: 100%;
    height: 150px;
    z-index:80;
}  
.swiper-slide img{
    width:100%;
    height:300px;
}
.msite_nav .swiper-container {
    position:absolute;
    top:200px;
    width: 100%;
    height: 200px;
    background-color:#fff; 
} 
.food_container{
    list-style: none;
    width:100%;
    display:flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding:13px 0;
} 
.food_container .list_food{
    width:25%;
    height:80px;
    text-align:center;
}
.food_container .list_food img{
    /* display: inline-block; */
    width:50px;
    height:50px;
   
}
.food_container .list_food span{
   display: block;
  width: 100%;
  text-align: center;
  font-size: 13px;
  color: #666;
  padding:10px 0;
}
.msite_shop_list{
    background: #fff;
    position:absolute;
    left:0;
    top:410px;
    width:100%;
  
   }
.msite_shop_list .shop_header {
  padding: 10px 10px 0;
}
.msite_shop_list .shop_header i {
  margin-left: 5px;
  color: #999;
  font-size:16px;

}
.msite_shop_list .shop_header .shop_header_title {
  color: #999;
  font-size: 14px;
  line-height: 20px;
  margin-left:4px;
}
</style>
