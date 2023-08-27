<!-- options api is old, like the one used in splendid foods project. this is composition api. composition needs setup in script tag. -->
<script setup>
import {ref} from "vue"

let count = ref(0)
// would need to extract value from count if in script
</script>

<!-- template tag is required and is removed by vue when it gets to the browser -->
<template>
  <main>
      <container class="container">
        <h4>the current count is...</h4>
        <!-- automatically extracts value from count if in template -->
        <h1>{{count}}</h1>
        <button @click="count++">+</button>
        <button @click="count--">-</button>
      </container>
  </main>
</template>

<style scoped>
main {
  width: 100vw;
  height: 100vh;
  background-color: aliceblue;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  text-align: center;
}
</style>
