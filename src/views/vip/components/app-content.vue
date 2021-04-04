<template>
  <div class="app-content">
    <div class="app-commodity">
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
      </div>
    </div>
    <div class="app-myself"></div>
  </div>
</template>

<script>
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
  }
}
</script>

<style scoped>
.app-content {
  margin: 0 auto;
  padding-top: 30px;
  width: 1130px;
  overflow: hidden;
}
.app-commodity {
  float: left;
  width: 829px;
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
.app-myself {
  float: right;
  width: 280px;
}
</style>
