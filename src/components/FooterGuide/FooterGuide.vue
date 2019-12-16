<template>
    <div class="footer_guide">
        <a href="javascript:;" class="guide_item " :class="{on:'/Msite'===$route.path}"  @click="goTo('/Msite')">
            <span class="item_icon">
                <i class="iconfont icon-waimai"></i>
            </span>
            <span>外卖</span>
        </a>
        <a href="javascript:;" class="guide_item" :class="{on:'/Search'===$route.path}" @click="goTo('/Search')">
            <span class="item_icon">
                <i class="iconfont icon-search"></i>
            </span>
            <span>搜索</span>
        </a>
        <a href="javascript:;" class="guide_item" :class="{on:'/Order'===$route.path}" @click="goTo('/Order')">
            <span class="item_icon">
                <i class="iconfont icon-dingdan"></i>
            </span>
            <span>订单</span>
        </a>
        <a href="javascript:;" class="guide_item" :class="{on:'/Profile'===$route.path}" @click="goTo('/Profile')">
            <span class="item_icon">
                <i class="iconfont icon-geren"></i>
            </span>
            <span>我的</span>
        </a>
    </div>
</template>
<script>
export default {
    methods:{
        goTo(path){
            this.$router.replace(path);
        }
    }
}
</script>
<style scoped>
    .footer_guide{
        border-top:1px solid #e4e4e4;
        width:100%;
        height:50px;
        display:flex;
        background-color:#fff;
        position:fixed;
        z-index:100;
        left:0;
        right:0;
        bottom:0; 
        
        justify-content: space-around;
    }
    .guide_item{
        display:flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        margin:5px;
        color:#999999;
        
    }
    .on{color:#02a774;}
    span{
        font-size:12px;
        margin-top:2px;
        margin-bottom:2px;

    }
    .iconfont{
        font-size:22px;
    }
</style>
