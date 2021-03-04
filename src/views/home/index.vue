<template>
  <div class="home">
    <question-header></question-header>
    <div class="question-main">
      <div class="question-main-column"></div>
      <question-side-column></question-side-column>
    </div>
  </div>
</template>

<script>
import QuestionSideColumn from "./components/question-side-column.vue";
import QuestionHeader from "./components/question-header.vue";
export default {
  name: "Home",
  data: function () {
    return {};
  },
  components: {
    QuestionHeader,
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
.question-main-column {
  width: 694px;
  padding-bottom: 20px;
}
</style>
