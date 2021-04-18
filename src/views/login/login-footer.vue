<template>
  <footer class="sign-flow-homepage-footer">
    <div>
      <a target="_blank" href="https://zhuanlan.zhihu.com">知乎专栏</a>
      <a target="_blank" href="/roundtable">圆桌</a>
      <a target="_blank" href="/explore">发现</a>
      <a target="_blank" href="/app">移动应用</a>
      <a target="_blank" href="/contact">联系我们</a>
      <a target="_blank" href="https://app.mokahr.com/apply/zhihu">
        来知乎工作
      </a>
      <a target="_blank" href="/org/signup">注册机构号</a>
      <a target="_blank" href="//ir.zhihu.com">Investor Relations</a>
    </div>
    <div>
      <span>© 2021 知乎</span
      ><a target="_blank" rel="noopener noreferrer" href="https://tsm.miit.gov.cn/dxxzsp/"
        >京 ICP 证 110745 号</a
      ><a target="_blank" rel="noopener noreferrer" href="https://beian.miit.gov.cn/"
        >京 ICP 备 13052560 号 - 1</a
      ><a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802020088"
        ><img src="https://pic3.zhimg.com/80/v2-d0289dc0a46fc5b15b3363ffa78cf6c7.png" />京公网安备
        11010802020088 号</a
      ><a
        href="https://zhstatic.zhihu.com/assets/zhihu/publish-license.jpg"
        target="_blank"
        rel="noopener noreferrer"
        >出版物经营许可证</a
      ><span>互联网药品信息服务资格证书（京）- 非经营性 - 2017 - 0067</span>
    </div>
    <div>
      <a target="_blank" rel="noopener noreferrer" href="https://zhuanlan.zhihu.com/p/28852607"
        >侵权举报</a
      ><a target="_blank" rel="noopener noreferrer" href="http://www.12377.cn"
        >网上有害信息举报专区</a
      ><a target="_blank" rel="noopener noreferrer" href="/term/child-jubao">儿童色情信息举报专区</a
      ><span>违法和不良信息举报：010-82716601</span>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped>
.sign-flow-homepage-footer {
  padding-bottom: 20px;
  text-shadow: 0 1px 2px #999;
  font-size: 12px;
  line-height: 21px;
  text-align: center;
  color: #fff;
}
.sign-flow-homepage-footer a:not(:last-child)::after,
.sign-flow-homepage-footer span:not(:last-child)::after {
  content: ' · ';
  white-space: pre;
  display: inline-block;
}
.sign-flow-homepage-footer a:hover {
  text-decoration: underline;
}
</style>
