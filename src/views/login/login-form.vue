<template>
  <div class="css-zvnmar">
    <div class="sign-container-content">
      <div class="sign-container-inner">
        <form class="sign-flow">
          <div class="sign-flow-tabs">
            <div
              v-for="(item, index) in tabsList"
              :key="index"
              @click="setTab(item)"
              :class="['sign-flow-tab', { active: currentTab === item.key }]"
            >
              {{ item.name }}
            </div>
            <div class="sign-flow-qrcodeTab">
              <svg width="52" height="52" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none">
                <mask
                  id="id-3757926926-a"
                  width="52"
                  height="52"
                  x="0"
                  y="0"
                  maskUnits="userSpaceOnUse"
                >
                  <path fill="#fff" d="M0 0l52 52V0H0z"></path>
                </mask>
                <g mask="url(#id-3757926926-a)">
                  <path fill="#06F" d="M0 0h48a4 4 0 014 4v48L0 0z"></path>
                  <path fill="url(#pattern0)" d="M0 0h52v52H0z"></path>
                </g>
                <defs>
                  <pattern
                    id="pattern0"
                    width="1"
                    height="1"
                    patternContentUnits="objectBoundingBox"
                  >
                    <use transform="scale(.00216)" xlink:href="#image0"></use>
                  </pattern>
                  <image
                    id="image0"
                    width="463"
                    height="463"
                    xlink:href="data:image/png;base64,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"
                  ></image>
                </defs>
              </svg>
            </div>
          </div>
          <div v-if="isNoPasswordTab" class="sign-flow-account">
            <div class="sign-flow-supportedCountriesSelectContainer">
              <div class="popover">
                <button type="button" class="button-plain select-button-plain">
                  中国 +86
                  <svg
                    class="select-arrow"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path
                      d="M12 16.183l2.716-2.966a.757.757 0 0 1 1.064.001.738.738 0 0 1 0 1.052l-3.247 3.512a.758.758 0 0 1-1.064 0L8.22 14.27a.738.738 0 0 1 0-1.052.758.758 0 0 1 1.063 0L12 16.183zm0-9.365L9.284 9.782a.758.758 0 0 1-1.064 0 .738.738 0 0 1 0-1.052l3.248-3.512a.758.758 0 0 1 1.065 0L15.78 8.73a.738.738 0 0 1 0 1.052.757.757 0 0 1-1.063.001L12 6.818z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <span class="sign-flow-accountSeperator">&nbsp;</span>
            <div class="sign-flow-accountInputContainer">
              <label class="input-wrapper">
                <input name="username" type="tel" placeholder="手机号" value="" />
              </label>
            </div>
          </div>
          <div v-else class="sign-flow-account">
            <div class="sign-flow-accountInputContainer">
              <label class="input-wrapper">
                <input name="username" type="text" placeholder="手机号或邮箱" value="" />
              </label>
            </div>
          </div>
          <div v-if="isNoPasswordTab" class="sign-flow-smsInputContainer">
            <div class="sign-flow-smsInput">
              <label class="input-wrapper">
                <input name="digits" type="number" placeholder="输入 6 位短信验证码" value="" />
              </label>
            </div>
            <button type="button" class="button-plain sign-flow-smsInputButton">
              获取短信验证码
            </button>
          </div>
          <div v-else class="sign-flow-password">
            <div class="sign-flow-input">
              <label class="input-wrapper">
                <input name="password" type="password" class="Input" placeholder="密码" value="" />
              </label>
            </div>
            <button type="button" class="button-plain sign-flow-switch-password">
              <span style="display: inline-flex; align-items: center;">
                <svg fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em">
                  <path
                    d="M1 11.5C1 15 7 19 12 19s11-4 11-7.5S17 4 12 4 1 8 1 11.5zm11 5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm-3-5c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
          <div class="login-options">
            <button type="button" class="login-switchType button-plain">
              {{ switchTypeButtonText }}
            </button>
            <button type="button" class="login-cannotLogin button-plain">
              {{ cannotLoginButtonText }}
            </button>
          </div>
          <button type="button" class="button-blue button-primary sign-flow-submit-button">
            {{ submitButtonText }}
          </button>
          <div class="sign-container-tip">
            <div>
              <div>
                未注册手机验证后自动登录，注册即代表同意
                <a href="https://www.zhihu.com/term/zhihu-terms">《知乎协议》</a>
                <a href="https://www.zhihu.com/term/privacy">《隐私保护指引》</a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="split"></div>
    <div class="login-socialLogin">
      <span>社交账号登陆</span>
      <span class="login-socialButtonGroup">
        <button type="button" class="login-socialButton">
          <svg
            class="Zi Zi--WeChat Login-socialIcon"
            fill="#60c84d"
            viewBox="0 0 24 24"
            width="20"
            height="20"
          >
            <path
              d="M2.224 21.667s4.24-1.825 4.788-2.056C15.029 23.141 22 17.714 22 11.898 22 6.984 17.523 3 12 3S2 6.984 2 11.898c0 1.86.64 3.585 1.737 5.013-.274.833-1.513 4.756-1.513 4.756zm5.943-9.707c.69 0 1.25-.569 1.25-1.271a1.26 1.26 0 0 0-1.25-1.271c-.69 0-1.25.569-1.25 1.27 0 .703.56 1.272 1.25 1.272zm7.583 0c.69 0 1.25-.569 1.25-1.271a1.26 1.26 0 0 0-1.25-1.271c-.69 0-1.25.569-1.25 1.27 0 .703.56 1.272 1.25 1.272z"
              fill-rule="evenodd"
            ></path>
          </svg>
          微信
        </button>
        <button type="button" class="login-socialButton">
          <svg
            class="Zi Zi--QQ Login-socialIcon"
            fill="#50c8fd"
            viewBox="0 0 24 24"
            width="20"
            height="20"
          >
            <path
              d="M12.003 2c-2.265 0-6.29 1.364-6.29 7.325v1.195S3.55 14.96 3.55 17.474c0 .665.17 1.025.281 1.025.114 0 .902-.484 1.748-2.072 0 0-.18 2.197 1.904 3.967 0 0-1.77.495-1.77 1.182 0 .686 4.078.43 6.29 0 2.239.425 6.287.687 6.287 0 0-.688-1.768-1.182-1.768-1.182 2.085-1.77 1.905-3.967 1.905-3.967.845 1.588 1.634 2.072 1.746 2.072.111 0 .283-.36.283-1.025 0-2.514-2.166-6.954-2.166-6.954V9.325C18.29 3.364 14.268 2 12.003 2z"
              fill-rule="evenodd"
            ></path>
          </svg>
          QQ
        </button>
        <button type="button" class="login-socialButton">
          <svg
            class="Zi Zi--Weibo Login-socialIcon"
            fill="#fb6622"
            viewBox="0 0 24 24"
            width="20"
            height="20"
          >
            <path
              fill="#FB6622"
              d="M15.518 3.06c8.834-.854 7.395 7.732 7.394 7.731-.625 1.439-1.673.309-1.673.309.596-7.519-5.692-6.329-5.692-6.329-.898-1.067-.029-1.711-.029-1.711zm4.131 6.985c-.661 1.01-1.377.126-1.376.126.205-3.179-2.396-2.598-2.396-2.598-.719-.765-.091-1.346-.091-1.346 4.882-.551 3.863 3.818 3.863 3.818zM5.317 7.519s4.615-3.86 6.443-1.328c0 0 .662 1.08-.111 2.797.003-.003 3.723-1.96 5.408.159 0 0 .848 1.095-.191 2.649 0 0 2.918-.099 2.918 2.715 0 2.811-4.104 6.44-9.315 6.44-5.214 0-8.026-2.092-8.596-3.102 0 0-3.475-4.495 3.444-10.33zm10.448 7.792s.232-4.411-5.71-4.207c-6.652.231-6.579 4.654-6.579 4.654.021.39.097 3.713 5.842 3.713 5.98 0 6.447-4.16 6.447-4.16zm-9.882.86s-.059-3.632 3.804-3.561c3.412.06 3.206 3.165 3.206 3.165s-.026 2.979-3.684 2.979c-3.288 0-3.326-2.583-3.326-2.583zm2.528 1.037c.672 0 1.212-.447 1.212-.998 0-.551-.543-.998-1.212-.998-.672 0-1.215.447-1.215.998 0 .551.546.998 1.215.998z"
              fill-rule="evenodd"
            ></path>
          </svg>
          微博
        </button>
      </span>
    </div>
    <div class="account">
      <div class="account-opened">
        <a>
          <span style="display: inline-flex; align-items: center;">
            &ZeroWidthSpace;
            <svg
              class="Zi Zi--BadgeCert css-vfpo4o"
              fill="currentColor"
              viewBox="0 0 24 24"
              width="26"
              height="26"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  fill="#0F88EB"
                  d="M2.64 13.39c1.068.895 1.808 2.733 1.66 4.113l.022-.196c-.147 1.384.856 2.4 2.24 2.278l-.198.016c1.387-.122 3.21.655 4.083 1.734l-.125-.154c.876 1.084 2.304 1.092 3.195.027l-.127.152c.895-1.068 2.733-1.808 4.113-1.66l-.198-.022c1.386.147 2.402-.856 2.279-2.238l.017.197c-.122-1.388.655-3.212 1.734-4.084l-.154.125c1.083-.876 1.092-2.304.027-3.195l.152.127c-1.068-.895-1.808-2.732-1.66-4.113l-.022.198c.147-1.386-.856-2.4-2.24-2.279l.198-.017c-1.387.123-3.21-.654-4.083-1.733l.125.153c-.876-1.083-2.304-1.092-3.195-.027l.127-.152c-.895 1.068-2.733 1.808-4.113 1.662l.198.02c-1.386-.147-2.4.857-2.279 2.24L4.4 6.363c.122 1.387-.655 3.21-1.734 4.084l.154-.126c-1.083.878-1.092 2.304-.027 3.195l-.152-.127z"
                ></path>
                <path
                  fill="#FFF"
                  d="M9.78 15.728l-2.633-2.999s-.458-.705.242-1.362c.7-.657 1.328-.219 1.328-.219l1.953 2.132 4.696-4.931s.663-.348 1.299.198c.636.545.27 1.382.27 1.382s-3.466 3.858-5.376 5.782c-.98.93-1.778.017-1.778.017z"
                ></path>
              </g>
            </svg>
          </span>
          开通机构号
        </a>
      </div>
      <div class="account-split-line"></div>
      <div class="account-download">
        <button>
          <span style="display: inline-flex; align-items: center;">
            &ZeroWidthSpace;
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                fill="url(#paint0_linear)"
                d="M16.131 0H3.87A3.869 3.869 0 000 3.869V16.13A3.869 3.869 0 003.869 20H16.13A3.869 3.869 0 0020 16.131V3.87A3.869 3.869 0 0016.131 0z"
              ></path>
              <path
                fill="#fff"
                d="M14.9 10.046V7.391l2.67-.137.232-.015c.147-.26.214-.559.192-.857-.02-.071-.059-.19-.178-.163a9.048 9.048 0 01-1.204.207c-.777.092-1.119.116-2.196.193-1.893.14-3.56.205-3.56.205a.722.722 0 00.75.724c.642-.027 1.582-.071 2.531-.119v2.617h-3.616a.753.753 0 00.753.754h2.843v2.008c0 .255-.13.341-.345.347h-1.1a1.187 1.187 0 00.632.742c.244.081.503.109.76.08.385-.02.836-.237.836-1.014V10.8h3.175a.362.362 0 00.361-.362v-.392H14.9z"
              ></path>
              <path
                fill="#fff"
                d="M12.414 8.251a.65.65 0 00-.908-.148l-.107.077 1.187 1.662.635-.457-.807-1.134zm4.147-.057l-.89 1.166.647.472 1.273-1.685-.107-.077a.653.653 0 00-.923.124zM9.737 7.031H6.263v6.065h.858l.112.732 1.154-.732h1.356L9.737 7.03zm-1.465 5.311l-.674.415-.065-.427h-.487V7.785h1.908v4.557h-.682zM5.637 9.761H4.379V7.785h1.436v-.368a.386.386 0 00-.383-.385h-2.24a115.436 115.436 0 01.347-1.018 1.187 1.187 0 00-.68.199.908.908 0 00-.385.551c-.151.416-.296.813-.368 1.05-.136.38-.466 1.048-.466 1.048.248-.002.493-.06.716-.169a1.205 1.205 0 00.575-.822c0-.027 0-.053.024-.086h.65V9.35c0 .142 0 .279-.018.412H2.433a.754.754 0 00-.754.754h1.837a4.955 4.955 0 01-.226 1.035 4.746 4.746 0 01-.845 1.484 9.363 9.363 0 01-.89.845 1.56 1.56 0 001.527-.27 4.21 4.21 0 00.908-1.623c.152-.483.258-.98.318-1.483h1.685v-.38a.362.362 0 00-.356-.362z"
              ></path>
              <path
                fill="#fff"
                d="M4.747 11.318l-.658.425 1.418 2.118a1.96 1.96 0 00.19-.629.908.908 0 00-.08-.617l-.87-1.297z"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="-6.708"
                  x2="25.504"
                  y1="29.91"
                  y2="-8.476"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".42" stop-color="#06F"></stop>
                  <stop offset=".92" stop-color="#00C4FF"></stop>
                </linearGradient>
              </defs>
            </svg>
          </span>
          下载知乎 App
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      currentTab: 'noPassword',
      tabsList: [
        { name: '免密码登录', key: 'noPassword' },
        { name: '密码登录', key: 'password' }
      ]
    }
  },
  computed: {
    isNoPasswordTab: function() {
      return this.currentTab === 'noPassword'
    },
    switchTypeButtonText: function() {
      return this.isNoPasswordTab ? '' : '海外手机登录'
    },
    cannotLoginButtonText: function() {
      return this.isNoPasswordTab ? '接收语音验证码' : '忘记密码？'
    },
    submitButtonText: function() {
      return this.isNoPasswordTab ? '注册/登录' : '登录'
    }
  },
  methods: {
    setTab: function(item) {
      this.currentTab = item.key
    }
  }
}
</script>

<style scoped>
.css-zvnmar {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  padding: 0;
  background-color: #ffffff;
  box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
  border-radius: 2px;
  background-color: #ffffff;
  width: 400px;
  overflow: hidden;
}
/* login form */
.sign-container-content {
  margin: 0 auto;
  text-align: center;
}
.sign-container-inner {
  position: relative;
  overflow: hidden;
}
.sign-flow {
  padding: 0 24px 84px;
  overflow: hidden;
}
/* login form: tabs */
.sign-flow-tabs {
  text-align: left;
}
.sign-flow-tab {
  display: inline-block;
  font-size: 16px;
  line-height: 60px;
  height: 60px;
  margin-right: 24px;
  cursor: pointer;
}
.sign-flow-tab.active {
  position: relative;
  font-weight: 600;
}
.sign-flow-tab.active::after {
  display: block;
  position: absolute;
  bottom: 0;
  content: '';
  width: 100%;
  height: 3px;
  background-color: #06f;
}
.sign-flow-qrcodeTab {
  position: absolute;
  width: 52px;
  height: 52px;
  top: 0;
  right: 0;
}
.sign-flow-qrcodeTab svg {
  width: 100%;
  height: 100%;
  cursor: pointer;
}
/* phone and code */
.sign-flow-account {
  margin-top: 24px;
  border-bottom: 1px solid #ebebeb;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.sign-flow-supportedCountriesSelectContainer {
  display: inline-block;
  min-width: 72px;
}
.popover {
  position: relative;
  display: inline-block;
}
.select-button-plain {
  text-align: left;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}
.select-arrow {
  margin-left: 8px;
}
.sign-flow-accountSeperator {
  width: 1px;
  height: 22px;
  margin: 0 12px;
  background: #ebebeb;
}
.sign-flow-accountInputContainer {
  position: relative;
  -webkit-box-flex: 1;
  -ms-flex: 1 1;
  flex: 1 1;
  overflow: hidden;
}
.sign-flow-accountInputContainer .input-wrapper {
  border: none;
  border-radius: 0;
  width: 100%;
  height: 48px;
  padding: 0;
  color: #8590a6;
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  font-size: 14px;
  background: #fff;
  box-sizing: border-box;
  transition: background 0.2s, border 0.2s;
}
.sign-flow-accountInputContainer .input-wrapper input {
  height: 48px;
  color: #121212;
  line-height: 24px;
  -webkit-box-flex: 1;
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
.sign-flow-smsInputContainer {
  position: relative;
  margin-top: 12px;
  overflow: hidden;
}
.sign-flow-smsInput {
  position: relative;
  -webkit-box-flex: 1;
  -ms-flex: 1 1;
  flex: 1 1;
  width: auto;
}
.sign-flow-smsInput .input-wrapper {
  width: 100%;
  height: 48px;
  padding: 0;
  color: #8590a6;
  border: none;
  border-bottom: 1px solid #ebebeb;
  border-radius: 0;
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  font-size: 14px;
  background: #fff;
  -webkit-box-sizing: border-box;
  -webkit-transition: background 0.2s, border 0.2s;
}
.sign-flow-smsInput .input-wrapper input {
  height: 48px;
  color: #121212;
  line-height: 24px;
  -webkit-box-flex: 1;
  -ms-flex: 1 1;
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
.sign-flow-smsInputButton {
  position: absolute;
  top: 24px;
  right: 0;
  padding: 4px 0;
  color: #175199;
  transform: translateY(-50%);
}
.sign-flow-password {
  position: relative;
  margin-top: 12px;
  border-bottom: 1px solid #ebebeb;
}
.sign-flow-password .sign-flow-input {
  position: relative;
  -webkit-box-flex: 1;
  -ms-flex: 1 1;
  flex: 1 1;
}
.sign-flow-password .input-wrapper {
  position: relative;
  display: -webkit-box;
  -webkit-box-align: center;
  align-items: center;
  font-size: 14px;
  background: #fff;
  -webkit-box-sizing: border-box;
  transition: background 0.2s, border 0.2s;
  width: 100%;
  height: 48px;
  padding: 0;
  color: #8590a6;
  border: none;
  border-radius: 0;
  border-bottom: none !important;
}
.sign-flow-password .input-wrapper input {
  -webkit-box-flex: 1;
  -ms-flex: 1 1;
  flex: 1 1;
  padding: 0;
  overflow: hidden;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  background: transparent;
  border: none;
  resize: none;
  color: #121212;
  line-height: 24px;
  height: 48px;
}
.sign-flow-switch-password {
  position: absolute;
  top: 24px;
  right: 0;
  transform: translateY(-50%);
  font-size: 18px;
  padding: 0;
}
.sign-flow-switch-password:hover {
  color: #999;
}
/* login form: login options */
.login-options {
  margin-top: 12px;
  height: 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  background: #fff;
}
.login-switchType {
  color: #175199;
}
.login-switchType:hover {
  color: #76839b;
}
.login-cannotLogin {
  float: right;
}
.login-cannotLogin:hover {
  color: grey;
}
/* login form: submit button */
.sign-flow-submit-button {
  width: 100%;
  margin-top: 30px;
  height: 36px;
}
/* login form: tip info */
.sign-container-tip {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 12px 24px;
  color: grey;
  font-size: 13px;
}
.sign-container-tip > div {
  text-align: left;
}
/* split line */
.split {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  border-top: 1px solid;
  border-color: #ebebeb;
  margin-left: 24px;
  margin-right: 24px;
}

/* social */
.login-socialLogin {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  color: #8590a6;
  height: 60px;
  line-height: 60px;
  padding: 0 24px;
  box-sizing: border-box;
}
.login-socialButtonGroup {
  display: flex;
  margin-left: 2px;
  -webkit-transition: opacity 0.3s ease;
  transition: opacity 0.3s ease;
}
.login-socialButton {
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  cursor: pointer;
  border: none;
  border-radius: 0;
}

/* account */
.account {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  padding-left: 24px;
  padding-right: 24px;
  color: #0066ff;
  width: 400px;
  height: 60px;
  -webkit-box-align: center;
  align-items: center;
  background-color: #f6f6f6;
  display: -webkit-flex;
}
.account-opened {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  flex: 1;
}
.account-opened > a {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  color: inherit;
}
.account-opened > a svg {
  margin-right: 0.5em;
}
.account-split-line {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  height: 20px;
  width: 1px;
  background-color: #ebebeb;
}
.account-download {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  flex: 1;
  text-align: right;
}
.account-download button {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: inline-block;
  text-align: center;
  line-height: inherit;
  -webkit-text-decoration: none;
  text-decoration: none;
  font-size: inherit;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  color: white;
  background-color: #0066ff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  background-color: #0066ff;
  border-radius: 4px;
  background-color: unset;
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
  padding: 0;
}
</style>
