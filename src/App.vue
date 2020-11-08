<template>
<div id="app">
    <router-view></router-view>
    <TabBar>
        <TabBarItem path="home">
            <img src="@/assets/img/tabbar1.jpg" slot="tab-bar-item-img" />
            <div slot="tab-bar-item-div">首页</div>
        </TabBarItem>
        <TabBarItem path="catagory">
            <img src="@/assets/img/tabbar2.jpg" slot="tab-bar-item-img" />
            <div slot="tab-bar-item-div">分类</div>
        </TabBarItem>
        <TabBarItem path="cart">
            <img src="@/assets/img/tabbar3.jpg" slot="tab-bar-item-img" />
            <div slot="tab-bar-item-div">购物车</div>
        </TabBarItem>
        <TabBarItem path="profile">
            <img src="@/assets/img/tabbar4.jpg" slot="tab-bar-item-img" />
            <div slot="tab-bar-item-div">我的</div>
        </TabBarItem>
    </TabBar>
</div>
</template>

<script>
import TabBar from './components/common/TabBar.vue'
import TabBarItem from './components/common/TabBarItem.vue'
export default {
    name: 'App',
    components: {
        TabBar,
        TabBarItem
    },
}
</script>

<style>
@import './assets/css/base.css'
</style>
