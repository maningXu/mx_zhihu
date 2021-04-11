<template>
  <div class="vip">
    <vip-banner />
    <menu-bar />
    <app-content />
  </div>
</template>

<script>
import VipBanner from './components/vip-banner.vue'
import MenuBar from './components/menu-bar.vue'
import AppContent from './components/app-content.vue'

export default {
  components: {
    'vip-banner': VipBanner,
    'menu-bar': MenuBar,
    'app-content': AppContent
  },
  data: function() {
    return {}
  },
  mounted: function() {
    document.title = '会员 - 知乎'
  }
}
</script>

<style scoped>
.vip {
  min-width: 1230px;
  background-color: #fff;
}
</style>
