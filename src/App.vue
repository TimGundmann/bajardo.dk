<template>
  <div>
    <div class="page_loader"></div>
    <HomePage msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HomePage from "./components/HomePage.vue";

export default {
  name: "App",
  components: {
    HomePage,
  },
};
</script>
