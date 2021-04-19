<template>
  <main class="app-login">
    <div class="sign-flow-homepage">
      <div class="sign-flow-homepage-content">
        <img
          class="sign-flow-homepage-logo"
          src="https://pic2.zhimg.com/80/v2-f6b1f64a098b891b4ea1e3104b5b71f6_720w.png"
        />
        <login-form />
      </div>
      <login-footer />
    </div>
  </main>
</template>

<script>
import LoginForm from './login-form.vue'
import LoginFooter from './login-footer.vue'

export default {
  components: {
    'login-footer': LoginFooter,
    'login-form': LoginForm
  }
}
</script>

<style scoped>
.app-login {
  display: block;
}
.sign-flow-homepage {
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-image: url(https://static.zhihu.com/heifetz/assets/sign_bg.db29b0fb.png);
  background-repeat: no-repeat;
  background-color: #b8e5f8;
  background-size: cover;
  width: 100%;
  height: 100vh;
  overflow: auto;
}
.sign-flow-homepage-content {
  -webkit-box-flex: 1;
  -ms-flex: 1 1;
  flex: 1 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  border-radius: 2px;
  min-height: 688px;
  height: calc(100% - 42px);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.sign-flow-homepage-logo {
  width: 128px;
  height: 81px;
  margin-bottom: 24px;
}
</style>
