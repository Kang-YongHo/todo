<template>
  <div class="clearAllContainer">
    <span class="cleaAllBtn" v-on:click="clearTodo">Clear All</span>
  </div>
</template>

<script>
export default {
  name: "TodoFooter",
  methods:{
    clearTodo(){
      this.$store.commit('clearAllItems');
    }
  }
}
</script>

<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}

.cleaAllBtn {
  color: #e20303;
  display: block;
}
</style>