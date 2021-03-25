<template>
  <footer class="footer">
    <a href="https://liukanshan.zhihu.com">刘看山</a>
    <a href="https://www.zhihu.com/question/19581624">知乎指南</a>
    <a href="https://www.zhihu.com/term/zhihu-terms">知乎协议</a>
    <a href="https://www.zhihu.com/app">应用</a>
    <a href="https://app.mokahr.com/apply/zhihu/3819">工作</a>
    <a href="https://www.zhihu.com/contact">联系我们</a>
    <span>© 2021 知乎</span>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped>
.footer {
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  height: 24px;
  font-size: 13px;
  color: #8590a6;
  margin-top: 64px;
}
.footer a + a:before {
  content: '\B7';
  margin: 0 4px;
}
.footer span {
  margin-left: 4px;
}
</style>
