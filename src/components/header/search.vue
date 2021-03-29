<template>
  <form class="search-wrapper">
    <label :class="['input-wrapper', { 'is-focus': isFocus }]">
      <input
        class="input-content"
        type="text"
        maxlength="100"
        autocomplete="off"
        placeholder="搜索你感兴趣的内容…"
        @focus="isFocus = true"
        @blur="isFocus = false"
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
  </form>
</template>

<script>
export default {
  data: function() {
    return {
      isFocus: false
    }
  },
  methods: {
    logoClick: function() {
      this.$emit('go-answer-page')
    }
  }
}
</script>

<style scoped>
.search-wrapper {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  z-index: 104;
}
.input-wrapper {
  width: 100%;
  height: 34px;
  border-radius: 999px;
  background: #f6f6f6;
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  padding: 4px 0 4px 16px;
  font-size: 14px;
  border: 1px solid #ebebeb;
  transition: 0.5s ease;
}
.input-wrapper.is-focus {
  background: #fff;
  border-color: #8590a6;
}
.input-content {
  height: 24px;
  line-height: 24px;
  color: #121212;
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
  margin-left: 12px;
  padding: 0 12px;
  border-bottom-right-radius: 999px;
  border-top-right-radius: 999px;
  background: transparent;
  border-color: transparent;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}
</style>
