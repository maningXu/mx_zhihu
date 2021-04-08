const storyList = [
  {
    title: '真实解剖手记：一个法医的死因调查簿',
    description:
      '身为法医，在解剖台上看到自己的熟人是种怎样的体验？法医刘八百，从警 16 年，解剖过 800 多具尸体。相比嫌疑人口供，他更相信通过技术找到真相；法医廖小刀，惯用一把 24 号银色解剖刀，曾经 3 个月连破 26 起命案。「工作以后才知道，尸体不可怕，活人才可怕。」',
    author: '夜行者陈拙',
    authorSrc: 'https://pic1.zhimg.com/50/v2-11968bed88df7a3568d48d8f1ae504bc.webp',
    artWorkSrc: 'https://pic1.zhimg.com/50/v2-0e8372ca119cbc134325efb4e938cfbe.webp'
  },
  {
    title: '相爱相杀案件簿：关于出轨、报复和分手的犯罪故事',
    description:
      '一段感情里，究竟需要多深的执念和爱恨，才会让人将犯罪之手，伸向深爱的 ta？本专栏里，有着多年一线刑侦工作经验的唐风（作者笔名），将为你讲讲那些令他至今印象深刻的情感犯罪。出轨、背叛、分手、复仇······这里的每一个犯罪背后，都有一段百转千回，令人唏嘘的情感往事。这些匪夷所思的真实犯罪背后，是不一样的爱恨情仇，和人与人之间复杂深刻的情感与人性。',
    author: '没错就是我',
    authorSrc: 'https://pic1.zhimg.com/50/v2-ec85156fba7e58fdc8ddd4f8de1c37af.webp',
    artWorkSrc: 'https://pic1.zhimg.com/50/v2-8146848d0e7f8fcd051a8305f1de9f25.webp'
  },
  {
    title: '奇说妙语：20 个猜得到开头，猜不到结尾的故事',
    description:
      '这个世界的故事五花八门，每个故事的开头更是千奇百怪。这个专栏汇集了一群「脑洞大如盆」的作者，他们根据小小的开头设定，便展开了一个个精彩的脑洞故事。无论你是爱推理，爱惊悚，还是爱武侠，爱甜文，这里的故事都能满足你。 + 填报方法；新高考选科指导；最值得报的专业介绍及院校推荐。',
    author: '阿放Francis',
    authorSrc: 'https://pic1.zhimg.com/50/v2-3e77eb51289dc072f06608f17a2407ef.webp',
    artWorkSrc: 'https://pic1.zhimg.com/50/v2-05d8e653db4c738e117a79618a04fd0a.webp'
  },
  {
    title: '霸道总裁别爱我：甜又爽的反套路现言小说',
    description:
      '被霸道总裁爱上是种怎样的体验？在这个集合了穿越、重生、沙雕、甜宠、虐恋等元素的现代反套路小说里，有让霸总洗内裤的，有穿越就跟霸总离婚的，也有想跟霸总谈场走心恋爱却被囚禁的。花花世界，风景大好，霸道总裁千万种，日子过得甜又爽才是王道。',
    author: '伞阿花伞大王',
    authorSrc: 'https://pic1.zhimg.com/50/v2-085a865fbb73f249dd5edba6aafa9478.webp',
    artWorkSrc: 'https://pic1.zhimg.com/50/v2-c4a16960673faf7a5bd1fefb4af58c97.webp'
  },
  {
    title: '消失的凶手：高智商谋杀背后的人性深渊',
    description: `一场堪称完美犯罪应该具备哪些要素？是密室？是不在场证明？还是借刀杀人？~`,
    author: '宇一美',
    authorSrc: 'https://pic1.zhimg.com/50/v2-981e244805a451453b9d1a6147a3ab4c.webp',
    artWorkSrc: 'https://pic1.zhimg.com/50/v2-29b3ca05ac2119df42f2a0cbf4e01ad3.webp'
  },
  {
    title: '告别瞎忙：实用时间管理术',
    description: '共 44 节',
    author: '纪元',
    authorSrc: 'https://pic1.zhimg.com/50/v2-ea95e15b08ec0571d427a743d9ebeafd.webp',
    artWorkSrc: 'https://pic1.zhimg.com/50/v2-30ca6d6922869ce6f951df0e7d5ce36b.webp'
  },
  {
    title: '高薪人士的职场写作秘诀',
    description: '共 65 节',
    author: '师北宸',
    authorSrc: 'https://pic1.zhimg.com/50/v2-71b78e0b7c91dcb2c3902bb8c5aa819d.webp',
    artWorkSrc: 'https://pic1.zhimg.com/50/v2-f6442c84fe933e2664a2e7f854b945e7.webp'
  },
  {
    title: '2020 年的魅力声音必修课',
    description: '共 15 节',
    author: '张皓翔',
    authorSrc: 'https://pic1.zhimg.com/50/v2-b761e2c9fbb7b4c451e5e8f3d8ea3680.webp',
    artWorkSrc: 'https://pic1.zhimg.com/50/v2-20010b435436c5bfc755055c6d598dac.webp'
  },
  {
    title: '向上生长',
    description: '百万读者称赞口碑作者，九边首部力作。',
    author: '九边',
    authorSrc: 'https://pic1.zhimg.com/50/v2-4f3d9495ebe9ce0291c94e2f95af1de2.webp',
    artWorkSrc: 'https://pic1.zhimg.com/50/v2-1927af2dd42f5c6cdc923808accef084.webp'
  },
  {
    title: '降维力：比你的同龄人高一个维度去思考',
    description:
      '为什么读了这么多书，还是过不好这一生？可能是你的思维方式有问题。我们对这个世界常常有一些固有看法，这些固有看法很可能让我们跳不出思维的圈套。这个专栏正是想打破你思维的界限，让你重新认识「鸡汤」「学霸」「阅读」「消费」「工作」……换一种方式打开人生。',
    author: '柴桑',
    authorSrc: 'https://pic1.zhimg.com/50/v2-6e6431447df641f3484e3c0cd66ce6b5.webp',
    artWorkSrc: 'https://pic1.zhimg.com/50/v2-4110b83e3bbc0942f5b918120de3193d.webp'
  }
]

export default storyList
