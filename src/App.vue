<template>
  <div id="app">
    <link-header></link-header>
    <router-view></router-view>
  </div>
</template>

<script>
import LinkHeader from "/src/components/header/index";
export default {
  data: function() {
    return {};
  },
  components: {
    LinkHeader,
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
