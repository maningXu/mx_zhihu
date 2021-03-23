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
        <div class="collection-card">
          <div class="collection-card-header">
            <div class="collection-card-info">
              <a class="collection-card-title">有趣感动/惊为天人</a>
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
                <div class="collection-card-followers">2,176 人关注</div>
              </div>
            </div>
            <div class="collection-card-followButton">
              <button>关注收藏夹</button>
            </div>
          </div>
          <div class="collection-card-contentList">
            <div class="collection-card-contentItem">
              <a class="collection-card-contentTitle">被有钱人喜欢上是一种什么感觉？</a>
              <div class="collection-card-contentExcerpt">
                匿名用户：禁止转载！！！！！谢谢配合！！！ 什么感觉呢，就像打翻了调味瓶，五味杂陈。
                故事有点长。慢慢说起吧。
                很小的时候，母亲就花了三千块钱把我的户口挂在了城里的朋友家里，从此我每天往返二十几里路，在城里上起了幼儿园。小学的时候，母亲又负债花了六万块，在城里买了一套62平的二手房。房子离学校不算近，我走路到学校需要40分钟。在同学都穿着阿迪耐克的时候，我穿着十几元的运动鞋，十几元的T恤，甚至我全身上下加起来还没…
              </div>
              <div class="collection-card-contentTags">
                <span class="collection-card-contentTypeTag">回答</span>
                <span class="collection-card-contentCountTag">28,967 赞同</span>
                <span class="collection-card-contentCountTag">2,203 评论</span>
              </div>
            </div>
            <div class="collection-card-contentItem">
              <a
                class="collection-card-contentTitle"
                href="https://www.zhihu.com/answer/879928645"
                target="_blank"
                rel="noopener noreferrer"
                data-za-detail-view-id="5807"
                >删掉男友100%完成度的塞尔达，并且在他玩儿生化危机的时候吓唬他，这个有很严重吗？</a
              >
              <div class="collection-card-contentExcerpt">
                雨宫莲：之前我没开PSN会员的时候女友看我老是打游戏不陪她逛街就把电闸掰了。ps4虽然烧了不过也就是几千小时的存档，无所谓了。
                然后她生日那天，我想给她画一副画，没找到画笔，用了她几十根口红终于完成了画作并亲手送给了她，她感动的热泪盈眶。
                现在她已经是我前女友了。 大仇得报。
              </div>
              <div class="collection-card-contentTags">
                <span class="collection-card-contentTypeTag">回答</span
                ><span class="collection-card-contentCountTag">12,799 赞同</span
                ><span class="collection-card-contentCountTag">432 评论</span>
              </div>
            </div>
          </div>
          <a class="collection-card-collectedContentCount">
            已收藏 8,534 条内容
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
              ></path></svg
          ></a>
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
export default {}
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
