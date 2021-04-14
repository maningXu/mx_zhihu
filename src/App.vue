<template>
  <div id="app">
    <div v-if="!isLogin">
      <login />
    </div>
    <div v-else>
      <link-header />
      <router-view />
    </div>
  </div>
</template>

<script>
import Login from './views/login/index.vue'
import LinkHeader from './components/header/index.vue'
export default {
  data: function() {
    return {
      isLogin: false
    }
  },
  components: {
    login: Login,
    'link-header': LinkHeader
  },
  mounted: function() {
    const userName = sessionStorage.getItem('userName')
    this.isLogin = !!userName
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
