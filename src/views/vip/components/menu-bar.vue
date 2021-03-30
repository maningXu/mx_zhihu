<template>
  <div class="menuBar-root">
    <div class="menuBar-content">
      <div class="menuBar-pageLink">
        <div v-for="(item, index) in pageLinks" :key="index" class="menuBar-pageLinkItem">
          <a>{{ item.name }}</a>
          <div class="menuBar-englishName">
            <span style="font-family:Alata">{{ item.englishName }}</span>
          </div>
        </div>
      </div>
      <div class="menuBar-divider"></div>
      <div class="menuBar-typeLink">
        <a v-for="(item, index) in typeLinks" :key="index"> {{ item.name }}</a>
        <a class="menuBar-typeLinkItem-more">更多...</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      pageLinks: [
        {
          name: '盐选专栏',
          englishName: 'VIP COLUMN'
        },
        {
          name: '读书会',
          englishName: 'BOOK CLUB'
        },
        {
          name: 'Live 讲座',
          englishName: 'LIVELECTURE'
        },
        {
          name: '小说',
          englishName: 'FICTION'
        },
        {
          name: '杂志',
          englishName: 'MAGAZINE'
        }
      ],
      typeLinks: [
        { name: '科学' },
        { name: '前沿' },
        { name: '财商' },
        { name: '文学' },
        { name: '艺术' },
        { name: '社科' },
        { name: '成长' },
        { name: '职人' },
        { name: '通关' },
        { name: '乐活' },
        { name: '亲密' },
        { name: '亲子' },
        { name: '故事' }
      ]
    }
  }
}
</script>

<style scoped>
.menuBar-root {
  height: 78px;
  background-color: #fff;
  border-bottom: 10px solid #f8f8fa;
}
.menuBar-content {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin: 0 auto;
  width: 1130px;
  height: 100%;
}
.menuBar-pageLink {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  width: 510px;
  height: 100%;
}
.menuBar-pageLinkItem {
  width: 74px;
  height: 100%;
}
.menuBar-pageLinkItem > a {
  display: block;
  margin-top: 26px;
  text-align: center;
  font-size: 16px;
  line-height: 16px;
  font-weight: 500;
  text-decoration: none;
  color: #444;
  cursor: pointer;
}
.menuBar-pageLinkItem > a:hover {
  color: #ce994f;
}
.menuBar-englishName {
  transform: scale(0.83);
  font-size: 12px;
  color: #f8e2c4;
  text-align: center;
}
.menuBar-divider {
  margin: 0 32px 0 15px;
  width: 1px;
  height: 50px;
  background-color: #f6f6f6;
}
.menuBar-typeLink {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 572px;
  height: 50px;
  padding: 14px 0;
}
.menuBar-typeLink a {
  display: block;
  margin-right: 30px;
  width: 50px;
  font-size: 14px;
  line-height: 25px;
  text-decoration: none;
  color: #444;
  cursor: pointer;
}
.menuBar-typeLink a:hover {
  color: #ce994f;
}
.menuBar-typeLink .menuBar-typeLinkItem-more {
  font-weight: 600;
  color: #ce994f;
}
</style>
