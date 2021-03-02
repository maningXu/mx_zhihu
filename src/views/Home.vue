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
      <div class="question-header-footer">
        <div class="question-header-footer-inner">
          <div class="question-header-footer-main">
            <div class="question-button-group">
              <button type="button" class="button-primary">
                关注问题
              </button>
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
                style="margin-right: 16px;"
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
    <div class="question-main">
      <div class="question-main-column"></div>
      <div class="question-side-column">
        <div>
          <div>
            <div class="card">
              <a class="app-banner-link" href="http://zhi.hu/BDXoI"
                ><div class="app-banner-layout">
                  <img
                    class="app-banner-qrcode"
                    src="https://static.zhihu.com/heifetz/assets/sidebar-download-qrcode.7caef4dd.png"
                    alt="QR Code of Downloading Zhihu App"
                  />
                  <div class="app-banner-content">
                    <div class="app-banner-title">下载知乎客户端</div>
                    <div class="app-banner-description">
                      与世界分享知识、经验和见解
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class="card">
              <div class="pc-card card">
                <a href="https://www.zhihu.com/special/19600305" target="_blank"
                  ><img
                    src="https://pic4.zhimg.com/v2-095140d12ddec3db33f48e29a049fed3_540x450.jpeg"
                    alt="广告"
                /></a>
                <div
                  class="pc-card-button-close"
                  data-tooltip="不再显示"
                  data-tooltip-position="bottom"
                >
                  <svg viewBox="0 0 12 12">
                    <path
                      fill-rule="evenodd"
                      d="M3 2L2 3l3 3-3 3 1 1 3-3 3 3 1-1-3-3 3-3-1-1-3 3"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header">
                <div class="card-header-text">相关问题</div>
              </div>
              <div class="card-section">
                <div class="similar-questions-item">
                  <meta
                    itemprop="name"
                    content="假设全球的电子设备忽然强行插进一条网站，网站自称他们里面的视频，都是平行世界里发生的，会有什么影响？"
                  /><meta
                    itemprop="url"
                    content="https://www.zhihu.com/question/443475951"
                  /><meta itemprop="answerCount" content="7" /><meta
                    itemprop="zhihu:followerCount"
                    content="9"
                  /><a
                    target="_blank"
                    type="button"
                    class="similar-questions-link"
                    href="/question/443475951"
                    >假设全球的电子设备忽然强行插进一条网站，网站自称他们里面的视频，都是平行世界里发生的，会有什么影响？</a
                  >
                  7 个回答
                </div>
                <div
                  class="similar-questions-item"
                  itemprop="zhihu:similarQuestion"
                  itemtype="http://schema.org/Question"
                >
                  <meta
                    itemprop="name"
                    content="为什么很多用户提供内容的网站都有“举报”功能？这个功能为什么不叫“投诉”呢？"
                  /><meta
                    itemprop="url"
                    content="https://www.zhihu.com/question/39542102"
                  /><meta itemprop="answerCount" content="12" /><meta
                    itemprop="zhihu:followerCount"
                    content="37"
                  /><a
                    target="_blank"
                    type="button"
                    class="similar-questions-link"
                    href="/question/39542102"
                    >为什么很多用户提供内容的网站都有“举报”功能？这个功能为什么不叫“投诉”呢？</a
                  >
                  12 个回答
                </div>
                <div
                  class="similar-questions-item"
                  itemprop="zhihu:similarQuestion"
                  itemtype="http://schema.org/Question"
                >
                  <meta
                    itemprop="name"
                    content="App营销推广网站有哪些？想学学"
                  /><meta
                    itemprop="url"
                    content="https://www.zhihu.com/question/19963516"
                  /><meta itemprop="answerCount" content="8" /><meta
                    itemprop="zhihu:followerCount"
                    content="86"
                  /><a
                    target="_blank"
                    type="button"
                    class="similar-questions-link"
                    href="/question/19963516"
                    >App营销推广网站有哪些？想学学</a
                  >
                  8 个回答
                </div>
                <div
                  class="similar-questions-item"
                  itemprop="zhihu:similarQuestion"
                  itemtype="http://schema.org/Question"
                >
                  <meta
                    itemprop="name"
                    content="为什么一些用户体验很好的网站很少让人熟知呢？"
                  /><meta
                    itemprop="url"
                    content="https://www.zhihu.com/question/19806311"
                  /><meta itemprop="answerCount" content="17" /><meta
                    itemprop="zhihu:followerCount"
                    content="38"
                  /><a
                    target="_blank"
                    type="button"
                    class="similar-questions-link"
                    href="/question/19806311"
                    >为什么一些用户体验很好的网站很少让人熟知呢？</a
                  >
                  17 个回答
                </div>
                <div
                  class="similar-questions-item"
                  itemprop="zhihu:similarQuestion"
                  itemtype="http://schema.org/Question"
                >
                  <meta itemprop="name" content="怎样才能做好网站？" /><meta
                    itemprop="url"
                    content="https://www.zhihu.com/question/19659579"
                  /><meta itemprop="answerCount" content="7" /><meta
                    itemprop="zhihu:followerCount"
                    content="9"
                  /><a
                    target="_blank"
                    type="button"
                    class="similar-questions-link"
                    href="/question/19659579"
                    >怎样才能做好网站？</a
                  >
                  7 个回答
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header">
                <div class="card-header-text">相关推荐</div>
              </div>
              <div class="card-section">
                <a
                  target="_blank"
                  href="/pub/book/119926243"
                  type="button"
                  class="related-commodities-item"
                  ><img
                    src="https://pic2.zhimg.com/90/v2-09bd7fb98b2eb4b14c67dce948933c5e_250x0.jpg?source=31184dd1"
                    alt="live"
                  />
                  <div class="related-commodities-content">
                    <div
                      class="related-commodities-subject"
                      data-tooltip="网站规划与网页设计"
                    >
                      网站规划与网页设计
                    </div>
                    <div class="related-commodities-description">
                      张兵义 吴燕军 袁彩虹等编著
                    </div>
                    <div class="related-commodities-meta">
                      <div class="related-commodities-book-meta">
                        6 人读过<span class="related-commodities-book-read"
                          ><span
                            style="display: inline-flex; align-items: center;"
                          >
                            <svg
                              class="Zi Zi--Ebook"
                              width="13"
                              height="14"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                d="M16 17.649V2.931a.921.921 0 0 0-.045-.283.943.943 0 0 0-1.182-.604L4.655 5.235A.932.932 0 0 0 4 6.122v14.947c0 .514.421.931.941.931H19.06c.52 0 .941-.417.941-.93V7.292a.936.936 0 0 0-.941-.931h-.773v12.834a.934.934 0 0 1-.83.924L6.464 21.416c-.02.002 2.94-.958 8.883-2.881a.932.932 0 0 0 .653-.886z"
                                fill-rule="evenodd"
                              ></path></svg></span
                          >阅读</span
                        >
                      </div>
                    </div>
                  </div></a
                ><a
                  target="_blank"
                  href="/pub/book/119915950"
                  type="button"
                  class="related-commodities-item"
                  ><img
                    src="https://pic1.zhimg.com/90/v2-f2b3fc3dcb59035343ed1a4d1b536a6f_250x0.jpg?source=31184dd1"
                    alt="live"
                  />
                  <div class="related-commodities-content">
                    <div
                      class="related-commodities-subject"
                      data-tooltip="电子商务网站推广"
                    >
                      电子商务网站推广
                    </div>
                    <div class="related-commodities-description">
                      童红斌主编
                    </div>
                    <div class="related-commodities-meta">
                      <div class="related-commodities-book-meta">
                        5 人读过
                        <span class="related-commodities-book-read"
                          ><svg
                            class="Zi Zi--Ebook"
                            width="13"
                            height="14"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M16 17.649V2.931a.921.921 0 0 0-.045-.283.943.943 0 0 0-1.182-.604L4.655 5.235A.932.932 0 0 0 4 6.122v14.947c0 .514.421.931.941.931H19.06c.52 0 .941-.417.941-.93V7.292a.936.936 0 0 0-.941-.931h-.773v12.834a.934.934 0 0 1-.83.924L6.464 21.416c-.02.002 2.94-.958 8.883-2.881a.932.932 0 0 0 .653-.886z"
                              fill-rule="evenodd"
                            ></path></svg
                          >阅读</span
                        >
                      </div>
                    </div>
                  </div></a
                ><a
                  target="_blank"
                  href="/pub/book/119940967"
                  type="button"
                  class="related-commodities-item"
                  ><img
                    src="https://pic1.zhimg.com/90/v2-03b60cad0c0e32401c5070b764233d0d_250x0.jpg?source=31184dd1"
                    alt="live"
                  />
                  <div class="related-commodities-content">
                    <div
                      class="related-commodities-subject"
                      data-tooltip="网页制作与网站建设宝典"
                    >
                      网页制作与网站建设宝典
                    </div>
                    <div class="related-commodities-description">
                      张春晓 黄勇等编著
                    </div>
                    <div class="related-commodities-meta">
                      <div class="related-commodities-book-meta">
                        4 人读过<span class="related-commodities-book-read"
                          ><span
                            style="display: inline-flex; align-items: center;"
                            ><svg
                              class="Zi Zi--Ebook"
                              width="13"
                              height="14"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                d="M16 17.649V2.931a.921.921 0 0 0-.045-.283.943.943 0 0 0-1.182-.604L4.655 5.235A.932.932 0 0 0 4 6.122v14.947c0 .514.421.931.941.931H19.06c.52 0 .941-.417.941-.93V7.292a.936.936 0 0 0-.941-.931h-.773v12.834a.934.934 0 0 1-.83.924L6.464 21.416c-.02.002 2.94-.958 8.883-2.881a.932.932 0 0 0 .653-.886z"
                                fill-rule="evenodd"
                              ></path></svg></span
                          >阅读</span
                        >
                      </div>
                    </div>
                  </div></a
                >
              </div>
            </div>
            <div class="Card">
              <div class="Pc-card Card">
                <a
                  class="Banner-link"
                  href="https://www.zhihu.com/xen/market/ecom-page/1349692661696274432?utm_source=web"
                  target="_blank"
                  ><div class="Banner-adTag">广告</div>
                  <img
                    class="Banner-image"
                    src="https://pic3.zhimg.com/v2-b83364ebeac405b6fb11c2d74bd7feb2_540x450.png"
                    alt="广告"
                /></a>
                <div
                  class="Pc-card-button-close "
                  data-tooltip="不再显示"
                  data-tooltip-position="bottom"
                >
                  svg
                </div>
              </div>
            </div>
            <footer class="Footer">
              <a
                class="Footer-item"
                target="_blank"
                rel="noopener noreferrer"
                href="//liukanshan.zhihu.com/"
                >刘看山</a
              ><span class="Footer-dot"></span
              ><a
                class="Footer-item"
                target="_blank"
                rel="noopener noreferrer"
                href="/question/19581624"
                >知乎指南</a
              ><span class="Footer-dot"></span
              ><a
                class="Footer-item"
                target="_blank"
                rel="noopener noreferrer"
                href="/term/zhihu-terms"
                >知乎协议</a
              ><span class="Footer-dot"></span
              ><a
                class="Footer-item"
                target="_blank"
                rel="noopener noreferrer"
                href="/term/privacy"
                >知乎隐私保护指引</a
              ><br /><a class="Footer-item" target="_blank" href="/app">应用</a
              ><span class="Footer-dot"></span
              ><a
                class="Footer-item"
                target="_blank"
                rel="noopener noreferrer"
                href="https://app.mokahr.com/apply/zhihu"
                >工作</a
              ><span class="Footer-dot"></span
              ><button type="button" class="Button OrgCreateButton">
                申请开通知乎机构号</button
              ><br /><a
                class="Footer-item"
                target="_blank"
                rel="noopener noreferrer"
                href="https://zhuanlan.zhihu.com/p/28852607"
                >侵权举报</a
              ><span class="Footer-dot"></span
              ><a
                class="Footer-item"
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.12377.cn"
                >网上有害信息举报专区</a
              ><br /><a
                class="Footer-item"
                target="_blank"
                rel="noopener noreferrer"
                href="https://tsm.miit.gov.cn/dxxzsp/"
                >京 ICP 证 110745 号</a
              ><br /><a
                class="Footer-item"
                target="_blank"
                rel="noopener noreferrer"
                href="https://beian.miit.gov.cn/"
                >京 ICP 备 13052560 号 - 1</a
              ><br /><a
                class="Footer-item"
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802020088"
                ><img
                  src="https://pic3.zhimg.com/80/v2-d0289dc0a46fc5b15b3363ffa78cf6c7.png"
                />京公网安备 11010802020088 号</a
              ><br /><span class="Footer-item"
                >互联网药品信息服务资格证书<br />（京）- 非经营性 - 2017 -
                0067</span
              ><span class="Footer-item">违法和不良信息举报：010-82716601</span
              ><br /><a
                class="Footer-item"
                target="_blank"
                href="/term/child-jubao"
                >儿童色情信息举报专区</a
              ><br /><a class="Footer-item" target="_blank" href="/certificates"
                >证照中心</a
              ><br /><a class="Footer-item" target="_blank" href="/contact"
                >联系我们</a
              ><span> © 2021 知乎</span>
            </footer>
          </div>
        </div>
      </div>
    </div>
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
.question-main {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 10px auto;
  padding: 0 16px;
  width: 1000px;
  min-height: 100vh;
}
.question-main-column {
  width: 694px;
  padding-bottom: 20px;
}
.question-side-column {
  width: 296px;
}
.app-banner-link {
  display: block;
}
.app-banner-layout {
  display: flex;
  align-items: center;
  padding: 12px;
}
.app-banner-qrcode {
  width: 50px;
  height: 50px;
  margin-right: 12px;
}
.app-banner-content {
  flex: 1 1;
}
.app-banner-title {
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  color: #444;
}
.app-banner-description {
  margin-top: 2px;
  font-size: 14px;
  line-height: 20px;
  color: #444;
}
.pc-card {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  border-radius: 2px;
  overflow: hidden;
  transition: height 0.3s, margin 0.3s, opacity 0.3s;
}
.pc-card img {
  display: block;
  width: 100%;
  border-radius: 2px;
}
.pc-card-button-close {
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  padding: 0;
  border-color: transparent;
  border-radius: 50%;
  background-color: #1a1a1a;
  opacity: 0;
  transition: opacity 0.3s;
}
.pc-card:hover .pc-card-button-close {
  opacity: 1;
}
.pc-card-button-close svg {
  width: 14px;
  height: 16px;
  fill: #fff;
}
.similar-questions-item {
  font-size: 14px;
  line-height: 21px;
  color: #8590a6;
}
.similar-questions-link {
  display: inline;
  height: auto;
  line-height: inherit;
  padding: 0;
  border: none;
  border-radius: 0;
  word-break: break-word;
  color: #175199;
  background-color: transparent;
}
.similar-questions-link:hover {
  border-bottom: 1px solid #175199;
}
.similar-questions-item + .similar-questions-item {
  margin-top: 10px;
}
.related-commodities-item {
  display: flex;
  height: auto;
  padding: 0;
  line-height: inherit;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  background: none;
  background-color: transparent;
  border: none;
  border-radius: 0;
  color: #8590a6;
}
.related-commodities-item:not(:first-child) {
  position: relative;
  margin-top: 10px;
  padding-top: 10px;
}
.related-commodities-item:not(:first-child):before {
  border-top: 1px solid #d3d3d3;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: block;
  content: "";
}
.related-commodities-item > img {
  width: 80px;
  height: 64px;
  border-radius: 3px;
  margin-right: 8px;
  object-fit: cover;
}
.related-commodities-content {
  display: flex;
  flex-direction: column;
  flex: 1 1;
  text-align: left;
  overflow: hidden;
}
.related-commodities-subject {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 14px;
  font-weight: 600;
  color: #121212;
}
.related-commodities-description {
  margin-top: 6px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #646464;
}
.related-commodities-meta {
  margin-top: 4px;
  display: flex;
  color: #8590a6;
}
.related-commodities-book-meta {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.related-commodities-book-read {
  background: #06f;
  padding: 3px 6px 3px 3px;
  border-radius: 3px;
  line-height: 1;
  color: #fff;
}
</style>
