<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "/src/components/header/index";
export default {
  data: function() {
    return {};
  },
  components: {
    Header,
  },
};
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, PingFang SC,
    Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC, WenQuanYi Micro Hei,
    sans-serif;
  font-size: 15px;
  color: #121212;
}
</style>
