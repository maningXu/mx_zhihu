<template>
  <div class="question-main-column">
    <div class="card">
      <div class="list-header">
        <h4 class="list-header-text"><span>1,610 个回答</span></h4>
        <div class="list-header-options">
          <div>
            <button type="button">
              默认排序
              <svg
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
      </div>
      <div>list</div>
    </div>
  </div>
</template>

<script>
export default {};
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
</style>