<template>
  <!-- html -->
  <header>
    <h1>{{ this.headerText }}</h1>
  </header>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "TodoHeader",
  computed:{
    ...mapGetters({headerText : 'headerText'})
  }
  // js script
}
</script>

<style scoped>
h1 {
  color: #2F3B52;
  font-weight: 900;
  margin: 2.5rem 0 1.5rem;
}
</style>