<template>
  <div class="rankingList-root">
    <div class="rankingList-header">
      <div class="rankingList-tabList">
        <div class="rankingList-decoration"></div>
        <div class="rankingList-title">VIP 榜单</div>
        <div
          v-for="(item, index) in rankingListTabs"
          :key="index"
          :class="['rankingList-tabItem', { active: currentRankingListTab === item.key }]"
          @mouseenter="currentRankingListTab = item.key"
        >
          {{ item.name }}
        </div>
      </div>
      <div class="rankingList-viewAll">
        <span class="rankingList-text">查看全部</span>
        <svg viewBox="0 0 48 48" height="15" width="15" fill="currentColor">
          <path
            d="M19.608 11.291a1.04 1.04 0 0 0-1.428-.02l-1.88 1.782a.968.968 0 0 0-.02 1.388l9.49 9.556-9.49 9.555a.973.973 0 0 0 .02 1.388l1.88 1.782a1.036 1.036 0 0 0 1.428-.02L31.703 24.7a.991.991 0 0 0 0-1.404L19.608 11.29z"
            fill-rule="evenodd"
          ></path>
        </svg>
      </div>
    </div>
    <div class="rankingList-dividerLine"></div>
    <div class="rankingList-topOneItem">
      <div class="rankingList-background">
        <div class="rankingList-top-title">{{ topOneItem.title }}</div>
        <div class="rankingList-description">
          {{ topOneItem.description }}
        </div>
        <div class="rankingList-author">
          <div class="rankingList-avatar image-wrapper">
            <div></div>
            <img class="image-avatar" :src="topOneItem.authorSrc" />
          </div>
          <div>作者: {{ topOneItem.author }}</div>
        </div>
      </div>
      <div class="rankingList-artwork">
        <div class="image-wrapper avatar-artwork">
          <img
            class="avatar-artwork"
            src="https://pic1.zhimg.com/v2-65fba93d3bb840b223addf89052a506d.png"
          />
          <img class="image-avatar" :src="topOneItem.artWorkSrc" />
        </div>
        <div class="cellLabel-type big-label">
          <span>盐选专栏</span>
        </div>
        <img class="vip-tag" src="https://pic4.zhimg.com/v2-64888e9758753adb09660cf4e32fa3fc.png" />
      </div>
      <div class="rankingList-indexLogo">01</div>
    </div>
    <div class="rankingList-sliderButton">
      <div class="rankingList-button left disable">
        <svg viewBox="0 0 48 48" height="16" width="16" fill="currentColor">
          <path
            d="M19.608 11.291a1.04 1.04 0 0 0-1.428-.02l-1.88 1.782a.968.968 0 0 0-.02 1.388l9.49 9.556-9.49 9.555a.973.973 0 0 0 .02 1.388l1.88 1.782a1.036 1.036 0 0 0 1.428-.02L31.703 24.7a.991.991 0 0 0 0-1.404L19.608 11.29z"
            fill-rule="evenodd"
          ></path>
        </svg>
      </div>
      <div class="rankingList-button">
        <svg viewBox="0 0 48 48" height="16" width="16" fill="currentColor">
          <path
            d="M19.608 11.291a1.04 1.04 0 0 0-1.428-.02l-1.88 1.782a.968.968 0 0 0-.02 1.388l9.49 9.556-9.49 9.555a.973.973 0 0 0 .02 1.388l1.88 1.782a1.036 1.036 0 0 0 1.428-.02L31.703 24.7a.991.991 0 0 0 0-1.404L19.608 11.29z"
            fill-rule="evenodd"
          ></path>
        </svg>
      </div>
    </div>
    <div class="rankingList-itemList">
      <div class="rankingList-slider" style="left: 0px">
        <div v-for="(item, index) in itemList" :key="index" class="rankingList-item">
          <div class="rankingList-itemBackground"></div>
          <div class="rankingList-itemIndex">{{ item.indexLogo }}</div>
          <div class="rankingList-itemArtwork">
            <div class="image-wrapper avatar-artwork">
              <img
                class="avatar-artwork"
                src="https://pic1.zhimg.com/v2-65fba93d3bb840b223addf89052a506d.png"
              />
              <img class="image-avatar" :src="item.artWorkSrc" />
            </div>
            <div class="cellLabel-type">
              <span>盐选专栏</span>
            </div>
            <img
              class="vip-tag"
              src="https://pic4.zhimg.com/v2-64888e9758753adb09660cf4e32fa3fc.png"
            />
          </div>
          <div class="rankingList-itemTitle">{{ item.title }}</div>
          <div class="rankingList-itemDescription">
            {{ item.description }}
          </div>
          <div class="rankingList-itemAuthor">
            <div class="rankingList-avator image-wrapper">
              <div></div>
              <img class="image-avatar" :src="item.authorSrc" />
            </div>
            <div>作者: {{ item.author }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import hotList from '../ranking-list/hot.js'
export default {
  data: function() {
    return {
      rankingListTabs: [
        { key: 'hot', name: '热度榜' },
        { key: 'skill', name: '技能榜' },
        { key: 'story', name: '故事榜' },
        { key: 'live', name: 'Live 榜' }
      ],
      currentRankingListTab: 'hot'
    }
  },
  computed: {
    rankingList: function() {
      if (this.currentRankingListTab === 'hot') {
        return hotList
      } else if (this.currentRankingListTab === 'skill') {
        return []
      } else if (this.currentRankingListTab === 'story') {
        return []
      }
      return []
    },
    topOneItem: function() {
      return this.rankingList[0]
    },
    itemList: function() {
      const originalList = _.slice(this.rankingList, 1)
      return _.map(originalList, (item, index) => {
        return {
          ...item,
          indexLogo: `0${index + 2}`
        }
      })
    }
  }
}
</script>

<style scoped>
/* common */
.image-wrapper {
  position: relative;
  flex-shrink: 0;
}
.avatar-artwork {
  width: 100%;
  height: 100%;
}
.image-avatar {
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
  object-fit: cover;
}
.cellLabel-type {
  box-sizing: border-box;
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
  line-height: 30px;
  -webkit-transform-origin: 100% 100%;
  white-space: nowrap;
  color: #121212;
  font-weight: 500;
  transform: scale(0.5);
  background-color: hsla(0, 0%, 100%, 0.8);
  box-shadow: unset;
}
.vip-tag {
  position: absolute;
  top: 0;
  left: 0;
  height: 21px;
}
.rankingList-root {
  position: relative;
  width: 100%;
}
.rankingList-header {
  width: 100%;
  height: 28px;
}
.rankingList-tabList {
  float: left;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 100%;
}
.rankingList-decoration {
  width: 4px;
  height: 20px;
  background-color: #ce994f;
}
.rankingList-title {
  margin: 0 32px 0 16px;
  font-size: 19px;
  color: #121212;
  font-weight: 600;
}
.rankingList-tabItem {
  margin-right: 21px;
  height: 28px;
  line-height: 28px;
  font-size: 15px;
  color: #121212;
  cursor: pointer;
}
.rankingList-tabItem:hover {
  color: #ce994f;
}
.rankingList-tabItem.active {
  border-top: 2px solid transparent;
  border-bottom: 2px solid #ce994f;
  color: #ce994f;
  transition: font-size 0.3s, color 0.3s;
  font-weight: 600;
}
.rankingList-viewAll {
  float: right;
  display: block;
  margin-top: 6px;
  line-height: 15px;
  font-size: 12px;
  color: #8590a6;
  text-decoration: none;
  cursor: pointer;
}
.rankingList-viewAll .rankingList-text:hover {
  color: #ce994f;
}
.rankingList-viewAll svg {
  display: block;
  float: right;
}
.rankingList-dividerLine {
  margin: 20px 0 15px 0;
  width: 100%;
  height: 1px;
  background-color: #ebebeb;
}
.rankingList-topOneItem {
  position: relative;
  height: 215px;
}
.rankingList-background {
  position: absolute;
  bottom: 0;
  left: 0;
  padding-left: 192px;
  width: 494px;
  height: 143px;
  background-color: #dbaf72;
  color: #fff;
}
.rankingList-top-title {
  margin-top: 18px;
  width: 405px;
  font-size: 15px;
  font-weight: 500;
  color: #fff;
  text-decoration: none;
  line-height: 21px;
  letter-spacing: 0.5px;
  cursor: pointer;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
}
.rankingList-top-title:hover {
  color: #754e19;
}
.rankingList-description {
  margin-top: 11px;
  width: 405px;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.4px;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
}
.rankingList-description:hover {
  color: #ce994f;
}
.rankingList-author {
  position: absolute;
  bottom: 18px;
  left: 192px;
  display: -webkit-box;
  display: flex;
  width: 405px;
  height: 20px;
  line-height: 20px;
  font-size: 11px;
  font-weight: 500;
}
.rankingList-author div {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
}
.rankingList-avatar {
  margin-right: 8px;
  width: 20px;
  height: 20px;
  border-radius: 10px;
}
.rankingList-artwork {
  overflow: hidden;
  border-radius: 0;
  position: absolute;
  top: 0;
  left: 25px;
  width: 142px;
  height: 190px;
  border: 5px solid #fff;
  cursor: pointer;
}
.rankingList-artwork .big-label {
  height: 48px;
  font-size: 26px;
  border-radius: 24px 0 0 0;
}
@font-face {
  font-family: ZHVipFont;
  src: url('../../../assets/ZHVipFont.7F3wnHjJ.otf');
}
.rankingList-indexLogo {
  position: absolute;
  top: 24px;
  left: 673px;
  box-sizing: border-box;
  width: 66px;
  height: 66px;
  border: 2px solid #754e19;
  text-align: center;
  line-height: 62px;
  font-size: 30px;
  font-weight: 400;
  color: #754e19;
  font-family: ZHVipFont;
}
.rankingList-sliderButton {
  position: absolute;
  top: 261px;
  right: 20px;
}
.rankingList-button {
  float: left;
  margin-left: 4px;
  width: 18px;
  height: 18px;
  background-color: #754e19;
  cursor: pointer;
}
.rankingList-button.disable {
  opacity: 0.3;
  cursor: default;
}
.rankingList-button:hover {
  opacity: 1;
  background-color: #ce994f;
}
.rankingList-button.disable:hover {
  opacity: 0.3;
  background-color: #754e19;
}
.rankingList-button.left {
  transform: rotateY(180deg);
}
.rankingList-button svg {
  display: block;
  margin: 1px 0 0 1px;
  color: #f8e2c4;
}
.rankingList-itemList {
  position: relative;
  margin-top: 26px;
  width: 100%;
  height: 250px;
  overflow: hidden;
}
.rankingList-slider {
  position: absolute;
  top: 0;
  left: 0;
  display: -webkit-box;
  display: flex;
  -webkit-transition: left 0.5s;
  transition: left 0.5s;
}
.rankingList-item {
  position: relative;
  margin-right: 45px;
  width: 163px;
}
.rankingList-itemBackground {
  position: absolute;
  top: 13px;
  left: 13px;
  width: 98px;
  height: 131px;
  background-color: #daae72;
}
.rankingList-itemIndex {
  position: absolute;
  top: 14px;
  right: 0;
  font-family: ZHVipFont;
  font-size: 22px;
  line-height: 30px;
  font-weight: 400;
  color: #754e19;
}
.rankingList-itemArtwork {
  position: relative;
  overflow: hidden;
  border-radius: 0;
  width: 98px;
  height: 131px;
  border: 3px solid #fff;
  cursor: pointer;
}
.rankingList-itemTitle {
  margin-top: 23px;
  width: 100%;
  font-size: 14px;
  line-height: 20px;
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
.rankingList-itemTitle:hover {
  color: #754e19;
}
.rankingList-itemDescription {
  margin-top: 3px;
  width: 100%;
  font-size: 12px;
  line-height: 17px;
  letter-spacing: 0.4px;
  color: #999;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
}
.rankingList-itemAuthor {
  margin-top: 12px;
  display: -webkit-box;
  display: flex;
  width: 100%;
  height: 18px;
  line-height: 18px;
  font-size: 11px;
  color: #121212;
}
.rankingList-itemAuthor div {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
}
.rankingList-avator {
  margin-right: 7px;
  width: 18px;
  height: 18px;
  border-radius: 9px;
}
</style>
