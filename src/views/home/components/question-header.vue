<template>
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
    <div class="question-header-footer">
      <div class="question-header-footer-inner">
        <div class="question-header-footer-main">
          <div class="question-button-group">
            <button type="button" class="button-primary">关注问题</button>
            <button type="button" class="button-blue">
              <span>
                <svg
                  class="question-button-icon"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                >
                  <path
                    d="M4.076 16.966a4.19 4.19 0 0 1 1.05-1.76l8.568-8.569a.524.524 0 0 1 .741 0l2.928 2.927a.524.524 0 0 1 0 .74l-8.568 8.57c-.49.49-1.096.852-1.761 1.051l-3.528 1.058a.394.394 0 0 1-.49-.488l1.06-3.53zM20.558 4.83c.59.59.59 1.546 0 2.136l-1.693 1.692a.503.503 0 0 1-.712 0l-2.812-2.812a.504.504 0 0 1 0-.712l1.693-1.693a1.51 1.51 0 0 1 2.135 0l1.389 1.389z"
                  ></path>
                </svg>
              </span>
              写回答
            </button>
          </div>
          <div class="question-header-actions">
            <button
              type="button"
              class="Button Button--grey Button--withIcon Button--withLabel"
              style="margin-right: 16px"
            >
              <span>
                <svg
                  class="question-button-icon"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  width="1.2em"
                  height="1.2em"
                >
                  <path
                    d="M4 10V8a1 1 0 1 1 2 0v2h2a1 1 0 0 1 0 2H6v2a1 1 0 0 1-2 0v-2H2a1 1 0 0 1 0-2h2zm10.455 2c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-7 6c0-2.66 4.845-4 7.272-4C17.155 14 22 15.34 22 18v1.375c0 .345-.28.625-.625.625H8.08a.625.625 0 0 1-.625-.625V18z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </span>
              邀请回答
            </button>
            <div class="GoodQuestionAction">
              <button type="button">
                <span>
                  <svg
                    class="question-button-icon"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    width="1.2em"
                    height="1.2em"
                  >
                    <path
                      d="M14.445 9h5.387s2.997.154 1.95 3.669c-.168.51-2.346 6.911-2.346 6.911s-.763 1.416-2.86 1.416H8.989c-1.498 0-2.005-.896-1.989-2v-7.998c0-.987.336-2.032 1.114-2.639 4.45-3.773 3.436-4.597 4.45-5.83.985-1.13 3.2-.5 3.037 2.362C15.201 7.397 14.445 9 14.445 9zM3 9h2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                好问题2122
              </button>
            </div>
            <div>
              <button type="button">
                <span>
                  <svg
                    class="question-button-icon"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    width="1.2em"
                    height="1.2em"
                  >
                    <path
                      d="M10.241 19.313a.97.97 0 0 0-.77.2 7.908 7.908 0 0 1-3.772 1.482.409.409 0 0 1-.38-.637 5.825 5.825 0 0 0 1.11-2.237.605.605 0 0 0-.227-.59A7.935 7.935 0 0 1 3 11.25C3 6.7 7.03 3 12 3s9 3.7 9 8.25-4.373 9.108-10.759 8.063z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                79 条评论
              </button>
            </div>
            <div>
              <div>
                <button type="button">
                  <span>
                    <svg
                      class="question-button-icon"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      width="1.2em"
                      height="1.2em"
                    >
                      <path
                        d="M2.931 7.89c-1.067.24-1.275 1.669-.318 2.207l5.277 2.908 8.168-4.776c.25-.127.477.198.273.39L9.05 14.66l.927 5.953c.18 1.084 1.593 1.376 2.182.456l9.644-15.242c.584-.892-.212-2.029-1.234-1.796L2.93 7.89z"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  分享
                </button>
              </div>
            </div>
            <div class="Popover">
              <button>
                <span>
                  <svg
                    class="question-button-icon"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    width="1.2em"
                    height="1.2em"
                  >
                    <path
                      d="M5 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
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
};
</script>

<style scoped>
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
.question-header-footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1000px;
  height: 100%;
  padding: 0 16px;
  margin: 0 auto;
}
.question-header-footer-main {
  display: flex;
  align-items: center;
  min-width: 694px;
  width: auto;
  padding-left: 20px;
  margin-top: 4px;
  box-sizing: border-box;
}
.question-button-group {
  display: inline-block;
  margin: 0 -8px;
}
.question-button-group button {
  margin: 0 8px;
}
.question-button-icon {
  vertical-align: text-bottom;
  margin-right: 4px;
}
.question-header-actions {
  display: flex;
  align-items: center;
  margin-left: 16px;
}
.question-header-actions > div button {
  border: none;
  background: transparent;
}
.question-header-actions > div button:hover {
  color: #76839b;
}
</style>