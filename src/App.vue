<template>
  <div id="app">
    <link-header />
    <router-view />
  </div>
</template>

<script>
import LinkHeader from './components/header/index.vue'
export default {
  data: function() {
    return {}
  },
  components: {
    'link-header': LinkHeader
  }
}
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, PingFang SC, Microsoft YaHei,
    Source Han Sans SC, Noto Sans CJK SC, WenQuanYi Micro Hei, sans-serif;
  font-size: 15px;
  color: #121212;
}
</style>
