<template>
  <div class="column">
    <div class="content-section-header">
      <svg class="Zi Zi--EditCircle" fill="currentColor" viewBox="0 0 24 24" width="36" height="36">
        <path
          d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm4.043-15.524a.745.745 0 0 0-1.053.017l-6.857 7.071 2.237 2.17 6.857-7.071a.743.743 0 0 0-.016-1.052l-1.168-1.135zm-9.028 9.476l-.348 1.381 1.37-.39 1.274-.36-1.973-1.916-.323 1.285z"
          fill-rule="evenodd"
        ></path>
      </svg>
      <span>专栏</span>
    </div>
    <div class="content-section-body">
      <div class="columns">
        <div class="columnCard">
          <a class="columnCard-avatar">
            <img src="https://pic1.zhimg.com/v2-4003180359c22768877b60193c064c79_xl.jpg" />
          </a>
          <a class="columnCard-title">简七理财</a>
          <div class="columnCard-count">
            <span>9,865 关注</span>
            <span>542 文章</span>
          </div>
          <div class="columnCard-intro">理财更简单 人生更自由</div>
          <button class="columnCard-entryButton">进入专栏</button>
        </div>
      </div>
    </div>
    <div class="content-section-moreButton">
      <a>
        查看更多专栏
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
.columns {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.columnCard {
  -webkit-box-flex: 1;
  flex: 1 1;
  background-color: #fff;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  padding: 28px 24px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  min-width: 235px;
  height: 313px;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 3px 0 rgb(18 18 18 / 10%);
  box-shadow: 0 1px 3px 0 rgb(18 18 18 / 10%);
}
.columnCard + .columnCard {
  margin-left: 20px;
}
.columnCard-avatar {
  display: block;
  width: 80px;
  height: 80px;
}
.columnCard-avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.columnCard-title {
  margin-top: 20px;
  height: 22px;
  line-height: 22px;
  font-size: 16px;
  max-width: 187px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
}
.columnCard-count {
  margin-top: 4px;
  height: 17px;
  line-height: 17px;
  font-size: 12px;
  color: #999;
}
.columnCard-count span + span:before {
  content: '\B7';
  margin: 0 3px;
}
.columnCard-intro {
  margin-top: 20px;
  height: 40px;
  line-height: 20px;
  font-size: 14px;
  color: #444;
  text-align: center;
  display: -webkit-box;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.columnCard-entryButton {
  border-radius: 3px;
  font-weight: 600;
  background-color: rgba(0, 102, 255, 0.08);
  margin-top: 20px;
  padding: 0 16px;
  height: 34px;
  font-size: 14px;
  color: #06f;
  border: none;
  outline: none;
}
</style>
