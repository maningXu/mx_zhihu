<template>
  <div>
    <header
      :class="[
        'app-header',
        { 'is-fixed': isHeaderFixed },
        { 'is-hide': isHeaderHide },
      ]"
    >
      <div class="app-header-inner">
        <a @click="goLoginPage">
          <svg viewBox="0 0 64 30" fill="#0066FF" width="64" height="30">
            <path
              d="M29.05 4.582H16.733V25.94h3.018l.403 2.572 4.081-2.572h4.815V4.582zm-5.207 18.69l-2.396 1.509-.235-1.508h-1.724V7.233h6.78v16.04h-2.425zM14.46 14.191H9.982c0-.471.033-.954.039-1.458v-5.5h5.106V5.935a1.352 1.352 0 0 0-.404-.957 1.378 1.378 0 0 0-.968-.396H5.783c.028-.088.056-.177.084-.255.274-.82 1.153-3.326 1.153-3.326a4.262 4.262 0 0 0-2.413.698c-.57.4-.912.682-1.371 1.946-.532 1.453-.997 2.856-1.31 3.693C1.444 8.674.28 11.025.28 11.025a5.85 5.85 0 0 0 2.52-.61c1.119-.593 1.679-1.502 2.054-2.883l.09-.3h2.334v5.5c0 .5-.045.982-.073 1.46h-4.12c-.71 0-1.39.278-1.893.775a2.638 2.638 0 0 0-.783 1.874h6.527a17.717 17.717 0 0 1-.778 3.649 16.796 16.796 0 0 1-3.012 5.273A33.104 33.104 0 0 1 0 28.74s3.13 1.175 5.425-.954c1.388-1.292 2.631-3.814 3.23-5.727a28.09 28.09 0 0 0 1.12-5.229h5.967v-1.37a1.254 1.254 0 0 0-.373-.899 1.279 1.279 0 0 0-.909-.37z"
            ></path>
            <path
              d="M11.27 19.675l-2.312 1.491 5.038 7.458a6.905 6.905 0 0 0 .672-2.218 3.15 3.15 0 0 0-.28-2.168l-3.118-4.563zM51.449 15.195V5.842c4.181-.205 7.988-.405 9.438-.483l.851-.05c.387-.399.885-2.395.689-3.021-.073-.25-.213-.666-.638-.555a33.279 33.279 0 0 1-4.277.727c-2.766.321-3.97.404-7.804.682-6.718.487-12.709.72-12.709.72a2.518 2.518 0 0 0 .788 1.834 2.567 2.567 0 0 0 1.883.706c2.278-.095 5.598-.25 8.996-.41v9.203h-12.78c0 .703.281 1.377.783 1.874a2.69 2.69 0 0 0 1.892.777h10.105v7.075c0 .887-.464 1.192-1.231 1.214h-3.92a4.15 4.15 0 0 0 .837 1.544 4.2 4.2 0 0 0 1.403 1.067 6.215 6.215 0 0 0 2.71.277c1.36-.066 2.967-.826 2.967-3.57v-7.607h11.28c.342 0 .67-.135.91-.374.242-.239.378-.563.378-.902v-1.375H51.449z"
            ></path>
            <path
              d="M42.614 8.873a2.304 2.304 0 0 0-1.508-.926 2.334 2.334 0 0 0-1.727.405l-.376.272 4.255 5.85 2.24-1.62-2.884-3.98zM57.35 8.68l-3.125 4.097 2.24 1.663 4.517-5.927-.375-.277a2.32 2.32 0 0 0-1.722-.452 2.327 2.327 0 0 0-1.536.896z"
            ></path>
          </svg>
        </a>
        <ul class="app-header-tabs">
          <li v-for="(item, index) in list" :key="index" class="app-header-tab">
            <router-link class="app-header-tabs-link" :to="item.to">
              {{ item.title }}
            </router-link>
          </li>
        </ul>
        <div class="app-header-search">
          <div class="app-header-search-bar">
            <form class="search-bar-tool">
              <div>
                <div class="popover">
                  <label class="input-wrapper">
                    <input
                      type="text"
                      maxlength="100"
                      autocomplete="off"
                      role="combobox"
                      aria-expanded="false"
                      aria-autocomplete="list"
                      aria-activedescendant="AutoComplete2-topSearch--1"
                      id="Popover1-toggle"
                      aria-haspopup="true"
                      aria-owns="Popover1-content"
                      class="Input"
                      placeholder="搜索你感兴趣的内容…"
                      value=""
                    />
                    <button
                      aria-label="搜索"
                      type="button"
                      class="search-button"
                    >
                      <span style="display: inline-flex; paddingtop: 10px">
                        <svg
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          width="18"
                          height="18"
                        >
                          <path
                            d="M17.068 15.58a8.377 8.377 0 0 0 1.774-5.159 8.421 8.421 0 1 0-8.42 8.421 8.38 8.38 0 0 0 5.158-1.774l3.879 3.88c.957.573 2.131-.464 1.488-1.49l-3.879-3.878zm-6.647 1.157a6.323 6.323 0 0 1-6.316-6.316 6.323 6.323 0 0 1 6.316-6.316 6.323 6.323 0 0 1 6.316 6.316 6.323 6.323 0 0 1-6.316 6.316z"
                            fill-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </button>
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="app-header-userInfo">
          <div>
            <div>
              <button
                type="button"
                class="app-header-login button-blue"
                @click="goLoginPage"
              >
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
          <div class="question-header-content">
            <div class="question-header-main">
              <h1 class="question-header-title">有哪些值得每天一看的网站？</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      list: [
        { title: "首页", to: "/zhihu", href: "//www.zhihu.com/" },
        { title: "会员", to: "/vip-web", href: "//www.zhihu.com/xen/vip-web" },
        { title: "发现", to: "/explore", href: "//www.zhihu.com/explore" },
        {
          title: "等你来答",
          to: "/question/waiting",
          href: "//www.zhihu.com/question/waiting",
        },
      ],
      isHeaderFixed: false,
      isHeaderHide: false,
    };
  },
  mounted() {
    window.addEventListener("mousewheel", this.handleScroll, false);
  },
  methods: {
    goLoginPage: function () {
      window.open("https://www.zhihu.com/");
    },
    handleScroll: function (e) {
      // judge the direction of wheel
      const direction = e.deltaY > 0 ? "down" : "up";
      // get the distance of the scroll
      let scrollTop = window.pageYOffset;
      // document.documentElement.scrollTop ||
      // document.body.scrollTop;
      console.log(scrollTop, "----");
      if (direction === "down") {
        let distance = scrollTop + 100;
        // fixed header
        if (distance > 0) {
          this.isHeaderFixed = true;
        }
        // hide header
        if (distance >= 200) {
          this.isHeaderHide = true;
        }
      } else {
        let distance = scrollTop - 100;
        if (distance <= 0) {
          this.isHeaderFixed = false;
        }
        if (distance <= 100) {
          this.isHeaderHide = false;
        }
      }
    },
  },
};
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
.app-header-tabs-link {
  font-size: 15px;
  color: #8590a6;
}
.app-header-tabs-link:hover {
  color: #121212;
}
.app-header-search {
  display: flex;
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  flex: 1;
  justify-content: center;
}
.app-header-search-bar {
  max-width: 428px;
  height: 34px;
  flex-grow: 1;
}
.search-bar-tool {
  flex-grow: 1;
  height: 100%;
  position: relative;
  overflow: hidden;
  width: 100%;
  z-index: 104;
}
.popover,
.search-bar-tool > div {
  display: block;
  height: 100%;
  width: 100%;
}
.input-wrapper {
  width: 100%;
  border-radius: 999px;
  background: #f6f6f6;
  box-sizing: border-box;
  transition: width 0.2s ease, background 0.3s ease;
  position: relative;
  display: flex;
  align-items: center;
  height: 34px;
  padding: 4px 0 4px 16px;
  font-size: 14px;
  border: 1px solid #ebebeb;
}
.Input {
  color: #121212;
  height: 24px;
  line-height: 24px;
  flex: 1 1;
  padding: 0;
  overflow: hidden;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  background: transparent;
  border: none;
  resize: none;
}
.search-button {
  border-bottom-right-radius: 999px;
  border-top-right-radius: 999px;
  margin-left: 12px;
  padding: 0 12px;
  background: transparent;
  border-color: transparent;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
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
</style>
