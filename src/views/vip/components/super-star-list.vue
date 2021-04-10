<template>
  <div class="superStarList-root">
    <div class="superStarList-title">大咖驾到</div>
    <div class="superStarList-starList">
      <div
        v-for="(item, index) in starList"
        :key="index"
        :class="['superStarList-starCell', { active: currentStar === item.key }]"
        @mouseenter="enterStar(item)"
      >
        <div class="image-imageWrapper superStarList-avatar">
          <div></div>
          <img class="image-image" :src="item.avatar" />
        </div>
        <div class="superStarList-name">{{ item.name }}</div>
      </div>
    </div>
    <div class="superStarList-dividerLine">
      <div class="superStarList-pointer" :style="{ left: leftDistance }"></div>
    </div>
    <div class="superStarList-skuList">
      <div v-for="(item, index) in skuList" :key="index" class="superStarList-skuCell">
        <div class="skuAvatar-root">
          <div class="image-imageWrapper skuAvatar-artwork">
            <img
              class="skuAvatar-artwork"
              src="https://pic1.zhimg.com/v2-65fba93d3bb840b223addf89052a506d.png"
            />
            <img class="image-image" :src="item.img" />
          </div>
          <div class="cellLabel-type">
            <span class="verticalMiddle-root">{{ item.cellLabel }}</span>
          </div>
          <img
            src="https://pic4.zhimg.com/v2-64888e9758753adb09660cf4e32fa3fc.png"
            class="skuAvatar-vipTag"
          />
        </div>
        <div class="superStarList-skuTitle">
          {{ item.skuTitle }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import zjcList from '../vip-list/zjc.js'
import ftList from '../vip-list/ft.js'
import lcxList from '../vip-list/lcx.js'
import zddList from '../vip-list/zdd.js'
import fyqmList from '../vip-list/fyqm.js'
export default {
  data: function() {
    return {
      starList: [
        {
          key: 'zjc',
          avatar: 'https://pic1.zhimg.com/50/v2-2d583ef0bbb7c37088e72fdbc2eab62c.webp',
          name: '紫金陈'
        },
        {
          key: 'ft',
          avatar: 'https://pic1.zhimg.com/50/v2-e4711c3c9dc9101ae8bb911b37ee27a5.webp',
          name: '冯唐'
        },
        {
          key: 'lcx',
          avatar: 'https://pic1.zhimg.com/50/v2-6ab135de26b8cb19cb3d8a9fec862ac6.webp',
          name: '刘慈欣'
        },
        {
          key: 'zdd',
          avatar: 'https://pic1.zhimg.com/50/v2-b5e1da70e28382b28e4fae4f12a6f6f4.webp',
          name: '周德东'
        },
        {
          key: 'fyqm',
          avatar: 'https://pic1.zhimg.com/50/v2-7bde6a1e673af00835fe65efc9ad1e41.webp',
          name: '法医秦明'
        }
      ],
      currentStar: 'zjc'
    }
  },
  computed: {
    leftDistance: function() {
      const index = _.findIndex(this.starList, { key: this.currentStar })
      return `${35 + index * 108}px`
    },
    skuList: function() {
      if (this.currentStar === 'zjc') {
        return zjcList
      } else if (this.currentStar === 'ft') {
        return ftList
      } else if (this.currentStar === 'lcx') {
        return lcxList
      } else if (this.currentStar === 'zdd') {
        return zddList
      }
      return fyqmList
    }
  },
  methods: {
    enterStar: function(item) {
      this.currentStar = item.key
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
.image-imageWrapper .image-image {
  border-radius: inherit;
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
}
.cellLabel-type {
  height: 48px;
  font-size: 26px;
  font-weight: 500;
  border-radius: 24px 0 0 0;
  right: 0;
  bottom: 0;
  box-shadow: unset;
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
}
.skuAvatar-vipTag {
  position: absolute;
  top: 0;
  left: 0;
  height: 21px;
}
.superStarList-root {
  margin-top: 64px;
  width: 100%;
}
.superStarList-title {
  height: 20px;
  border-left: 4px solid #ce994f;
  text-indent: 16px;
  font-size: 19px;
  line-height: 20px;
  color: #121212;
  font-weight: 600;
}
.superStarList-starList {
  margin-top: 20px;
  overflow: hidden;
}
.superStarList-starCell {
  float: left;
  margin-right: 30px;
  cursor: pointer;
}
.superStarList-avatar {
  position: relative;
  margin-left: 4px;
  width: 70px;
  height: 70px;
  border-radius: 35px;
}
.superStarList-name {
  position: relative;
  margin-top: -10px;
  width: 78px;
  height: 36px;
  background-color: #f6f6f6;
  border-radius: 32px;
  font-weight: 500;
  font-size: 14px;
  line-height: 36px;
  text-align: center;
  color: grey;
  z-index: 1;
}
.superStarList-starCell.active .superStarList-name {
  background-color: #dbaf72;
  color: #fff;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.superStarList-dividerLine {
  position: relative;
  margin-top: 18px;
  width: 809px;
  height: 2px;
  background-color: #ce994f;
  border-radius: 9px;
}
.superStarList-pointer {
  position: absolute;
  top: -3px;
  width: 0;
  height: 0;
  border-left: 4px solid #fff;
  border-right: 4px solid #fff;
  border-bottom: 3px solid #ce994f;
}
.superStarList-skuList {
  margin-top: 19px;
  overflow: hidden;
}
.superStarList-skuCell {
  float: left;
  margin-right: 25px;
  width: 142px;
}
.superStarList-skuCell:last-child {
  margin-right: 0;
}
.skuAvatar-root {
  position: relative;
  overflow: hidden;
  border-radius: 0;
  width: 142px;
  height: 190px;
  cursor: pointer;
}
.skuAvatar-artwork {
  width: 100%;
  height: 100%;
}
.superStarList-skuTitle {
  margin-top: 12px;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 0.5px;
  color: #121212;
  text-decoration: none;
  cursor: pointer;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
}
</style>
