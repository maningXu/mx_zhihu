<template>
  <div class="header-search">
    <div class="header-search-bar">
      <form class="search-bar-tool">
        <div>
          <div class="popover">
            <label class="input-wrapper">
              <input
                type="text"
                maxlength="100"
                autocomplete="off"
                class="input-content"
                placeholder="搜索你感兴趣的内容…"
                value=""
              />
              <button type="button" class="search-button">
                <span style="display: inline-flex; paddingtop: 10px; verticalAlign: middle;">
                  <svg fill="currentColor" viewBox="0 0 24 24" width="18" height="18">
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
</template>

<script>
export default {
  methods: {
    logoClick: function() {
      this.$emit('go-answer-page')
    }
  }
}
</script>

<style scoped>
.header-search {
  display: flex;
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  flex: 1;
  justify-content: center;
}
.header-search-bar {
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
.input-content {
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
</style>
