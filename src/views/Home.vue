<template>
  <div class="home">
    <div class="question-header">
      <div class="question-header-content">
        <div class="question-header-main">
          <div class="question-header-tags">
            <div class="question-header-topics">
              <div
                v-for="(item, index) in topicList"
                :key="index"
                class="question-topic"
              >
                <span class="tag-content"
                  ><a class="topic-link">
                    <div class="popover">
                      <div>
                        {{ item.title }}
                      </div>
                    </div></a
                  ></span
                >
              </div>
            </div>
          </div>
          <h1 class="question-header-title">有哪些值得每天一看的网站？</h1>
        </div>
        <div class="question-header-side">
          <div class="number-board">
            <div
              v-for="(item, index) in numberBoardList"
              :key="index"
              :class="[
                'number-board-item',
                { 'number-board-divider': index === 1 },
              ]"
            >
              <div class="number-board-itemInner">
                <div class="number-board-itemName">{{ item.name }}</div>
                <strong class="number-board-itemValue" :title="item.value">{{
                  item.value
                }}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="question-header-footer">footer</div>
    </div>
    <div>content...</div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: function() {
    return {
      topicList: [
        { title: "学习" },
        { title: "教育" },
        { title: "调查类问题" },
        { title: "网站" },
        { title: "网站推荐" },
      ],
      numberBoardList: [
        {
          name: "关注者",
          value: "184,213",
        },
        {
          name: "被浏览",
          value: "20,594,652",
        },
      ],
    };
  },
  components: {},
};
</script>

<style scoped>
.home {
  margin-top: 3px;
}
.question-header {
  min-width: 1032px;
  padding: 16px 0;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
}
.question-header-content {
  display: flex;
  justify-content: space-between;
  width: 1000px;
  height: 100%;
  padding: 0 16px;
  margin: 0 auto;
}
.question-header-main {
  width: 694px;
  padding-left: 20px;
  box-sizing: border-box;
}
.question-header-tags {
  display: flex;
}
.question-header-topics {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  padding: 1px 0;
}
.question-topic {
  display: inline-block;
  height: 30px;
  padding: 0 12px;
  font-size: 14px;
  line-height: 30px;
  border-radius: 100px;
  background: rgba(0, 102, 255, 0.1);
  color: #06f;
  margin: 3px 5px 3px 0;
  vertical-align: middle;
}
.question-topic:hover {
  background-color: rgba(0, 102, 255, 0.15);
}
.question-header-side {
  width: 296px;
  padding-right: 20px;
  text-align: right;
}
.number-board {
  display: flex;
  width: 200px;
  margin-left: auto;
}
.number-board-divider {
  border-left: 1px solid #ebebeb;
}
.number-board-item {
  flex: 1 1;
}
.number-board-itemInner {
  padding: 0 8px;
  text-align: center;
  line-height: 1.6;
}
.number-board-itemName {
  font-size: 14px;
  color: #8590a6;
}
.number-board-itemValue {
  display: inline-block;
  font-size: 18px;
  color: #121212;
  font-weight: 600;
}
.question-header-title {
  margin-top: 12px;
  margin-bottom: 4px;
  font-size: 22px;
  font-weight: 600;
  line-height: 32px;
  color: #121212;
}
.question-header-footer {
  padding-bottom: 12px;
  margin-top: 4px;
  margin-bottom: -12px;
  background: #fff;
}
</style>
