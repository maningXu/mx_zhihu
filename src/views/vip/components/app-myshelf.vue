<template>
  <div class="myshelf-root">
    <div class="myshelf-title">
      我的书架
      <div class="myshelf-jumpToShelf">
        <span>前往书架</span>
        <svg viewBox="0 0 48 48" height="15" width="15" fill="currentColor">
          <path
            d="M19.608 11.291a1.04 1.04 0 0 0-1.428-.02l-1.88 1.782a.968.968 0 0 0-.02 1.388l9.49 9.556-9.49 9.555a.973.973 0 0 0 .02 1.388l1.88 1.782a1.036 1.036 0 0 0 1.428-.02L31.703 24.7a.991.991 0 0 0 0-1.404L19.608 11.29z"
            fill-rule="evenodd"
          ></path>
        </svg>
      </div>
    </div>
    <div class="myshelf-dividerLine"></div>
    <div class="myshelf-content">
      <div v-for="(item, index) in myshelfList" :key="index" class="myshelf-bookCell">
        <div class="myShelf-avatar">
          <div class="image-imageWrapper skuAvatar-artwork">
            <img
              class="skuAvatar-artwork"
              src="https://pic1.zhimg.com/v2-65fba93d3bb840b223addf89052a506d.png"
            />
            <img class="image-image" :src="item.img" />
          </div>
          <div class="cellLabel-type">
            <span class="verticalMiddle-root">训练营</span>
          </div>
        </div>
        <div class="myShelf-bookInfo">
          <div class="myShelf-bookTitle">{{ item.bookTitle }}</div>
          <div class="myShelf-updateStatus">{{ item.updateStatus }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      myshelfList: [
        {
          img: 'https://pic1.zhimg.com/50/v2-8eac6b26f9577dcd93c1497795961b27.webp',
          bookTitle: '测试_20210406_登记-副本-副本',
          updateStatus: '已读 0%'
        },
        {
          img: 'https://pic1.zhimg.com/50/v2-204698d8a6013f7b7814353c76696af8.webp',
          bookTitle: '22 考研：小白偷跑计划 第19 期',
          updateStatus: '已读 0%'
        },
        {
          img: 'https://pic1.zhimg.com/50/v2-de7f323d7a7d3f90f21ecc67d178fdba.webp',
          bookTitle: '3 天短视频小白赚钱课-第 26 期',
          updateStatus: '已读 0%'
        },
        {
          img: 'https://pic1.zhimg.com/50/v2-5b7d0e60b39626ac80a73175c1d3d088.webp',
          bookTitle: '作废',
          updateStatus: '已读 0%'
        },
        {
          img: 'https://pic1.zhimg.com/50/v2-9aa1fd0c2c985a878d823bb1c5269d8b.webp',
          bookTitle: '4.2',
          updateStatus: '已读 0%'
        },
        {
          img: 'https://pic1.zhimg.com/50/v2-204698d8a6013f7b7814353c76696af8.webp',
          bookTitle: '22 考研：小白偷跑计划 第19 期',
          updateStatus: '已读 0%'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* common */
.image-imageWrapper {
  position: relative;
  flex-shrink: 0;
}
.skuAvatar-artwork {
  width: 100%;
  height: 100%;
}
.image-image {
  font-size: 12px;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  -o-object-fit: cover;
  object-fit: cover;
}
.cellLabel-type {
  font-size: 18px;
  position: absolute;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 0 8px;
  line-height: 30px;
  transform: scale(0.5);
  transform-origin: 100% 100%;
  white-space: nowrap;
  color: #121212;
  background-color: hsla(0, 0%, 100%, 0.8);
  right: 0;
  bottom: 0;
  box-shadow: unset;
  height: 28px;
  font-weight: 500;
  border-radius: 12px 0 0 0;
}
.verticalMiddle-root {
  line-height: normal;
}
.myshelf-root {
  position: sticky;
  top: 62px;
  width: 100%;
}
.myshelf-title {
  position: relative;
  width: 280px;
  height: 20px;
  margin-top: 4px;
  border-left: 4px solid #ce994f;
  text-indent: 16px;
  font-size: 19px;
  line-height: 20px;
  color: #121212;
  font-weight: 600;
}
.myshelf-jumpToShelf {
  float: right;
  display: block;
  line-height: 20px;
  font-size: 12px;
  font-weight: 400;
  color: #8590a6;
  text-decoration: none;
  cursor: pointer;
}
.myshelf-jumpToShelf span:hover {
  color: #ce994f;
}
.myshelf-jumpToShelf svg {
  margin-top: 2px;
  display: block;
  float: right;
}
.myshelf-dividerLine {
  margin: 25px 0 20px;
  width: 280px;
  height: 1px;
  background-color: #ebebeb;
}
.myshelf-content {
  position: relative;
  width: 280px;
  height: calc(100vh - 170px);
  overflow-x: hidden;
  overflow-y: scroll;
}
.myshelf-bookCell {
  margin-bottom: 12px;
  width: 100%;
  height: 94px;
}
.myShelf-avatar {
  position: relative;
  overflow: hidden;
  border-radius: 0;
  float: left;
  width: 70px;
  height: 94px;
  cursor: pointer;
}

.myShelf-bookInfo {
  position: relative;
  margin-left: 82px;
  height: 100%;
}
.myShelf-bookTitle {
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.7px;
  color: #1a1a1a;
  cursor: pointer;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
}
.myShelf-updateStatus {
  position: absolute;
  left: 0;
  bottom: 0;
  font-size: 12px;
  line-height: 17px;
  letter-spacing: 0.6px;
  color: #999;
}
</style>
