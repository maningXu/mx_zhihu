<template>
  <div>
    <header
      v-if="!isLogin"
      :class="['app-header', { 'is-fixed': isHeaderFixed }, { 'is-hide': isHeaderHide }]"
    >
      <div class="app-header-inner">
        <logo-link @go-answer-page="goAnswerPage" />
        <ul class="app-header-tabs">
          <li
            v-for="(item, index) in list"
            :key="index"
            :class="['app-header-tab', { active: currentLink === item.key }]"
            @click="clickLink(item)"
          >
            <router-link class="app-header-tabs-link" :to="item.to">
              {{ item.title }}
            </router-link>
          </li>
        </ul>
        <div class="app-header-search-wrapper">
          <div class="app-header-search">
            <header-search />
          </div>
        </div>
        <div class="app-header-userInfo">
          <div>
            <div>
              <button type="button" class="app-header-login button-blue" @click="goLoginPage">
                登录
              </button>
              <button type="button" class="button-primary" @click="goLoginPage">
                加入知乎
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div :class="['page-header', { 'is-shown': isHeaderHide }]">
          <div v-if="this.currentLink === ''" class="question-header-content">
            <div class="question-header-main">
              <h1 class="question-header-title">有哪些值得每天一看的网站？</h1>
            </div>
            <div class="question-header-side">
              <div class="question-header-button-group">
                <button type="button" class="button-primary">
                  关注问题
                </button>
                <button type="button" class="button-blue">
                  <svg fill="currentColor" viewBox="0 0 24 24" width="16" height="16">
                    <path
                      d="M4.076 16.966a4.19 4.19 0 0 1 1.05-1.76l8.568-8.569a.524.524 0 0 1 .741 0l2.928 2.927a.524.524 0 0 1 0 .74l-8.568 8.57c-.49.49-1.096.852-1.761 1.051l-3.528 1.058a.394.394 0 0 1-.49-.488l1.06-3.53zM20.558 4.83c.59.59.59 1.546 0 2.136l-1.693 1.692a.503.503 0 0 1-.712 0l-2.812-2.812a.504.504 0 0 1 0-.712l1.693-1.693a1.51 1.51 0 0 1 2.135 0l1.389 1.389z"
                    ></path>
                  </svg>
                  写回答
                </button>
              </div>
            </div>
          </div>
          <div v-if="this.currentLink === 'explore'" class="explore-header">
            <logo-link @go-answer-page="goAnswerPage" />
            <div class="explore-header-tabs">
              <a>最新专题</a>
              <a>圆桌讨论</a>
              <a>热门收藏夹</a>
              <a>专栏</a>
            </div>
            <div class="explore-header-search">
              <header-search />
            </div>
            <button type="button" class="button-primary">
              提问
            </button>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import LogoLink from './logo.vue'
import HeaderSearch from './search.vue'
export default {
  components: {
    'logo-link': LogoLink,
    'header-search': HeaderSearch
  },
  data: function() {
    return {
      currentLink: '',
      list: [
        {
          key: 'zhihu',
          title: '首页',
          to: '/home'
        },
        {
          key: 'vip',
          title: '会员',
          to: '/vip-web'
        },
        {
          key: 'explore',
          title: '发现',
          to: '/explore'
        },
        {
          key: 'question',
          title: '等你来答',
          to: '/question/waiting'
        }
      ],
      isHeaderFixed: false,
      isHeaderHide: false,
      y: 0
    }
  },
  computed: {
    isLogin: function() {
      return ['zhihu', 'question'].includes(this.currentLink)
    }
  },
  watch: {
    currentLink: function() {
      if (!this.isLogin) {
        window.sessionStorage.setItem('currentLink', this.currentLink)
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    const sessionCurrentLink = window.sessionStorage.getItem('currentLink')
    if (sessionCurrentLink) {
      this.currentLink = sessionCurrentLink
    }
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    goAnswerPage: function() {
      this.$router.push('/')
      this.currentLink = ''
    },
    goLoginPage: function() {
      window.open('https://www.zhihu.com/')
    },
    handleScroll: function() {
      // fixed header if page scroll;
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 0) {
        this.isHeaderFixed = true
      } else {
        this.isHeaderFixed = false
      }
      var direction = this.y - scrollTop < 0 ? 'down' : 'up'
      // direction of scroll is up
      if (direction === 'up') {
        this.isHeaderHide = false
      }
      // direction of scroll is down
      if (scrollTop > 120 && direction === 'down') {
        this.isHeaderHide = true
      }
      // record last scroll top
      this.y = scrollTop
    },
    clickLink: function(item) {
      this.currentLink = item.key
      if (['zhihu', 'question'].includes(item.key)) {
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style scoped>
.app-header {
  position: relative;
  background: #fff;
  min-width: 1000px;
  box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
}
.is-fixed {
  position: fixed;
  width: 100%;
  top: 0px;
  z-index: 100;
}
.is-hide .app-header-inner {
  transform: translateY(-100%);
}
.app-header-inner {
  display: flex;
  align-items: center;
  width: auto;
  max-width: 1156px;
  min-width: 1000px;
  height: 52px;
  padding: 0 16px;
  margin: 0 auto;
  -webkit-transition: -webkit-transform 0.3s;
  transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;
}
.app-header-tabs {
  display: flex;
  margin-left: 25px;
  margin-right: 15px;
  padding: 0;
  flex-shrink: 0;
  margin: 0 16px;
}
.app-header-tab {
  display: inline-block;
  padding-left: 15px;
  padding-right: 15px;
}
.app-header-tab.active a {
  color: #222;
  font-weight: 600;
}
.app-header-tabs-link {
  font-size: 15px;
  color: #8590a6;
}
.app-header-tabs-link:hover {
  color: #121212;
}
.app-header-search-wrapper {
  display: flex;
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  flex: 1;
  justify-content: center;
}
.app-header-search {
  max-width: 482px;
  width: 100%;
}
.app-header-userInfo {
  margin-left: 30px;
  width: auto;
  display: flex;
  align-items: center;
}
.app-header-login {
  margin-right: 16px;
}
.page-header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: transform 0.3s;
  z-index: -1;
  opacity: 0;
}
.page-header.is-shown {
  opacity: 1;
}
.page-header:not(.is-shown) {
  transform: translateY(100%);
}
.question-header-content {
  display: flex;
  align-items: center;
  width: 1000px;
  height: 100%;
  padding: 0 16px;
  margin: 0 auto;
}
.question-header-main {
  width: 694px;
  padding-left: 20px;
  box-sizing: border-box;
}
.question-header-title {
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  line-height: 32px;
  color: #121212;
  font-size: 22px;
  font-weight: 600;
}
.question-header-side {
  width: 296px;
  padding-right: 20px;
  text-align: right;
}
.question-header-button-group {
  display: inline-block;
  margin: 0 -8px;
}
.question-header-button-group button {
  margin: 0 8px;
}
.question-header-button-group button svg {
  vertical-align: text-bottom;
  margin-right: 4px;
}
.explore-header {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 100%;
  width: auto;
  max-width: 1156px;
  min-width: 1000px;
  margin: 0 auto;
  padding-left: 16px;
  padding-right: 30px;
}
.explore-header-tabs {
  -webkit-box-flex: 1;
  flex: 1 1;
  margin-left: 33px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 100%;
}
.explore-header-tabs a {
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  height: 100%;
  color: #8590a6;
  cursor: pointer;
}
.explore-header-tabs a:hover {
  color: #06f;
}
.explore-header-tabs a + a {
  margin-left: 30px;
}
.explore-header-search {
  width: 296px;
  display: flex;
  max-width: 296px;
  align-items: center;
}
.explore-header button {
  border-radius: 999px;
  margin-left: 12px;
}
</style>
