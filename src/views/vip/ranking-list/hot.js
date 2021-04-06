const hotList = [
  {
    title: '荒诞独角戏：我成功了却拿错了剧本',
    description:
      '人生如戏，全凭演技。可怕的就是，你演了一场独角戏——当你全情投入地「演」完了一出戏，却发现拿错了剧本。因为偏见、谎言、恶意揣测等等，你的人生剧本已改变，灾难接踵而至。祝早日看破，早日解脱！',
    author: 'Seasee Youl',
    authorSrc: 'https://pic1.zhimg.com/50/4decd6a9aceae904b438aabb031f282b.webp',
    artWorkSrc: 'https://pic1.zhimg.com/50/v2-9432683d0c9450c95948012afaff4c73.webp'
  },
  {
    title: '都市男女：我必须忘记你',
    description: '细数现代生活中纠葛的情感，那些爱恨情仇令人消瘦。',
    author: '张薇',
    authorSrc: 'https://pic1.zhimg.com/50/v2-1e593c02fd65ecd4c81c1381a322b621.webp',
    artWorkSrc: 'https://pic1.zhimg.com/50/v2-c5e153a0d8a13254b0bd520f13882eff.webp'
  },
  {
    title: '鉴爱高手，热血出击',
    description:
      '第二季来咯！还是花样年轻人的情感故事集，有爱情路上的曲折与甜蜜，也有亲情路上的刁钻与保护，希望你喜欢！。',
    author: '鹅子',
    authorSrc: 'https://pic1.zhimg.com/50/v2-d801899ce048803d1c8b56edd6321961.webp',
    artWorkSrc: 'https://pic1.zhimg.com/50/v2-45a4e023d85b04ae2d8a2501f10a58d0.webp'
  },
  {
    title: '妻子的复仇',
    description: `面对丈夫出轨，有的女人选择隐忍，有的女人选择离开，有的女人则选择了复仇……凤凰男，妈宝男，扶弟魔男……
    被侮辱被损害的妻子们快意恩仇，让渣男绿茶受到应有的惩罚。
    渣男绿茶玩心机？那就比他/她更有心机！渣男绿茶耍手腕？那就比他/她更有手腕！
    不能伸张的正义，就由自己来执行；老天爷无眼，那就取而代之！`,
    author: '烟雨平生',
    authorSrc: 'https://pic1.zhimg.com/50/v2-17087672aa445ee15c138118aa708c4a.webp',
    artWorkSrc: 'https://pic1.zhimg.com/50/v2-b8515fa67d0419674d755538edc7d1ce.webp'
  },
  {
    title: '非典型辣妹：爱你，是我做过最好的事',
    description: `都市里永远不会缺少漂亮女孩。她们或天真，或泼辣，或成熟，或包容……她们的生活各不相同，却都洋溢着旺盛的生命力。这里收录了诸多非典型辣妹的故事，她们的野心在膨胀，她们永远不会屈服。`,
    author: '一只五丁包',
    authorSrc: 'https://pic1.zhimg.com/50/v2-d3df875b457227b2d82865f94a632b93.webp',
    artWorkSrc: 'https://pic1.zhimg.com/50/v2-0002f83140d22c19bd0ce4fbd23a00af.webp'
  },
  {
    title: '鉴爱高手，年仅二十',
    description:
      '20 岁的你，在经历怎样的情感故事？是单身万岁，还是暗恋肝肠寸断，还是甜蜜爱最大？这个专栏集合了 20 岁男男女女的奇妙故事，希望你不要看到自己的影子！',
    author: '鹅子',
    authorSrc: 'https://pic1.zhimg.com/50/v2-d801899ce048803d1c8b56edd6321961.webp',
    artWorkSrc: 'https://pic1.zhimg.com/50/v2-8596b9357e2b1f9fc3c97662f0087ae6.webp'
  },
  {
    title: '真爱至上：决绝复仇、温馨脑洞和最纯的爱',
    description:
      '梦里梦见的手机号，醒来要不要打？我不仅打了，还加上了微信。奇奇怪怪的爱情，就此开始。女儿被变态亲戚惦记，甩不掉？我倾尽所有也要让我的女儿健康快乐长大……爱，是我们的特殊食物，闲暇时候，来这里，给自己加个餐叭。',
    author: '叶小白',
    authorSrc: 'https://pic1.zhimg.com/50/c4926d4597b7220547f69bc4bf6b12c8.webp',
    artWorkSrc: 'https://pic1.zhimg.com/50/v2-e91ee4de193bb5020cd75d1cc29be51b.webp'
  },
  {
    title: '白色球鞋：他爱你的一百件小事',
    description:
      '隔壁班男孩今天穿了双白色球鞋，爱笑的班花走路时马尾会左摇右摆，邻居家的大哥哥打完篮球后经过了窗前……那些心动的暗恋、初恋、失恋和热恋，都藏在美好的青春时光里。',
    author: '白框凉太子',
    authorSrc: 'https://pic1.zhimg.com/50/v2-44fa4700a9e7a509ad0efad167e771f3.webp',
    artWorkSrc: 'https://pic1.zhimg.com/50/v2-fcd7fce5e3c7bd1b63b604389177973e.webp'
  },
  {
    title: '食色男女：爱情是件奢侈品',
    description:
      '为什么爱情总是被现实打败？有哪些事是谈过多次恋爱才明白的？现代都市里，爱情被奉为奢侈品，又寄生于俗世。它混迹于食色男女间，充斥着纸醉金迷的欲望；可有时获得的途径又极其简单，真心相待，不求回报。这是一部极致的爱情故事短篇集，这里有最美好的情侣，最灰暗的过去，最复杂的人性，最残酷的结局。',
    author: '刘小谦',
    authorSrc: 'https://pic1.zhimg.com/50/de1271660.webp',
    artWorkSrc: 'https://pic1.zhimg.com/50/v2-e38b0ae9a7705274ad6b2649cc81a504.webp'
  },
  {
    title: '霸道总裁别爱我：甜又爽的反套路现言小说',
    description:
      '被霸道总裁爱上是种怎样的体验？在这个集合了穿越、重生、沙雕、甜宠、虐恋等元素的现代反套路小说里，有让霸总洗内裤的，有穿越就跟霸总离婚的，也有想跟霸总谈场走心恋爱却被囚禁的。花花世界，风景大好，霸道总裁千万种，日子过得甜又爽才是王道。',
    author: '伞阿花伞大王',
    authorSrc: 'https://pic1.zhimg.com/50/v2-085a865fbb73f249dd5edba6aafa9478.webp',
    artWorkSrc: 'https://pic1.zhimg.com/v2-65fba93d3bb840b223addf89052a506d.png'
  }
]

export default hotList
