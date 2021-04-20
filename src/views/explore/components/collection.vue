<template>
  <div class="collection">
    <div class="content-section-header">
      <svg fill="currentColor" viewBox="0 0 24 24" width="36" height="36">
        <path
          d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z"
          fill-rule="evenodd"
        ></path>
      </svg>
      <span>热门收藏夹</span>
    </div>
    <div class="content-section-body">
      <div class="collections">
        <div v-for="(card, index) in cards" :key="index" class="collection-card">
          <div class="collection-card-header">
            <div class="collection-card-info">
              <a class="collection-card-title">{{ card.title }}</a>
              <div class="collection-card-relatedMembers">
                <div class="collection-card-creator">
                  <span class="collection-card-creatorAvatar">
                    <img
                      width="28"
                      height="28"
                      src="https://pic4.zhimg.com/da8e974dc_is.jpg?source=2231c908"
                      srcset="https://pic4.zhimg.com/da8e974dc_im.jpg?source=2231c908 2x"
                      alt="John Hexa"
                    />
                  </span>
                  <a class="collection-card-creatorName">John Hexa</a>
                  <span class="collection-card-creatorSuffix">创建</span>
                </div>
                <div class="collection-card-followers">
                  {{ toThousands(card.followers) }} 人关注
                </div>
              </div>
            </div>
            <div class="collection-card-followButton">
              <button>关注收藏夹</button>
            </div>
          </div>
          <div class="collection-card-contentList">
            <div
              v-for="(contentItem, index) in card.contentList"
              :key="index"
              class="collection-card-contentItem"
            >
              <a class="collection-card-contentTitle">{{ contentItem.title }}</a>
              <div class="collection-card-contentExcerpt">
                {{ contentItem.excerpt }}
              </div>
              <div class="collection-card-contentTags">
                <span class="collection-card-contentTypeTag">回答</span>
                <span class="collection-card-contentCountTag">
                  {{ toThousands(contentItem.approveCount) }} 赞同
                </span>
                <span class="collection-card-contentCountTag">
                  {{ toThousands(contentItem.commentCount) }} 评论
                </span>
              </div>
            </div>
          </div>
          <a class="collection-card-collectedContentCount">
            已收藏 {{ toThousands(card.collectionCount) }} 条内容
            <svg
              class="Zi Zi--ArrowRight"
              fill="currentColor"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                d="M9.218 16.78a.737.737 0 0 0 1.052 0l4.512-4.249a.758.758 0 0 0 0-1.063L10.27 7.22a.737.737 0 0 0-1.052 0 .759.759 0 0 0-.001 1.063L13 12l-3.782 3.716a.758.758 0 0 0 0 1.063z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div class="content-section-moreButton">
      <a>
        查看更多收藏夹
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
      cards: [
        {
          title: '有趣感动/惊为天人',
          followers: 2176,
          contentList: [
            {
              title: '被有钱人喜欢上是一种什么感觉？',
              excerpt:
                '匿名用户：禁止转载！！！！！谢谢配合！！！ 什么感觉呢，就像打翻了调味瓶，五味杂陈。 故事有点长。慢慢说起吧。 很小的时候，母亲就花了三千块钱把我的户口挂在了城里的朋友家里，从此我每天往返二十几里路，在城里上起了幼儿园。小学的时候，母亲又负债花了六万块，在城里买了一套62平的二手房。房子离学校不算近，我走路到学校需要40分钟。在同学都穿着阿迪耐克的时候，我穿着十几元的运动鞋，十几元的T恤，甚至我全身上下加起来还没…',
              approveCount: 28967,
              commentCount: 2203
            },
            {
              title:
                '删掉男友100%完成度的塞尔达，并且在他玩儿生化危机的时候吓唬他，这个有很严重吗？',
              excerpt:
                '雨宫莲：之前我没开PSN会员的时候女友看我老是打游戏不陪她逛街就把电闸掰了。ps4虽然烧了不过也就是几千小时的存档，无所谓了。 然后她生日那天，我想给她画一副画，没找到画笔，用了她几十根口红终于完成了画作并亲手送给了她，她感动的热泪盈眶。 现在她已经是我前女友了。 大仇得报。',
              approveCount: 12799,
              commentCount: 432
            }
          ],
          collectionCount: 8534
        },
        {
          title: '★★★★★',
          followers: 683,
          contentList: [
            {
              title: '《你好，李焕英》真的适合带爸妈看吗？会不会只是自己以为的适合？',
              excerpt:
                '小武和花生：不适合 围脖上看到的，真实无比。 [图片] 这个电影，根本就不是合家欢电影，大过年的，想和父母一去看电影，就看点不用动脑的。没啥内涵，不会引起争端的，乐乐呵呵就完事了。 千万不要想着上升高度去看亲情电影。哭成一团就和上学的时候搞的尴尬感恩活动有异曲同工之妙。 而且现在网上刷的热热闹闹的，什么珍惜父母，感恩父母。两代人互相理解。过个几天，大家各忙各的，这一场轰轰烈烈的感恩母亲的活动，就结束了。 父母该催婚的还是…',
              approveCount: 4258,
              commentCount: 329
            },
            {
              title: '为什么现在很多农村女孩认为一个男孩很轻易的就能拿出20几万的彩礼？',
              excerpt:
                '李明阳：20万彩礼也许不合理，但是20万对一个身体健康的普通人，不难。 之前一个送餐小哥，告诉我他的理想。 攒一笔钱，回家翻新房子，买电器，结婚。 北京送餐一个月将近一万收入，没五险一金，税交不交不知道，到手就是这些。 住差点儿的，反正一天没几个小时在家，吃他一般不操心，也是外卖，最便宜的。 （有时候餐撒漏了，客户不要了，他就又买一份新的给客户，自己吃撒漏了的那份） 一个月攒6000是可以的，一年七万。 干三年，就是…',
              approveCount: 17,
              commentCount: 13
            }
          ],
          collectionCount: 19725
        },
        {
          title: '吐槽的我很爽啊',
          followers: 6807,
          contentList: [
            {
              title: '是否可以恢复一夫一妻多妾制？',
              excerpt:
                '白色的瑞隐：我只能说你还是太年轻 我奶奶的父亲就是看上家里一个长工的未婚妻，娶了做了姨太太。对了，还把那个长工腿打断了丢出去了。 好了，假设一下，一夫一妻多妾制。 易烊千玺吴彦祖杨洋就不提了。 你带着你如花似玉的未婚妻去公司，你那个激动啊，下周你们就要领证了。在公司大门口，你那位开着法拉利，带着劳力士，财大气粗的老板摇下车窗，看了一眼你未婚妻，意味深长地笑了笑。 然后你老板在停好车后，在公司门口随便找了个借口把…',
              approveCount: 6295,
              commentCount: 744
            },
            {
              title: '敲诈公职人员的女辅警父亲发声',
              excerpt: '全民：undefined',
              approveCount: 1776,
              commentCount: 820
            }
          ],
          collectionCount: 13864
        },
        {
          title: '社科答集',
          followers: 2199,
          contentList: [
            {
              title: '为什么中国人很少宣传夏商周是奴隶制？',
              excerpt:
                'John Hexa：关于“奴隶制国家”有几个问题你们需要考虑一下： 1）在使用木棍和石器耕种的时代，一个人的产出，在扣除维持这个人做重体力劳动的最基本口粮之后，还有多少比例的口粮余量？我们总不能假设奴隶主阶层的口粮份额与奴隶一样吧？假设一名奴隶主阶层成员的口粮是奴隶的三倍。 那么需要多少名奴隶，来养活一名奴隶主？ 这个问题换算过来，就是“一个奴隶，在青铜时代，能生产出几倍于他自己份额的口粮”？能达到四倍吗？ 要达到4倍，…',
              approveCount: 41,
              commentCount: 10
            },
            {
              title: '黑格尔说汉语不宜思辨的理由是什么？',
              excerpt:
                'John Hexa：是否适合思辨和语言本身是没关系的，主要看该语种语境中既有的“思辨资产”有多少。 也就是既被清晰定义（或至少有所界定）而又广为大众所知（或至少广为学界所知）的常用概念有多少。 思辨的效率靠的是这些资产的高效运用，而不是语言本身如何。只要一个国家的学术界和学术报道业在这个问题上做了足够多有效的投资，就能做到这一点。即使是斯瓦希里语、泰米尔语，只要做了这样的投入，也一样会变得利于思辨。 只不过并非每个语…',
              approveCount: 134,
              commentCount: 32
            }
          ],
          collectionCount: 370
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
.collections {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: space-between;
  height: 748px;
}
.collection-card {
  flex-shrink: 0;
  width: 490px;
  height: 364px;
  border-radius: 4px;
  box-shadow: 0 1px 3px 0 rgb(18 18 18 / 10%);
  background-color: #fff;
}
.collection-card-header {
  display: flex;
  margin: 0 24px;
  padding: 24px 0 20px;
  box-sizing: border-box;
  height: 112px;
  border-bottom: 1px solid #ebebeb;
  overflow: hidden;
}
.collection-card-info {
  -webkit-box-flex: 1;
  -ms-flex: 1 1;
  flex: 1 1;
  overflow: hidden;
}
.collection-card-title {
  display: block;
  height: 28px;
  line-height: 28px;
  font-size: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 600;
}
.collection-card-relatedMembers {
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-top: 12px;
}
.collection-card-creator {
  height: 28px;
  line-height: 27px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}
.collection-card-creatorAvatar {
  height: 28px;
  line-height: 28px;
}
.collection-card-creatorName {
  margin-left: 8px;
  color: #444;
  font-weight: 500;
}
.collection-card-creatorSuffix {
  margin-left: 4px;
  color: #999;
  font-size: 14px;
  font-weight: 400;
}
.collection-card-followers {
  height: 19px;
  line-height: 19px;
  margin-left: 12px;
  padding-left: 12px;
  font-size: 14px;
  color: #999;
  border-left: 2px solid #ebebeb;
}
.collection-card-followButton {
  margin-left: 20px;
}
.collection-card-followButton button {
  height: 34px;
  width: 102px;
  border-radius: 3px;
  font-size: 14px;
  font-weight: 600;
  color: #06f;
  background-color: rgba(0, 102, 255, 0.08);
  border: none;
  outline: none;
}
.collection-card-contentList {
  margin: 20px 24px;
  height: 164px;
}
.collection-card-contentItem + .collection-card-contentItem {
  margin-top: 20px;
}
.collection-card-contentTitle {
  display: block;
  height: 21px;
  line-height: 21px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
}
.collection-card-contentExcerpt {
  margin-top: 4px;
  height: 21px;
  line-height: 21px;
  color: #444;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.collection-card-contentTags {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-top: 6px;
}
.collection-card-contentTags span {
  flex-shrink: 0;
}
.collection-card-contentTypeTag {
  height: 20px;
  line-height: 20px;
  margin-right: 8px;
  padding: 0 4px;
  background-color: #f6f6f6;
  color: #999;
  font-size: 12px;
}
.collection-card-contentCountTag {
  height: 17px;
  line-height: 17px;
  font-size: 12px;
  color: #999;
}
.collection-card-contentCountTag + .collection-card-contentCountTag::before {
  content: '\B7';
  margin: 0 3px;
}
.collection-card-collectedContentCount {
  height: 24px;
  margin: 20px 24px 0;
  display: flex;
  align-items: center;
  -webkit-box-align: center;
  font-weight: 600;
  font-size: 14px;
  color: #8590a6;
}
.collection-card-collectedContentCount svg {
  margin-left: 8px;
}
</style>
