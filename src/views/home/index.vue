<template>
  <div class="home">
    <question-header></question-header>
    <div class="question-main">
      <question-main-column></question-main-column>
      <question-side-column></question-side-column>
    </div>
  </div>
</template>

<script>
import QuestionHeader from "./components/question-header.vue";
import QuestionMainColumn from "./components/question-main-column.vue";
import QuestionSideColumn from "./components/question-side-column.vue";
export default {
  name: "Home",
  data: function () {
    return {};
  },
  mounted: function() {
    document.title = '有哪些值得每天一看的网站？'
  },
  components: {
    QuestionHeader,
    QuestionMainColumn,
    QuestionSideColumn,
  },
};
</script>

<style scoped>
.home {
  margin-top: 3px;
}
.question-main {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 10px auto;
  padding: 0 16px;
  width: 1000px;
  min-height: 100vh;
}
</style>
