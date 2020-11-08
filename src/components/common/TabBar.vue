<template>
<div id="tab-bar">
    <slot></slot>
</div>
</template>

<script>
export default {
    name: 'TabBar'
}
</script>

<style>
#tab-bar {
    display: flex;
    position: fixed;
    /*跑到下边*/
    left: 0;
    right: 0;
    bottom: 0;
}
</style>
