<template>
  <div class="round-table">
    <div class="content-section-header">
      <svg fill="currentColor" viewBox="0 0 24 24" width="36" height="36">
        <path
          d="M12 21.333a9.333 9.333 0 1 1 0-18.666 9.333 9.333 0 0 1 0 18.666zm-.66-11.287c.332.385.609.77.775 1.21.055-.054.665-.99.72-1.706.055-.385.126-1.616-.443-2.367-.443-.496-1.219-.77-1.884-.55a1.788 1.788 0 0 0-1.33 2.036c.887.276 1.607.771 2.161 1.377zm-1.33 1.541c.443-.055.941-.11 1.44 0 0-.055-.484-.936-1.108-1.486-.665-.496-1.33-.973-2.216-.771-.72.11-1.723.77-1.55 2.092.11.606.553 1.101 1.162 1.321.61-.605 1.44-1.046 2.272-1.156zm2.714.165c.056 0 1.164.055 1.828-.165.72-.275 1.412-.68 1.773-1.541.11-.276.23-1.248-.443-1.872-.72-.716-1.717-.716-2.438-.165.222.825.063 1.966-.11 2.532-.103.348-.333.88-.61 1.211zm-1.44.55c-.056 0-1.33.056-1.828.221-.72.275-1.447.668-1.773 1.541-.11.276-.21 1.26.443 1.872.665.661 1.718.661 2.438.11-.295-.811-.166-1.761.055-2.477.166-.495.388-.936.665-1.266zm5.041-.99c-.665.605-1.44.99-2.327 1.211-.443.055-.941.11-1.44 0 0 .055.554.991 1.108 1.431.665.496 1.385.771 2.216.771.72-.11 1.678-.692 1.551-2.092-.055-.605-.554-1.101-1.108-1.321zm-3.656 2.642a3.475 3.475 0 0 1-.776-1.156c-.055.055-.665.991-.72 1.707-.055.385-.101 1.506.499 2.312.443.496 1.218.77 1.883.55.887-.275 1.496-1.1 1.33-2.036a5.38 5.38 0 0 1-2.216-1.377z"
          fill-rule="evenodd"
        ></path>
      </svg>
      <span>圆桌讨论</span>
    </div>
    <div class="content-section-body">
      <div class="round-tables">
        <div v-for="(card, index) in roundTableCards" :key="index" class="round-tables-card">
          <div
            class="round-tables-card-headerContainer"
            :style="{ 'background-color': card.backgroundColor }"
          >
            <div class="round-tables-card-headerBackgrounds">
              <div
                :style="{
                  backgroundImage: card.backgroundImage,
                  backgroundPosition: 'center center'
                }"
              ></div>
              <div :style="{ background: card.backgroundFirLinear }"></div>
              <div :style="{ background: card.backgroundSecLinear }"></div>
            </div>
            <div class="round-tables-card-header">
              <a class="round-tables-card-title">{{ card.title }}</a>
              <a class="round-tables-card-intro">{{ card.intro }}</a>
              <div class="round-tables-card-info">
                <div class="round-tables-card-guests">
                  <img v-for="(img, index) in card.guestsImgs" :key="index" :src="img.src" />
                  <span>{{ card.guests }} 位嘉宾参与</span>
                </div>
                <div class="round-tables-card-count">
                  <span>{{ card.count }} 人关注</span>
                </div>
              </div>
            </div>
            <div class="round-tables-card-followButton">
              <button style="color: rgb(52, 60, 74);">
                关注圆桌
              </button>
            </div>
          </div>
          <div class="round-tables-card-questionList">
            <div
              v-for="(question, index) in card.questionList"
              :key="index"
              class="round-tables-card-questionItem"
            >
              <a class="round-tables-card-questionTitle">
                {{ question.title }}
              </a>
              <div class="round-tables-card-questionCounts">
                <span>{{ question.count }} 个回答</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content-section-moreButton">
      <a>
        查看更多圆桌
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
export default {
  data: function() {
    return {
      roundTableCards: [
        {
          backgroundColor: 'rgb(52, 60, 74)',
          backgroundImage:
            'url("https://pic2.zhimg.com/50/v2-81b94b2a911fed13495b3be8d4e0f97d_hd.jpg?source=b1f6dc53")',
          backgroundFirLinear:
            'linear-gradient(to right, rgb(52, 60, 74) 0%, rgba(52, 60, 74, 0) 100%)',
          backgroundSecLinear:
            'linear-gradient(to right, rgba(52, 60, 74, 0.5) 0%, rgba(52, 60, 74, 0) 100%)',
          title: '韩语学习分享站',
          intro: '关于韩语单词记忆，听力提升，教材推荐，来这里找答案吧',
          guestsImgs: [
            {
              src:
                'https://pic2.zhimg.com/50/v2-cddc70b6c9142f18db2e307accd952f8_720w.jpg?source=b1f6dc53'
            },
            {
              src:
                'https://pic4.zhimg.com/50/v2-5d0226c9ddc3971e36d17d3bb5afad48_720w.jpg?source=b1f6dc53'
            },
            {
              src:
                'https://pic4.zhimg.com/50/v2-b3c2fdc560d4db3ebd28441a7cc249d1_720w.jpg?source=b1f6dc53'
            }
          ],
          guests: 3,
          count: 178,
          questionList: [
            {
              title: '求求求！！有人在木槿韩语学习过吗？木槿韩语怎么样？',
              count: 4
            },
            {
              title: '有没有在木槿学习的，木槿韩语怎么样呀？',
              count: 6
            },
            {
              title: '学韩语真的有那么不好么，学了有什么用?',
              count: 129
            }
          ]
        },
        {
          backgroundColor: 'rgb(179, 164, 66)',
          backgroundImage:
            'url("https://pic4.zhimg.com/50/v2-319f3fd512f7f9318ccae3efd6a17d15_hd.jpg?source=b1f6dc53")',
          backgroundFirLinear:
            'linear-gradient(to right, rgb(179, 164, 66) 0%, rgba(179, 164, 66, 0) 100%)',
          backgroundSecLinear:
            'linear-gradient(to right, rgba(179, 164, 66, 0.5) 0%, rgba(179, 164, 66, 0) 100%)',
          title: '知食节｜春日食春',
          intro:
            '又是一年春来到，你们心中的应季美食都有哪些？老话讲「不鲜不食，不时不食」关注本期圆桌，让我们一同探讨春天的时令健康美食法则。',
          guestsImgs: [
            {
              src:
                'https://pic4.zhimg.com/50/v2-f8d47257194e05ad3a540722939c7034_720w.jpg?source=b1f6dc53'
            },
            {
              src:
                'https://pic4.zhimg.com/50/v2-8a2b1813acbeaaca78a554eabd44b9eb_720w.jpg?source=b1f6dc53'
            },
            {
              src:
                'https://pic4.zhimg.com/50/v2-2d5611cb5c09266f048e9967a94798e8_720w.jpg?source=b1f6dc53'
            }
          ],
          guests: 4,
          count: 465,
          questionList: [
            {
              title: '春天为什么要吃春卷？有哪些历史渊源？',
              count: 4
            },
            {
              title: '有哪些时令美味，适合在春天「尝第一口鲜」？',
              count: 534
            },
            {
              title: '春天吃荠菜有哪些好处？',
              count: 7
            }
          ]
        },
        {
          backgroundColor: 'rgb(61, 90, 179)',
          backgroundImage:
            'url("https://pic4.zhimg.com/50/v2-b6726c83cc06785feab6ce147ea3ce30_hd.jpg?source=b1f6dc53")',
          backgroundFirLinear:
            'linear-gradient(to right, rgb(61, 90, 179) 0%, rgba(61, 90, 179, 0) 100%)',
          backgroundSecLinear:
            'linear-gradient(to right, rgba(61, 90, 179, 0.5) 0%, rgba(61, 90, 179, 0) 100%)',
          title: '科技创新×知识产权',
          intro:
            '「创新是引领发展的第一动力，保护知识产权就是保护创新」。 ​本圆桌在知识产权保护工作的时代内涵和战略意义基础上对知识产权领域的有关探索和实践进行广泛讨论，解读主流语境下的创新变局。',
          guestsImgs: [
            {
              src:
                'https://pic4.zhimg.com/50/v2-4ec5df6e797083c9b3a519bfb0347fd4_720w.jpg?source=b1f6dc53'
            },
            {
              src:
                'https://pic1.zhimg.com/50/v2-57ca88a61e2a681bce04ccce97d206b1_720w.jpg?source=b1f6dc53'
            },
            {
              src:
                'https://pic2.zhimg.com/50/v2-ec63b203a103e3854d69848738888621_720w.jpg?source=b1f6dc53'
            }
          ],
          guests: 7,
          count: 288,
          questionList: [
            {
              title: '如何发挥知识产权在科创企业的“杠杆”作用？',
              count: 2
            },
            {
              title: '核心技术“卡脖子”，企业创新如何突围？',
              count: 7
            },
            {
              title: '如何让企业老板重视知识产权？',
              count: 2
            }
          ]
        },
        {
          backgroundColor: 'rgb(61, 90, 179)',
          backgroundImage:
            'url("https://pic2.zhimg.com/50/v2-70571dd7fd6908102b930ddb554e558b_hd.jpg?source=b1f6dc53")',
          backgroundFirLinear:
            'linear-gradient(to right, rgb(61, 90, 179) 0%, rgba(61, 90, 179, 0) 100%)',
          backgroundSecLinear:
            'linear-gradient(to right, rgba(61, 90, 179, 0.5) 0%, rgba(61, 90, 179, 0) 100%)',
          title: '哲学考研要关注哪些问题？',
          intro:
            '哲学考研如何择校？哲学考研如何备考？哲学考研如何把握重难点？哲学考研复试如何准备？哲学考研如何联系导师？哲学考研被调剂了怎么办……与哲学考研的所有问题，都来探讨下吧！',
          guestsImgs: [
            {
              src:
                'https://pic4.zhimg.com/50/v2-1569448dd7b71b23ea72bc8e76e856f9_720w.jpg?source=b1f6dc53'
            },
            {
              src:
                'https://pic2.zhimg.com/50/v2-60c0b233f41fe77253600b1c1c3c0281_720w.jpg?source=b1f6dc53'
            },
            {
              src:
                'https://pic1.zhimg.com/50/v2-212ef7fe9a0729010dde176cc107cb45_720w.jpg?source=b1f6dc53'
            }
          ],
          guests: 6,
          count: 83,
          questionList: [
            {
              title: '学哲学能做什么工作呢？',
              count: 112
            },
            {
              title: '中国哲学道家哲学考研有什么好的建议？',
              count: 7
            },
            {
              title: '考研哲学的困惑?',
              count: 8
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
@import url('../common.css');

.round-tables {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: space-between;
  height: 904px;
}
.round-tables-card {
  width: 490px;
  height: 442px;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 1px 3px 0 rgb(18 18 18 / 10%);
  overflow: hidden;
  flex-shrink: 0;
}
.round-tables-card-headerContainer {
  position: relative;
  height: 240px;
}
.round-tables-card-questionList {
  padding: 20px 24px 24px;
}
.round-tables-card-headerBackgrounds {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 240px;
}
.round-tables-card-headerBackgrounds div {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.round-tables-card-header {
  position: relative;
  width: 320px;
  padding: 68px 24px 24px;
}
.round-tables-card-title {
  display: block;
  height: 28px;
  line-height: 28px;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.round-tables-card-intro {
  height: 60px;
  line-height: 20px;
  margin-top: 12px;
  font-size: 14px;
  color: #fff;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
.round-tables-card-info {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-top: 19px;
  color: hsla(0, 0%, 100%, 0.6);
  font-size: 12px;
}
.round-tables-card-info > * {
  flex-shrink: 0;
}
.round-tables-card-guests {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}
.round-tables-card-guests {
  flex-shrink: 0;
}
.round-tables-card-guests img {
  width: 28px;
  height: 28px;
  border-radius: 4px;
}
.round-tables-card-guests span {
  margin-left: 8px;
}
.round-tables-card-guests img + img {
  margin-left: 8px;
}
.round-tables-card-count {
  height: 18px;
  line-height: 18px;
  margin-left: 12px;
  padding-left: 12px;
  border-left: 2px solid hsla(0, 0%, 100%, 0.32);
}
.round-tables-card-followButton {
  position: absolute;
  right: 24px;
  bottom: 24px;
}
.round-tables-card-followButton button {
  width: 102px;
  height: 34px;
  border-radius: 3px;
  font-size: 14px;
  font-weight: 600;
  background-color: #fff;
}
.round-tables-card-questionItem + .round-tables-card-questionItem {
  margin-top: 16px;
}
.round-tables-card-questionTitle {
  display: block;
  height: 21px;
  line-height: 21px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.round-tables-card-questionCounts {
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-top: 4px;
  height: 17px;
  line-height: 17px;
  font-size: 12px;
  color: #999;
}
</style>
