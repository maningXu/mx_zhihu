<template>
  <div class="question-main-column">
    <div class="card">
      <div class="list-header">
        <h4 class="list-header-text"><span>1,610 个回答</span></h4>
        <div class="list-header-options">
          <div>
            <button type="button">
              默认排序
              <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
                <path
                  d="M12 16.183l2.716-2.966a.757.757 0 0 1 1.064.001.738.738 0 0 1 0 1.052l-3.247 3.512a.758.758 0 0 1-1.064 0L8.22 14.27a.738.738 0 0 1 0-1.052.758.758 0 0 1 1.063 0L12 16.183zm0-9.365L9.284 9.782a.758.758 0 0 1-1.064 0 .738.738 0 0 1 0-1.052l3.248-3.512a.758.758 0 0 1 1.065 0L15.78 8.73a.738.738 0 0 1 0 1.052.757.757 0 0 1-1.063.001L12 6.818z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div>
        <div class="list-item">
          <div class="content-item">
            <div class="content-item-meta">
              <div class="author-info">
                <span class="author-info-avatarWrapper">
                  <img
                    width="38"
                    height="38"
                    src="https://pic2.zhimg.com/da8e974dc_xs.jpg?source=1940ef5c"
                    srcset="https://pic2.zhimg.com/da8e974dc_l.jpg?source=1940ef5c 2x"
                    alt="知乎用户"
                  />
                </span>
                <div class="author-info-content">
                  <div class="author-info-head">
                    <span>知乎用户</span>
                  </div>
                </div>
              </div>
              <div class="voters-wrapper">
                <span
                  ><span class="voters"
                    ><button type="button">
                      85,515 人赞同了该回答
                    </button></span
                  ></span
                >
              </div>
            </div>
            <div class="rich-content">
              <div class="rich-content-inner">
                <span class="rich-text">
                  <p>
                    分享20个值得每天一看的小众精品网站，可以让你全方面得到提升，每一个都会让你大开眼界，打开新世界的大门。
                  </p>
                  <h2>1：Slant</h2>
                  <p>
                    <a
                      href="https://link.zhihu.com/?target=https%3A//www.slant.co/"
                      target="_blank"
                    >
                      <span>https://www.</span>
                      <span>slant.co/</span>
                      <span></span>
                    </a>
                  </p>
                  <p>
                    Slant
                    是一个帮助你找到最好的产品和工具的一个实用网站；它可以帮助你找到最好用的硬件，网站，软件：电脑软件，手机软件，游戏等等。
                  </p>
                  <p>
                    例如：什么是最好的跨平台媒体播放器？什么是最好的跨平台写作应用程序？什么值最好的游戏鼠标？什么是最好的广告拦截器？什么是最好的
                    Windows 音乐播放器？什么是最好的在线调查工具？ Steam 上最好的 2D
                    游戏是什么？什么是 Android 的最佳日历应用？什么是 Andriod 的最佳 PDF 查看器？
                  </p>
                  <figure>
                    <img
                      :src="imgConfig.slantFirstSrc"
                      width="1814"
                      @click="zoomImg(imgConfig.slantFirstSrc)"
                    />
                  </figure>
                  <p>
                    每个问题都会给你推荐多个工具，例如：适用于 Android 的最佳 PDF
                    查看器是什么？这里就提供了 7 个软件；还给出了更新时间和相关问题。
                  </p>
                  <figure>
                    <img
                      :src="imgConfig.slantSecondSrc"
                      width="1920"
                      @click="zoomImg(imgConfig.slantSecondSrc)"
                    />
                  </figure>
                  <p>
                    每个软件还会给出对应的优缺点，用户使用体验等等评价，让你轻松了解每个软件的优缺点并找到那个最好的软件工具。
                  </p>
                  <p>最后，如果你需要寻找最好的软件和工具，这需要利用这个网站搜索相关的关键词。</p>
                  <figure>
                    <img
                      :src="imgConfig.slantThirdSrc"
                      width="1443"
                      @click="zoomImg(imgConfig.slantThirdSrc)"
                    />
                  </figure>
                  <h2>2：Oeasy</h2>
                  <p>
                    <a href="https://link.zhihu.com/?target=http%3A//oeasy.org/">
                      <span>http://</span>
                      <span>oeasy.org/</span>
                      <span></span>
                    </a>
                  </p>
                  <p>Oeasy 是一个完全免费的综合视频教程网站，非常良心实用。</p>
                  <p>
                    它提供的视频教程非常丰富并且质量很高，包括：PS 教程、手机摄影教程、Ai
                    做图教程、Excel 教程、Word 教程、PPT 教程、Pr 视频剪辑教程、Ae 视频特效教程、Au
                    音频教程教程、Flash 教程、做网页教程、css 样式教程、js 教程、Cad
                    制图教程、电路制作教程、模电教程、Windows 教程、色彩搭配教程、Prezi
                    演示教程、Keynote 教程、做图标教程、玩字体教程。
                  </p>
                  <p>它支持视频教程全部免费下载，并且支持对应的素材和软件免费下载。</p>
                  <figure>
                    <img
                      :src="imgConfig.oeasyFirstSrc"
                      width="1920"
                      @click="zoomImg(imgConfig.oeasyFirstSrc)"
                    />
                  </figure>
                  <h2>3：WikiHow</h2>
                  <p>
                    <a
                      href="https://link.zhihu.com/?target=https%3A//zh.wikihow.com/"
                      target="_blank"
                      >https://zh.wikihow.com</a
                    >
                  </p>
                  <p>
                    WikiHow
                    免费提供各种学习，工作，生活小技能，不管学习，工作，生活遇到不会的东西，你都可以利用这个网站搜索。
                  </p>
                  <p>
                    它上面包括的技巧包括各个方面：教育与交流，旅行，计算机和电子产品，饮食和休闲，宠物和动物，健康，艺术与娱乐，家庭生活，兴趣和手艺；总之，各种不会的技能，先用这个网站搜索。
                  </p>
                  <p>
                    例如：如何给 iPhone 添加铃声，如何在忘记密码的情况下打开电脑，如何在 Excel
                    中制作工资表，如何将图片转换成
                    PDF，如何清洁电脑显示器，如何培养自己的穿衣风格，如何学习代数，如何应对夜晚孤独症，如何快速缓解咽喉炎，如何睡得更快，更香等等技巧；这个网站全部提供。
                  </p>
                  <figure>
                    <img
                      :src="imgConfig.wikiHowFirstSrc"
                      width="1672"
                      @click="zoomImg(imgConfig.wikiHowFirstSrc)"
                    />
                  </figure>
                  <h2>4：果汁排行榜</h2>
                  <p>
                    <a
                      href="https://link.zhihu.com/?target=http%3A//guozhivip.com/rank/"
                      target="_blank"
                      ><span>http://</span><span>guozhivip.com/rank/</span><span></span
                    ></a>
                  </p>
                  <p>
                    果汁排行榜是一个聚合各种排行榜的一个实用网站，你可以利用这个网站轻松查询到各个方面的排行榜。
                  </p>
                  <p>
                    它支持热搜榜，热议榜，影视榜，音乐榜，摄影榜，财富榜，产品榜，游戏榜，热门小说热议榜，App排行榜，小程序排行榜，网站排名榜，美食菜谱热议榜等等。
                  </p>
                  <p>你想了解每天的各个方面的排名，这个网站是非常实用的。</p>
                  <figure>
                    <img
                      :src="imgConfig.juiceFirstSrc"
                      width="1920"
                      @click="zoomImg(imgConfig.juiceFirstSrc)"
                    />
                  </figure>
                  <h2>5：Product Hunt</h2>
                  <p>
                    <a
                      href="https://link.zhihu.com/?target=https%3A//www.producthunt.com/"
                      target="_blank"
                      rel="nofollow noreferrer"
                      ><span>https://www.</span><span>producthunt.com/</span><span></span
                    ></a>
                  </p>
                  <p>
                    Product Hunt
                    是一个让你发现各种新产品的实用网站，你可以利用这个网站发现很多实用有趣的手机
                    App，电脑软件，网站，硬件产品，游戏，书籍等等。
                  </p>
                  <p>
                    它提供产品推荐合辑功能，比如：管理会议的最佳工具是什么，什么是最好的番茄钟计时器，什么是最好的团队聊天解决方案，你最喜欢的
                    Chrome 扩展程序是什么，设计师必备的 Mac
                    应用程序是什么，什么是头脑风暴的最佳应用程序，什么是 iphone
                    上最好的视频编辑应用，什么是最好的客户反馈系统。
                  </p>
                  <figure>
                    <img
                      :src="imgConfig.productFirstSrc"
                      width="1408"
                      @click="zoomImg(imgConfig.productFirstSrc)"
                    />
                  </figure>
                  <p>
                    它每天会挑选推荐出几十款新产品，而且这款产品都是由专门的设计师，投资人挑选出来的，保证了网站上面所有产品的质量。
                  </p>
                  <p>
                    最后，你不仅可以通过直接访问这个网站获取新产品，还可以通过邮件订阅的方式获取新产品。
                  </p>
                  <figure>
                    <img
                      :src="imgConfig.productSecondSrc"
                      width="1395"
                      @click="zoomImg(imgConfig.productSecondSrc)"
                    />
                  </figure>
                  <h2>6：大学资源网</h2>
                  <p>
                    <a
                      href="https://link.zhihu.com/?target=http%3A//www.dxzy163.com/"
                      target="_blank"
                      ><span>http://www.</span><span>dxzy163.com/</span><span></span
                    ></a>
                  </p>
                  <p>
                    大学资源网是一个功能强大并且完全免费的在线学习网站，提供了丰富并且全面的学习视频教程。
                  </p>
                  <p>
                    它提供的学习视频质量非常不错，包括：考研课程、大学课程、高中课程、初中课程、小学课程、外语课程、电脑网络、讲座系列、资格考试视频、医学视频、农业技术、文化艺术、历史地理、体育课程。
                  </p>
                  <p>考研课程包括：考研数学、考研英语、考研政治、考研专业课。</p>
                  <p>
                    大学课程包括：经济管理、医学课程、市场营销、机械电子、大学理工、公开课程、名校公开课、建筑工程、环境地理、社会科学、创新技术、电子通讯、哲学课程、自然科学、人力资源、石油化工。
                  </p>
                  <p>资格考试视频包括：工程建筑、考试认证、财会考试、公务员考试、司法考试。</p>
                  <p>最后，你还可以利用网站的搜索功能、课程排行功能，轻松找到你需要的质量课程。</p>
                  <figure>
                    <img
                      :src="imgConfig.colleageFirstSrc"
                      width="1212"
                      @click="zoomImg(imgConfig.colleageFirstSrc)"
                    />
                  </figure>
                  <h2>7：科塔学术导航</h2>
                  <p>
                    <a
                      href="https://link.zhihu.com/?target=https%3A//site.sciping.com/"
                      target="_blank"
                      ><span>https://</span><span>site.sciping.com/</span><span></span
                    ></a>
                  </p>
                  <p>科塔学术导航是一个质量非常高的学术导航网站，强烈推荐收藏。</p>
                  <p>
                    它得学术资源版块支持的学术相关网站分类包括：学术搜索，文献数据，共享资源，期刊出版，学术工具，科研软件，科研数据，设备仪器，基金项目，科学计量，人才计划，奖励荣誉，专利标准。
                  </p>
                  <p>
                    其中每一个分类又提供了很多个具体实用学术网站，学术搜索网站包括：万方数据，水土搜索，上研搜索，e读，PubMed，NSTL
                    智能检索平台，超星发现等等。
                  </p>
                  <figure>
                    <img
                      :src="imgConfig.scienceFirstSrc"
                      width="1920"
                      @click="zoomImg(imgConfig.scienceFirstSrc)"
                    />
                  </figure>
                  <p>
                    它还提供科研社交，科学传播，科研机构版块，每一个版块也会进行具体网站分类；最后，网站的常用推荐功能也可以让你发现很多高质量的学术网站。
                  </p>
                  <figure>
                    <img
                      :src="imgConfig.scienceSecondSrc"
                      width="1920"
                      @click="zoomImg(imgConfig.scienceSecondSrc)"
                    />
                  </figure>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img-preview :isPreview="isZoomInImg" :src="zoomInImgSrc" @zoom-img="zoomImg" />
  </div>
</template>

<script>
import ImgPreview from '../../../components/img-preview/index'
export default {
  components: {
    'img-preview': ImgPreview
  },
  data: function() {
    return {
      zoomInImgSrc: '',
      isZoomInImg: false, // the current img display largest size
      imgConfig: {
        slantFirstSrc:
          'https://pic4.zhimg.com/80/v2-639c333ba8d5545ce44b9b5b60b83fe3_1440w.jpg?source=1940ef5c',
        slantSecondSrc:
          'https://pic2.zhimg.com/80/v2-ac44b1432b74cb9528e5a47eded0bcae_1440w.jpg?source=1940ef5c',
        slantThirdSrc:
          'https://pic1.zhimg.com/80/v2-e33c64f6556f46db49a1dcd989b5cb78_1440w.jpg?source=1940ef5c',
        oeasyFirstSrc:
          'https://pic2.zhimg.com/80/v2-ce0d0c1f59127af0f4724b0b8f63467b_1440w.jpg?source=1940ef5c',
        wikiHowFirstSrc:
          'https://pic1.zhimg.com/80/v2-26ed8f4384b46f88a5756e0c77ac7ec2_1440w.jpg?source=1940ef5c',
        juiceFirstSrc:
          'https://pic2.zhimg.com/80/v2-a44ad5085a46ca3f5859ce2bc7a4fc62_1440w.jpg?source=1940ef5c',
        productFirstSrc:
          'https://pic4.zhimg.com/80/v2-1a1995789bb46e41a28fb1d2f6050157_1440w.jpg?source=1940ef5c',
        productSecondSrc:
          'https://pic1.zhimg.com/80/v2-21c71addef7d02091aebcc16c46b3d00_1440w.jpg?source=1940ef5c',
        colleageFirstSrc:
          'https://pic2.zhimg.com/80/v2-636cfc0c697cf9769bbe25411617c350_1440w.jpg?source=1940ef5c',
        scienceFirstSrc:
          'https://pic4.zhimg.com/80/v2-bac28387514ca15e527c9b099db2d185_1440w.jpg?source=1940ef5c',
        scienceSecondSrc:
          'https://pic1.zhimg.com/80/v2-0d2850fe7962eda93610c5908dd56684_1440w.jpg?source=1940ef5c'
      }
    }
  },
  methods: {
    zoomImg: function(src) {
      this.isZoomInImg = !this.isZoomInImg
      this.zoomInImgSrc = this.isZoomInImg ? src : ''
    }
  }
}
</script>

<style scoped>
.question-main-column {
  width: 694px;
  padding-bottom: 20px;
}
.card {
  margin-bottom: 10px;
  background: #fff;
  overflow: hidden;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
  box-sizing: border-box;
}
.list-header {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  height: 50px;
  margin: 0 20px;
  border-bottom: 1px solid #f6f6f6;
  box-sizing: border-box;
}
.list-heder-text {
  margin: 0;
  font-weight: 600;
}
.list-header-options > div {
  position: relative;
  display: inline-block;
}
.list-header-options button {
  padding: 0;
  border: 1px solid transparent;
  text-align: left;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}

.list-header-options button:hover {
  background-color: transparent;
  color: #76839b;
}
.list-item {
  position: relative;
  padding: 16px 20px;
}
.content-item-meta {
  font-size: 15px;
  color: #646464;
}
.author-info {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}
.author-info-avatarWrapper img {
  width: 38px;
  aspect-ratio: auto 38 / 38;
  height: 38px;
  background: #fff;
  border-radius: 2px;
  vertical-align: top;
}
.author-info-content {
  flex: 1 1;
  margin-left: 14px;
  overflow: hidden;
}
.author-info-head {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  font-size: 15px;
  line-height: 1.1;
  flex-shrink: 0;
}
.author-info-head span {
  color: #444;
  font-weight: 600;
}
.voters-wrapper {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  color: #8590a6;
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: -4px;
}
.voters button {
  height: auto;
  padding: 0;
  line-height: inherit;
  background-color: transparent;
  border: none;
  border-radius: 0;
}
.voters button:hover {
  color: #76839b;
}
.rich-content {
  line-height: 1.67;
}
.rich-content-inner {
  margin-top: 9px;
  margin-bottom: -4px;
  overflow: hidden;
}
.rich-text {
  word-break: break-word;
  line-height: 1.6;
}
.rich-text:first-child {
  margin-top: 0;
}
.rich-text p {
  margin: 1.4em 0;
}
.rich-text figure {
  margin: 1.4em 0;
}
.rich-text figure img {
  display: block;
  max-width: 100%;
  margin: 0 auto;
  cursor: zoom-in;
}
.rich-text h2 {
  clear: left;
  margin-top: 2.33333em;
  margin-bottom: 1.16667em;
  font-size: 1.2em;
  line-height: 1.5;
  font-weight: 600;
}
</style>
