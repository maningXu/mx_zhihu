<template>
  <div class="question-header">
    <div class="question-header-content">
      <div class="question-header-main">
        <div class="question-header-tags">
          <div class="question-header-topics">
            <div v-for="(item, index) in topicList" :key="index" class="question-topic">
              <span class="tag-content"
                ><a class="topic-link">
                  <div class="popover">
                    <div @mouseover="showPopCard($event, item.key)" @mouseout="hidePopCard">
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
            :class="['number-board-item', { 'number-board-divider': index === 1 }]"
          >
            <div class="number-board-itemInner">
              <div class="number-board-itemName">{{ item.name }}</div>
              <strong class="number-board-itemValue" :title="item.value">
                {{ toThousands(item.value) }}
              </strong>
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
    <div
      v-show="topicCardInfo.seen"
      class="popover-content"
      :style="{ left: topicCardInfo.left, top: '101px' }"
    >
      <div class="hover-card-container">
        <div class="hover-card">
          <div>
            <div class="hover-card-titleContainer">
              <img
                class="avatar"
                width="68"
                height="68"
                :src="topicCardInfo.src"
                :srcset="topicCardInfo.srcset"
              />
              <div class="hover-card-titleText">
                <div class="hover-card-title">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="//www.zhihu.com/topic/19550581"
                    >{{ topicCardInfo.title }}</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="hover-card-item">
            <div class="hover-card-description">
              {{ topicCardInfo.content }}
            </div>
          </div>
          <div class="hover-card-item">
            <div class="hover-card-number-board">
              <a target="_blank" href="//www.zhihu.com/topic/19550581/questions" type="button"
                ><div class="hover-card-number-board-itemInner">
                  <div class="hover-card-number-board-itemName">问题</div>
                  <strong class="hover-card-number-board-itemValue" :title="topicCardInfo.question">
                    {{ toThousands(topicCardInfo.question) }}
                  </strong>
                </div></a
              ><a target="_blank" href="//www.zhihu.com/topic/19550581/top-answers" type="button"
                ><div class="hover-card-number-board-itemInner">
                  <div class="hover-card-number-board-itemName">精华</div>
                  <strong class="hover-card-number-board-itemValue" :title="topicCardInfo.essence">
                    {{ toThousands(topicCardInfo.essence) }}
                  </strong>
                </div></a
              ><a target="_blank" href="//www.zhihu.com/topic/19550581/followers" type="button"
                ><div class="hover-card-number-board-itemInner">
                  <div class="hover-card-number-board-itemName">关注者</div>
                  <strong class="hover-card-number-board-itemValue" :title="topicCardInfo.follow">
                    {{ toThousands(topicCardInfo.follow) }}
                  </strong>
                </div></a
              >
            </div>
            <div class="hover-card-buttons">
              <button type="button" class="button-primary">关注话题</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import { toThousands } from '../../../utils/index.js'
export default {
  data: function() {
    return {
      topicList: [
        { key: 'study', title: '学习' },
        { key: 'education', title: '教育' },
        { key: 'research', title: '调查类问题' },
        { key: 'website', title: '网站' },
        { key: 'recommend', title: '网站推荐' }
      ],
      topicCardInfo: {
        seen: false,
        left: '255px'
      },
      topicCardList: [
        {
          key: 'study',
          title: '学习',
          src: 'https://pic2.zhimg.com/80/v2-e811eedd93d21c5258733e5cc8182d2f_im.jpg',
          srcset: 'https://pic2.zhimg.com/80/v2-e811eedd93d21c5258733e5cc8182d2f_xl.jpg 2x',
          content:
            '学习，是指通过阅读、听讲、思考、研究、实践等途径获得知识或技能的过程。学习分为狭义与广义两种：狭义：通过阅读、听讲、研究、观察、理解、探索、实验、实践等手段获得知识或技能的过程，是一种使个体可以得到持续变化（知识和技能，方法与过程，情感与价值的改善和升华）的行为方式。例如通过学校教育获得知识的过程。广义：是人在生活过程中，通过获得经验而产生的行为或行为潜能的相对持久的行为方式。',
          question: '380997',
          essence: '1000',
          follow: '716995'
        },
        {
          key: 'education',
          title: '教育',
          src: 'https://pic4.zhimg.com/80/v2-b3b78e598881c757f5fc98065d495d1d_im.jpg',
          srcset: 'https://pic4.zhimg.com/80/v2-b3b78e598881c757f5fc98065d495d1d_xl.jpg 2x',
          content:
            '教育，教育者有目的有计划有组织的对受教育者的心智发展进行教化培育，以现有的经验、学识推敲于人，为其解释各种现象、问题或行为，以增长能力经验，其根本是以人的一种相对成熟或理性的思维来认知对待，让事物得以接近其最根本的存在，人在其中，慢慢的对一种事物由感官触摸而到以认知理解的状态，并形成一种相对完善或理性的自我意识思维...但同时，人有着自我意识上的思维，又有着其自我的感官维度，所以，任何教育性的意识思维都未必能够绝对正确，而应该感性式的理解其思维的方向，只要他不偏差事物的内在；教育又是一种思维的传授，而人因为其自身的意识形态，又有着另样的思维走势，所以，教育当以最客观、最公正的意识思维教化于人，如此，人的思维才不至于过于偏差，并因思维的丰富而逐渐成熟、理性，并由此，走向最理性的自我和拥有最正确的思维认知，这就是教育的根本所在。教育也是一种教书育人的过程，可将一种最客观的理解教予他人，而后在自己的生活经验中得以自己所认为的价值观。教育，是一种提高人的综合素质的实践活动。',
          question: '1941218',
          essence: '999',
          follow: '20420797'
        },
        {
          key: 'research',
          title: '调查类问题',
          src: 'https://pic1.zhimg.com/80/v2-b3b78e598881c757f5fc98065d495d1d_im.jpg',
          srcset:
            'https://pic4.zhimg.com/50/5e9b29029e828de2113958111461ce53_xl.png?source=54b3c3a5 2x',
          content:
            '向大范围用户询问个人看法和体验的问题。 如果调查内容过于宽泛，容易引发开放式的回答，问题可能会被建议修改或关闭。 提问之前请参考知乎的提问规范有哪些？',
          question: '164955',
          essence: '999',
          follow: '192066'
        },
        {
          key: 'website',
          title: '网站',
          src: 'https://pic1.zhimg.com/80/v2-2d85aa10db02ddcd1b421a266663e95b_im.jpg',
          srcset: 'https://pic1.zhimg.com/80/v2-2d85aa10db02ddcd1b421a266663e95b_xl.jpg 2x',
          content:
            '网站(Website)是指在因特网上根据一定的规则，使用HTML（标准通用标记语言下的一个应用）等工具制作的用于展示特定内容相关网页的集合。简单地说，网站是一种沟通工具，人们可以通过网站来发布自己想要公开的资讯，或者利用网站来提供相关的网络服务。人们可以通过网页浏览器来访问网站，获取自己需要的资讯或者享受网络服务。',
          question: '289451',
          essence: '999',
          follow: '35070'
        },
        {
          key: 'recommend',
          title: '网站推荐',
          src: 'https://pic1.zhimg.com/50/47be10149_im.jpg?source=54b3c3a5',
          srcset: 'https://pic1.zhimg.com/50/47be10149_xl.jpg?source=54b3c3a5 2x',
          content: '分享值得推荐的有趣、有益的网站。',
          question: '2926',
          essence: '1000',
          follow: '23488'
        }
      ],
      numberBoardList: [
        {
          name: '关注者',
          value: '184213'
        },
        {
          name: '被浏览',
          value: '20594652'
        }
      ]
    }
  },
  methods: {
    toThousands,
    showPopCard: function(e, key) {
      this.topicCardInfo = {
        ...this.topicCardInfo,
        ..._.find(this.topicCardList, item => item.key === key),
        seen: true,
        left: `${e.clientX - e.offsetX}px`
      }
    },
    hidePopCard: function() {
      this.topicCardInfo = {
        ...this.topicCardInfo,
        seen: false
      }
    }
  }
}
</script>

<style scoped>
img {
  width: 68px;
  aspect-ratio: auto 68 / 68;
  height: 68px;
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
.popover-content {
  position: absolute;
  z-index: 203;
  margin-top: 8px;
  border-radius: 4px;
  background: transparent;
}
.hover-card-container {
  width: 400px;
  max-height: 600px;
}
.hover-card {
  padding: 0 12px 16px;
  font-size: 14px;
  opacity: 1;
  border-radius: 2px;
  background: #fff;
  box-shadow: 0 5px 20px rgb(18 18 18 / 10%);
  transition: opacity 0.3s ease;
}
.hover-card-titleContainer {
  position: relative;
  display: flex;
  margin-top: 20px;
  padding: 8px 0;
  border-bottom: 1px solid #f6f6f6;
  align-items: center;
}
.avatar {
  position: absolute;
  top: -20px;
  border: 2px solid #fff;
  border-radius: 4px;
  background: #fff;
  object-fit: cover;
}
.hover-card-titleText {
  display: flex;
  min-height: 42px;
  padding-bottom: 2px;
  margin-left: 84px;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  flex: 1 1;
}
.hover-card-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
  font-weight: 500;
}
.hover-card-item {
  padding: 8px 0;
  line-height: 1.75;
  border-bottom: 1px solid #f6f6f6;
}
.hover-card-item:last-child {
  padding: 8px 16px;
  text-align: center;
  border: 0;
}
.hover-card-description {
  display: -webkit-box;
  max-height: 73.5px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-break: break-word;
  line-height: 1.6;
}
.hover-card-number-board {
  display: flex;
}
.hover-card-number-board > a {
  flex: 1 1;
}
.hover-card-buttons {
  margin-top: 16px;
}
.hover-card-buttons button {
  width: 144px;
}
.hover-card-number-board-itemInner {
  text-align: center;
  line-height: 1.6;
}
.hover-card-number-board-itemInner:hover .hover-card-number-board-itemName,
.hover-card-number-board-itemInner:hover .hover-card-number-board-itemValue {
  color: #175199;
}
.hover-card-number-board-itemName {
  font-size: 14px;
  color: #8590a6;
}
.hover-card-number-board-itemValue {
  display: inline-block;
  font-size: 18px;
  color: #121212;
  font-weight: 600;
}
</style>
