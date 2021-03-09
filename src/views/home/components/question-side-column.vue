<template>
  <div class="question-side-column">
    <div>
      <div>
        <div class="card" key="qrcode-download">
          <a class="app-banner-link" href="http://zhi.hu/BDXoI">
            <div class="app-banner-layout">
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
        <div class="card" key="ad-special">
          <div class="pc-card card">
            <a href="https://www.zhihu.com/special/19600305" target="_blank">
              <img
                src="https://pic1.zhimg.com/v2-e167c03fa8e1bf28da7482a9a88f726c_540x450.jpeg"
                alt="广告"
              />
            </a>
            <div class="pc-card-button-close">
              <svg viewBox="0 0 12 12">
                <path
                  fill-rule="evenodd"
                  d="M3 2L2 3l3 3-3 3 1 1 3-3 3 3 1-1-3-3 3-3-1-1-3 3"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div class="card" key="similar-question">
          <div class="card-header">
            <div class="card-header-text">相关问题</div>
          </div>
          <div class="card-section">
            <div
              v-for="(item, index) in similarQuestionList"
              :key="index"
              class="similar-questions-item"
            >
              <a target="_blank" type="button" class="similar-questions-link">
                {{ item.content }}
              </a>
              {{ item.count }} 个回答
            </div>
          </div>
        </div>
        <div class="card" key="related-recommend">
          <div class="card-header">
            <div class="card-header-text">相关推荐</div>
          </div>
          <div class="card-section">
            <a
              v-for="(item, index) in relatedRecommendList"
              :key="index"
              target="_blank"
              type="button"
              class="related-commodities-item"
            >
              <img :src="item.src" alt="live" />
              <div class="related-commodities-content">
                <div class="related-commodities-subject">
                  {{ item.subject }}
                </div>
                <div class="related-commodities-description">
                  {{ item.description }}
                </div>
                <div class="related-commodities-meta">
                  <div class="related-commodities-book-meta">
                    {{ item.count }} 人读过
                    <span class="related-commodities-book-read">
                      <span style="display: inline-flex; align-items: center">
                        <svg width="13" height="14" fill="currentColor" viewBox="0 0 24 24">
                          <path
                            d="M16 17.649V2.931a.921.921 0 0 0-.045-.283.943.943 0 0 0-1.182-.604L4.655 5.235A.932.932 0 0 0 4 6.122v14.947c0 .514.421.931.941.931H19.06c.52 0 .941-.417.941-.93V7.292a.936.936 0 0 0-.941-.931h-.773v12.834a.934.934 0 0 1-.83.924L6.464 21.416c-.02.002 2.94-.958 8.883-2.881a.932.932 0 0 0 .653-.886z"
                            fill-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                      阅读
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="card" key="ad-market">
          <div class="pc-card card">
            <a
              href="https://www.zhihu.com/xen/market/ecom-page/1349692661696274432?utm_source=web"
              target="_blank"
            >
              <div class="banner-adTag">广告</div>
              <img
                class="banner-image"
                src="https://pic3.zhimg.com/v2-b83364ebeac405b6fb11c2d74bd7feb2_540x450.png"
                alt="广告"
              />
            </a>
            <div class="pc-card-button-close">
              <svg viewBox="0 0 12 12">
                <path
                  fill-rule="evenodd"
                  d="M3 2L2 3l3 3-3 3 1 1 3-3 3 3 1-1-3-3 3-3-1-1-3 3"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <footer class="footer">
          <a
            class="footer-item"
            target="_blank"
            rel="noopener noreferrer"
            href="//liukanshan.zhihu.com/"
          >
            刘看山
          </a>
          <span class="footer-dot"></span>
          <a
            class="footer-item"
            target="_blank"
            rel="noopener noreferrer"
            href="/question/19581624"
          >
            知乎指南
          </a>
          <span class="footer-dot"></span>
          <a class="footer-item" target="_blank" rel="noopener noreferrer" href="/term/zhihu-terms">
            知乎协议
          </a>
          <span class="footer-dot"></span>
          <a class="footer-item" target="_blank" rel="noopener noreferrer" href="/term/privacy">
            知乎隐私保护指引
          </a>
          <br />
          <a class="footer-item" target="_blank" href="/app">应用</a>
          <span class="footer-dot"></span>
          <a
            class="footer-item"
            target="_blank"
            rel="noopener noreferrer"
            href="https://app.mokahr.com/apply/zhihu"
          >
            工作
          </a>
          <span class="footer-dot"></span>
          <button type="button" class="orgCreateButton">
            申请开通知乎机构号
          </button>
          <br />
          <a
            class="footer-item"
            target="_blank"
            rel="noopener noreferrer"
            href="https://zhuanlan.zhihu.com/p/28852607"
          >
            侵权举报
          </a>
          <span class="footer-dot"></span>
          <a
            class="footer-item"
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.12377.cn"
          >
            网上有害信息举报专区
          </a>
          <br />
          <a
            class="footer-item"
            target="_blank"
            rel="noopener noreferrer"
            href="https://tsm.miit.gov.cn/dxxzsp/"
          >
            京 ICP 证 110745 号
          </a>
          <br />
          <a
            class="footer-item"
            target="_blank"
            rel="noopener noreferrer"
            href="https://beian.miit.gov.cn/"
          >
            京 ICP 备 13052560 号 - 1
          </a>
          <br />
          <a
            class="footer-item"
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802020088"
          >
            <img src="https://pic3.zhimg.com/80/v2-d0289dc0a46fc5b15b3363ffa78cf6c7.png" />
            京公网安备 11010802020088 号
          </a>
          <br />
          <span class="footer-item">
            互联网药品信息服务资格证书
            <br />
            （京）- 非经营性 - 2017 - 0067
          </span>
          <span class="footer-item">违法和不良信息举报：010-82716601</span>
          <br />
          <a class="footer-item" target="_blank" href="/term/child-jubao">
            儿童色情信息举报专区
          </a>
          <br />
          <a class="footer-item" target="_blank" href="/certificates">
            证照中心
          </a>
          <br />
          <a class="footer-item" target="_blank" href="/contact"> 联系我们 </a>
          <span> © 2021 知乎</span>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      similarQuestionList: [
        {
          content:
            '假设全球的电子设备忽然强行插进一条网站，网站自称他们里面的视频，都是平行世界里发生的，会有什么影响? ',
          count: 7
        },
        {
          content: '为什么很多用户提供内容的网站都有“举报”功能？这个功能为什么不叫“投诉”呢？',
          count: 12
        },
        {
          content: 'App营销推广网站有哪些？想学学',
          count: 8
        },
        {
          content: '为什么一些用户体验很好的网站很少让人熟知呢？',
          count: 17
        },
        {
          content: '怎样才能做好网站？',
          count: 7
        }
      ],
      relatedRecommendList: [
        {
          src:
            'https://pic2.zhimg.com/90/v2-09bd7fb98b2eb4b14c67dce948933c5e_250x0.jpg?source=31184dd1',
          subject: '网站规划与网页设计',
          description: '张兵义 吴燕军 袁彩虹等编著',
          count: 6
        },
        {
          src:
            'https://pic1.zhimg.com/90/v2-f2b3fc3dcb59035343ed1a4d1b536a6f_250x0.jpg?source=31184dd1',
          subject: '电子商务网站推广',
          description: '童红斌主编',
          count: 5
        },
        {
          src:
            'https://pic1.zhimg.com/90/v2-03b60cad0c0e32401c5070b764233d0d_250x0.jpg?source=31184dd1',
          subject: '网页制作与网站建设宝典',
          description: '张春晓 黄勇等编著',
          count: 4
        }
      ]
    }
  }
}
</script>

<style scoped>
.question-side-column {
  width: 296px;
}
.card {
  margin-bottom: 10px;
  background: #fff;
  overflow: hidden;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
  box-sizing: border-box;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0 20px;
  border-bottom: 1px solid #f6f6f6;
  box-sizing: border-box;
}
.card-header-text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 600;
}
.card-section {
  padding: 16px 20px;
  position: relative;
}

.question-side-column .card:last-of-type {
  margin-bottom: 0;
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
.related-commodities-item:hover .related-commodities-subject {
  color: #175199;
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
  content: '';
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
  color: #fff;
  line-height: 1;
}
.banner-adTag {
  position: absolute;
  right: 5px;
  bottom: 5px;
  width: 45px;
  border: 1px solid #ebebeb;
  border-radius: 5px;
  color: #ebebeb;
  background-color: #000;
  opacity: 0.5;
  font-size: 12px;
  line-height: 27px;
  text-align: center;
}
.banner-image {
  display: block;
  width: 100%;
  border-radius: 2px;
}
.footer {
  display: block;
  padding: 10px 0 10px 5px;
  font-size: 13px;
  line-height: 2;
  color: #8590a6;
}
.footer-item {
  display: inline-flex;
  align-items: center;
}
a.footer-item:hover {
  cursor: pointer;
  color: #175199;
}
.footer-dot::after {
  margin: 0 5px;
  content: '\B7';
}
.orgCreateButton {
  border: none;
  padding: 0;
}
.orgCreateButton:hover {
  background: transparent;
}
</style>
