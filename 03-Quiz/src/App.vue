<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <div class="container">
    <!-- RouterView is not a component so can't pass data through props. Would have to use useRoute route.params-->
    <RouterView /> 
  </div>
</template>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
}
</style>
