<template>
  <div class="recommendFeed-root">
    <div class="recommendFeed-title">大家都在看</div>
    <div class="recommendFeed-dividerLine"></div>
    <div class="infinite-root">
      <div
        v-for="(item, index) in recommendFeedList"
        :key="index"
        class="recommendFeed-skuRecommendCell"
      >
        <div class="recommendFeed-skuTitle">{{ item.skuTitle }}</div>
        <div class="recommendFeed-artwork">
          <div class="image-imageWrapper skuAvatar-artwork">
            <img
              class="skuAvatar-artwork"
              src="https://pic2.zhimg.com/v2-d0dbac466869ddd32a56b7a6e5c1e62d.png"
            />
            <img class="image-image" :src="item.img" />
          </div>
          <div class="cellLabel-type">
            <span class="verticalMiddle-root">盐选专栏</span>
          </div>
          <img
            src="https://pic4.zhimg.com/v2-64888e9758753adb09660cf4e32fa3fc.png"
            class="skuAvatar-vipTag"
          />
        </div>
        <div class="recommendFeed-content">
          <div class="recommendFeed-manuscript">
            {{ item.manuscript }}
          </div>
          <div class="recommendFeed-meta">{{ item.meta }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import recommendFeedList from '../recommend-list/index.js'
export default {
  data: function() {
    return {
      recommendFeedList
    }
  }
}
</script>

<style scoped>
/* common */
.image-imageWrapper {
  position: relative;
  flex-shrink: 0;
}
.skuAvatar-artwork {
  width: 100%;
  height: 100%;
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
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: inherit;
}
.cellLabel-type {
  position: absolute;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 0 8px;
  line-height: 30px;
  transform: scale(0.5);
  transform-origin: 100% 100%;
  white-space: nowrap;
  color: #121212;
  background-color: hsla(0, 0%, 100%, 0.8);
  right: 0;
  bottom: 0;
  box-shadow: unset;
  font-weight: 500;
  height: 48px;
  font-size: 26px;
  border-radius: 24px 0 0 0;
}
.skuAvatar-vipTag {
  position: absolute;
  top: 0;
  left: 0;
  height: 21px;
}
.verticalMiddle-root {
  line-height: normal;
}
.recommendFeed-root {
  margin-top: 64px;
  width: 100%;
}
.recommendFeed-title {
  height: 20px;
  border-left: 4px solid #ce994f;
  text-indent: 16px;
  font-size: 19px;
  line-height: 20px;
  color: #121212;
  font-weight: 600;
}
.recommendFeed-dividerLine {
  margin: 24px 0 21px 0;
  width: 100%;
  height: 1px;
  background-color: #ebebeb;
}
.infinite-root {
  position: relative;
  padding-bottom: 40px;
}
.recommendFeed-skuRecommendCell {
  margin-bottom: 30px;
  width: 100%;
  overflow: hidden;
}
.recommendFeed-skuTitle {
  float: left;
  margin-bottom: 19px;
  height: 25px;
  font-size: 18px;
  font-weight: 500;
  line-height: 25px;
  color: #121212;
  text-decoration: none;
  cursor: pointer;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
}
.recommendFeed-artwork {
  position: relative;
  overflow: hidden;
  border-radius: 0;
  float: left;
  margin-right: 20px;
  width: 190px;
  height: 107px;
  clear: left;
  cursor: pointer;
}
.recommendFeed-content {
  float: left;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  width: 600px;
  height: 107px;
}
.recommendFeed-manuscript {
  width: 100%;
  font-size: 15px;
  line-height: 25px;
  color: #444;
  text-decoration: none;
  cursor: pointer;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
}
.recommendFeed-meta {
  font-size: 14px;
  line-height: 16px;
  color: #ce994f;
}
</style>
