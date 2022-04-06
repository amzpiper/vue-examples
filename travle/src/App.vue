<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <!-- 显示当前路由所对应的内容 -->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
