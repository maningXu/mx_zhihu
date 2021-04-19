<template>
  <div class="css-zvnmar">
    <div class="sign-container-content"></div>
    <div class="split"></div>
    <div class="login-socialLogin"></div>
    <div class="account"></div>
  </div>
</template>

<script>
export default {}
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
  display: -webkit-box;
  -webkit-box-pack: justify;
  justify-content: space-between;
  color: #8590a6;
  height: 60px;
  line-height: 60px;
  padding: 0 24px;
  box-sizing: border-box;
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
</style>
