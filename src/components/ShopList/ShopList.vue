<template>
  <div class="shop_container">
    <div class="shop-container">
        <div class="shop-left">
            <img src="./img/shop/1.jpg" alt="">
            <div class="shop-list">
                <h4 class="shop-title ellipsis">锄禾日当午，汗滴禾下土</h4>
                <div class="star star-48">
                    <span class="star-item on"></span>
                    <span class="star-item on"></span>
                    <span class="star-item on"></span>
                    <span class="star-item on"></span>
                    <span class="star-item off"></span>
                    <span class="spa1">3.6</span>
                    <span class="spa2">月售106单</span>
                  </div>
             <span class="price">¥20起送/配送费约¥5</span>
            </div>
        </div>
        <div class="shop-right">
            <ul class="shop_detail_ul">
                <li class="supports">保</li>
                <li class="supports">准</li>
                <li class="supports">票</li>
              </ul>
            <span class="list1">硅谷专送</span>
        </div>
    </div>
    <!-- 商家分类2 -->
<div class="shop-container">
        <div class="shop-left">
            <img src="./img/shop/2.jpg" alt="">
            <div class="shop-list">
                <h4 class="shop-title ellipsis">锄禾日当午，汗滴禾下土</h4>
                <div class="star star-48">
                    <span class="star-item on"></span>
                    <span class="star-item on"></span>
                    <span class="star-item on"></span>
                    <span class="star-item off"></span>
                    <span class="star-item off"></span>
                    <span class="spa1">3.6</span>
                    <span class="spa2">月售106单</span>
                  </div>
             <span class="price">¥20起送/配送费约¥5</span>
            </div>
        </div>
        <div class="shop-right">
            <ul class="shop_detail_ul">
                <li class="supports">保</li>
                <li class="supports">准</li>
                <li class="supports">票</li>
              </ul>
            <span class="list1">硅谷专送</span>
        </div>
    </div>
<!-- 商家分类3 -->
<div class="shop-container">
        <div class="shop-left">
            <img src="./img/shop/3.jpg" alt="">
            <div class="shop-list">
                <h4 class="shop-title ellipsis">锄禾日当午，汗滴禾下土</h4>
                <div class="star star-48">
                    <span class="star-item on"></span>
                    <span class="star-item on"></span>
                    <span class="star-item on"></span>
                    <span class="star-item half"></span>
                    <span class="star-item off"></span>
                    <span class="spa1">3.6</span>
                    <span class="spa2">月售106单</span>
                  </div>
             <span class="price">¥20起送/配送费约¥5</span>
            </div>
        </div>
        <div class="shop-right">
            <ul class="shop_detail_ul">
                <li class="supports">保</li>
                <li class="supports">准</li>
                <li class="supports">票</li>
              </ul>
            <span class="list1">硅谷专送</span>
        </div>
    </div>
<!-- 商家分类4 -->
<div class="shop-container">
        <div class="shop-left">
            <img src="./img/shop/4.jpg" alt="">
            <div class="shop-list">
                <h4 class="shop-title ellipsis">锄禾日当午，汗滴禾下土</h4>
                <div class="star star-48">
                    <span class="star-item on"></span>
                    <span class="star-item on"></span>
                    <span class="star-item on"></span>
                    <span class="star-item on"></span>
                    <span class="star-item off"></span>
                    <span class="spa1">3.6</span>
                    <span class="spa2">月售106单</span>
                  </div>
             <span class="price">¥20起送/配送费约¥5</span>
            </div>
        </div>
        <div class="shop-right">
            <ul class="shop_detail_ul">
                <li class="supports">保</li>
                <li class="supports">准</li>
                <li class="supports">票</li>
              </ul>
            <span class="list1">硅谷专送</span>
        </div>
    </div>
</div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.shop_container{
  margin-bottom:50px;
}
.shop-container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top:20px;
    }
    .shop-left img{
        width:73px;
        height:75px;
    }
    .shop-left{
        display: flex;

    }
    .shop-list{
        display:flex;
        flex-direction: column;
        justify-content: center;
        margin-left:7px;
    }

    .shop-list h4::before{
        content:"品牌";
        background-color:#ff9a0d;
        font-size:8px;
        margin-right:8px;
    }
    .shop-title{
    width: 140px;
    color: #333;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700; 
    }
    .star {
  float: left;
  
}
.star .star-item {
  display: inline-block;
  background-repeat: no-repeat; 
  width: 10px;
  height: 10px;
  padding:0 6px;
  background-size: 10px 10px;
}
 
 .star-item:last-child {
  margin-right: 0;
}
     .star .on {
  background-image: url("img/stars/star48_on@2x.png");
}
@media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
 .star .on {
    background-image: url("img/stars/star48_on@3x.png");
  }
}
 .star.star-48 .star-item.half {
  background-image: url("img/stars/star48_half@2x.png");
}
@media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
 .star.star-48 .star-item.half {
    background-image: url("img/stars/star48_half@3x.png");
  }
}
 .star.star-48 .star-item.off {
  background-image: url("img/stars/star48_off@2x.png");
}
@media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
 .star.star-48 .star-item.off {
    background-image: url("img/stars/star48_off@3x.png");
  }
}
.spa1,.spa2,.price{
    
    font-size:10px;
    display: inline-block;
    padding:7px 3px;
}
.spa1{color:#ff6000;margin-left: 2px;}
.spa2{color:#666;}
.price{color:#666;}
.shop-right{
    margin-right:20px;
}
.shop_detail_ul{
    list-style: none;
}
.supports{
    float: left;
    font-size: 10px;
    color: #999;
    border: 1px solid #f1f1f1;
    padding: 0 2px;
    border-radius: 2px;
}
.list1{
   margin-top:10px;
    transform-origin: 35px 0;
    transform: scale(0.7);
    display:inline-block;
    font-size: 12px;
    padding: 1px;
    border-radius: 2px;
    color: #02a774;
    border: 1px solid #02a774
}
</style>
