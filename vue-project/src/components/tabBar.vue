<template>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home">首页</van-tabbar-item>
    <van-tabbar-item icon="chat" dot>分享</van-tabbar-item>
    <van-tabbar-item icon="tosend" info="5">攻略</van-tabbar-item>
    <van-tabbar-item icon="contact">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: 'tabBar'
}
</script>

<style scoped>

</style>
