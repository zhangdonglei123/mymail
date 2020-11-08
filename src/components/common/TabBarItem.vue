<template>
<div class="tab-bar-item" @click="itemClick">
    <slot name="tab-bar-item-img"></slot>
    <slot name="tab-bar-item-div"></slot>
</div>
</template>

<script>
export default {
    name: 'TabBarItem',
    methods: {
        itemClick() {
            console.log("aaa");
            this.$router.push('/home');
        }
    }
}
</script>

<style>
.tab-bar-item {
    flex: 1;
    /*均等分*/
    text-align: center;
    /*文本居中*/
    font-size: 14px;
}

.tab-bar-item img {
    width: 30px;
    height: 20px;
}
</style>
