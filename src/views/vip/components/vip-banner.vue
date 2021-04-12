<template>
  <div class="vip-banner" :style="{ background: bgColor[currentBanner] }">
    <div
      v-for="(item, index) in bannerList"
      :key="index"
      :class="['vip-banner-item', { active: currentBanner === item.key }]"
    >
      <div class="image-imageWrapper">
        <div style="width:1920;padding-top:26.041666666666668%"></div>
        <img class="image-image" :src="item.src" />
      </div>
    </div>
    <div class="vip-banner-bannerBtnList">
      <div
        v-for="(item, index) in bannerList"
        :key="index"
        :class="['bannerBtnList-item', { active: currentBanner === item.key }]"
        @click="changeBanner(item)"
      ></div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  data: function() {
    return {
      bannerList: [
        {
          key: 'ipChance',
          src: 'https://pic1.zhimg.com/50/v2-d741f4406f843b0eb882e6e0ab534541.webp'
        },
        {
          key: 'offSingleStatus',
          src: 'https://pic1.zhimg.com/50/v2-67bc430aba502333e5551f08b1424c39.webp'
        },
        { key: 'test', src: 'https://pic1.zhimg.com/50/v2-8b3e1f348586130c78e710b7457b7c5b.webp' }
      ],
      currentBanner: 'test',
      bgColor: {
        ipChance: 'rgb(76, 46, 18)',
        offSingleStatus: 'rgb(253, 118, 115)',
        test: 'rgb(94, 88, 176)'
      }
    }
  },
  mounted: function() {
    this.bannerInterval = setInterval(() => {
      const index = _.findIndex(this.bannerList, { key: this.currentBanner })
      const isLastBanner = index + 1 === this.bannerList.length
      if (isLastBanner) {
        this.currentBanner = _.get(this.bannerList, '[0].key')
      } else {
        this.currentBanner = _.get(this.bannerList, `[${index + 1}].key`)
      }
    }, 5000)
  },
  destroyed: function() {
    clearInterval(this.bannerInterval)
  },
  methods: {
    changeBanner: function(item) {
      this.currentBanner = item.key
    }
  }
}
</script>

<style scoped>
.vip-banner {
  position: relative;
  height: calc(100vw * 500 / 1920);
}
.vip-banner-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}
.vip-banner-item.active {
  opacity: 1;
  z-index: 1;
  -webkit-animation: CarouselBanner-turnRight-ac9W5 0.3s ease-in-out;
  animation: CarouselBanner-turnRight-ac9W5 0.3s ease-in-out;
}
.image-imageWrapper {
  position: relative;
  margin: 0 auto;
  cursor: pointer;
  -webkit-transition: width 0.6s ease, height 0.6s ease;
  transition: width 0.6s ease, height 0.6s ease;
  width: 100%;
  height: calc(100vw * 500 / 1920);
  flex-shrink: 0;
}
.image-image {
  font-size: 12px;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  object-fit: cover;
  text-indent: -9999px;
  border-radius: inherit;
}
.vip-banner-bannerBtnList {
  position: absolute;
  left: 50%;
  bottom: 16px;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  z-index: 2;
}
.bannerBtnList-item {
  float: left;
  margin: 0 6px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
}
.bannerBtnList-item.active {
  background-color: #fff;
}
</style>
