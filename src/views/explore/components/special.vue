<template>
  <div class="special">
    <div class="content-section-header">
      <svg fill="currentColor" viewBox="0 0 24 24" width="36" height="36">
        <path
          d="M7.667 3.667h11.466a1.2 1.2 0 0 1 1.2 1.2v13.066a2.4 2.4 0 0 1-2.4 2.4H6.467V4.867a1.2 1.2 0 0 1 1.2-1.2zM4.2 9.619h1.689v10.714H5.4a2.4 2.4 0 0 1-2.4-2.4V10.82a1.2 1.2 0 0 1 1.2-1.2zm5.178-2.38a.6.6 0 0 0-.6.6v.585a.6.6 0 0 0 .6.6h8.044a.6.6 0 0 0 .6-.6v-.586a.6.6 0 0 0-.6-.6H9.378zm0 3.57a.6.6 0 0 0-.6.6v.586a.6.6 0 0 0 .6.6h8.044a.6.6 0 0 0 .6-.6v-.585a.6.6 0 0 0-.6-.6H9.378zm0 3.572a.6.6 0 0 0-.6.6v.586a.6.6 0 0 0 .6.6h4.578a.6.6 0 0 0 .6-.6v-.586a.6.6 0 0 0-.6-.6H9.378z"
          fill-rule="evenodd"
        ></path>
      </svg>
      <span>最新专题</span>
    </div>
    <div class="content-section-body">
      <div class="special-body-specials">
        <div class="specials-login">
          <div class="specials-login-img">
            <img src="https://static.zhihu.com/heifetz/assets/loginBackgroundImg.2c81e205.png" />
          </div>
          <div class="specials-login-title">登录一下</div>
          <div class="specials-login-des">更多精彩内容等你发现</div>
          <div class="special-login-button">
            <button type="button" class="button-primary">登录</button>
          </div>
        </div>
        <div v-for="(card, index) in specialCardList" :key="index" class="specials-card">
          <a class="specials-card-banner">
            <img :src="card.bannerImg" />
          </a>
          <div class="specials-card-header">
            <div class="specials-card-info">
              <a>{{ card.title }}</a>
              <div>
                <span>{{ card.countUpdateTime }}</span>
                <span>{{ toThousands(card.countScan) }} 浏览</span>
              </div>
            </div>
            <div class="specials-card-followButton">
              <button>关注专题</button>
            </div>
          </div>
          <div class="specials-card-contentList">
            <div
              v-for="(content, index) in card.contentList"
              :key="index"
              class="specials-card-contentItem"
            >
              <a class="specials-card-contentTag">{{ content.contentTag }}</a>
              <a class="specials-card-contentTitle">{{ content.contentTitle }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content-section-moreButton">
      <a>
        查看更多专题
        <svg fill="currentColor" viewBox="0 0 24 24" width="25" height="25">
          <path
            d="M9.218 16.78a.737.737 0 0 0 1.052 0l4.512-4.249a.758.758 0 0 0 0-1.063L10.27 7.22a.737.737 0 0 0-1.052 0 .759.759 0 0 0-.001 1.063L13 12l-3.782 3.716a.758.758 0 0 0 0 1.063z"
            fill-rule="evenodd"
          ></path>
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
import { toThousands } from '../../../utils/index.js'
export default {
  data: function() {
    return {
      specialCardList: [
        {
          bannerImg: 'https://pic1.zhimg.com/100/v2-0abea5f4da57c83b635690c8394a9e24_hd.png',
          title: '爆肝自救指南',
          countUpdateTime: '7 小时前更新',
          countScan: '92265162',
          contentList: [
            {
              contentTag: '道理都懂的「熬夜肝需」',
              contentTitle: '哪一瞬间让你意识到，再也不能熬夜了？'
            },
            {
              contentTag: '不得不知的「必修肝货」',
              contentTitle: '怎样「尽可能」健康地通宵熬夜？'
            },
            {
              contentTag: '不杠不快的「护肝谣言」',
              contentTitle: '究竟几点之后才算熬夜？'
            }
          ]
        },
        {
          bannerImg: 'https://pic1.zhimg.com/100/v2-f0401ee6287a77d1ed9bb47dfe59fb98_hd.png',
          title: '上海高院x知乎：消费者权益日策划',
          countUpdateTime: '昨天 17:41 更新',
          countScan: '16358',
          contentList: [
            {
              contentTag: '维权通道',
              contentTitle: '@消费者，你的权益还有人在帮你守护|315'
            },
            {
              contentTag: '案例',
              contentTitle: '“戴森”吹风机只卖700块？35人获刑，总罚金1000多万'
            },
            {
              contentTag: '维权通道',
              contentTitle: '这里的消费维权通道“升级了”|315'
            }
          ]
        },
        {
          bannerImg: 'https://pic1.zhimg.com/100/v2-cef7626ad231a886194599acf11da894_hd.png',
          title: '「知」遇合肥，「问」见未来 ',
          countUpdateTime: '昨天 16:47 更新',
          countScan: '169823',
          contentList: [
            {
              contentTag: '发展脉搏',
              contentTitle: '合肥已加入「万亿俱乐部」，意味着什么？'
            },
            {
              contentTag: '城市印象',
              contentTitle: '你留在合肥生活的原因是什么？'
            },
            {
              contentTag: '文旅风情',
              contentTitle: '合肥有哪些历史古迹？如何保护？'
            }
          ]
        },
        {
          bannerImg: 'https://pic4.zhimg.com/100/v2-93a092eae73c2b80ab124b63e0f1cb7b_hd.png',
          title: '315 我的消费吐槽大会',
          countUpdateTime: '昨天 17:14 更新',
          countScan: '162613445',
          contentList: [
            {
              contentTag: '被偷走的面部信息',
              contentTitle: '如何看待 315  晚会曝光摄像头人脸识别遭滥用，需要如何解决？'
            },
            {
              contentTag: '明码标价的简历',
              contentTitle:
                '如何看待智联招聘、猎聘平台大量简历流向黑市？简历信息究竟如何被售卖出？如何有效保护个人信息？'
            },
            {
              contentTag: '瞄准老年人的诱导下载',
              contentTitle:
                '2021 年央视 315 晚会曝光老人手机诱导性广告 APP 下载陷阱，反映了哪些问题？'
            }
          ]
        }
      ]
    }
  },
  methods: {
    toThousands
  }
}
</script>

<style scoped>
@import url('../common.css');
.special-body-specials {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: space-between;
}
.specials-login {
  width: 490px;
  height: 450px;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 3px 0 rgb(26 26 26 / 10%);
  box-shadow: 0 1px 3px 0 rgb(26 26 26 / 10%);
}
.specials-login-img {
  width: 100%;
}
.specials-login-img img {
  width: 100%;
  height: 100%;
}
.specials-login-title {
  height: 48px;
  margin: 32px auto 4px;
  font-size: 34px;
  font-weight: 500;
  text-align: center;
  color: #121212;
}
.specials-login-des {
  height: 30px;
  margin: 4px auto 36px;
  font-size: 22px;
  text-align: center;
  color: #444;
}
.special-login-button {
  width: 350px;
  margin: 0 auto 40px;
}
.special-login-button button {
  width: 100%;
  height: 36px;
  border-radius: 3px;
  border: 1px solid #06f;
}
.specials-card {
  width: 490px;
  height: 450px;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 3px 0 rgb(18 18 18 / 10%);
  box-shadow: 0 1px 3px 0 rgb(18 18 18 / 10%);
  background-color: #fff;
  overflow: hidden;
  margin-bottom: 20px;
  flex-shrink: 0;
}
.specials-card-banner {
  display: block;
  height: 200px;
}
.specials-card-banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.specials-card-header {
  display: flex;
  -webkit-box-align: center;
  height: 110px;
  margin: 0 24px;
  padding: 30px 0;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 1px solid #ebebeb;
}
.specials-card-info {
  -webkit-box-flex: 1;
  flex: 1 1;
}
.specials-card-info > a {
  width: 330px;
  max-height: 56px;
  line-height: 28px;
  font-size: 20px;
  display: -webkit-box;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-weight: 600;
}
.specials-card-info > div {
  height: 17px;
  line-height: 17px;
  margin-top: 4px;
  font-size: 12px;
  color: #999;
}
.specials-card-info span + span:before {
  content: '\B7';
  margin: 0 4px;
}
.specials-card-followButton {
  flex-shrink: 0;
  margin-left: 20px;
}
.specials-card-followButton > button {
  height: 34px;
  border-radius: 3px;
  font-size: 14px;
  font-weight: 600;
  width: 102px;
  color: #06f;
  background-color: rgba(0, 102, 255, 0.08);
  border: none;
}
.specials-card-contentList {
  margin: 20px 24px;
}
.specials-card-contentItem {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 24px;
}
.specials-card-contentTag {
  flex-shrink: 0;
  height: 24px;
  line-height: 24px;
  padding: 0 8px;
  border-radius: 5px;
  background-color: #f6f6f6;
  font-size: 12px;
  color: #8590a6;
}
.specials-card-contentTitle {
  flex: 1 1;
  margin-left: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.specials-card-contentItem + .specials-card-contentItem {
  margin-top: 12px;
}
</style>
