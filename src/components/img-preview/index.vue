<template>
  <div v-show="isPreview" class="preview">
    <img :src="src" @click="hideImg" />
  </div>
</template>

<script>
export default {
  props: {
    isPreview: {
      required: true,
      type: Boolean
    },
    src: {
      required: true,
      type: String
    }
  },
  data: function() {
    return {}
  },
  methods: {
    hideImg: function() {
      this.$emit('zoom-img')
    }
  }
}
</script>

<style scoped>
.preview {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  overflow: scroll;
  padding: 10px;
  background-color: rgba(18, 18, 18, 0.65);
  transition: background-color 0.2s ease-in-out;
}
img {
  width: 100%;
  cursor: zoom-out;
}
</style>
