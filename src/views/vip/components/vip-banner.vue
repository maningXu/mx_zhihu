<template>
  <div class="vip-banner">
    <div class="vip-banner-item active">
      <div class="image-imageWrapper">
        <div style="width:1920;padding-top:26.041666666666668%"></div>
        <img
          class="image-image"
          src="https://pic1.zhimg.com/50/v2-d741f4406f843b0eb882e6e0ab534541.webp"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
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
</style>
