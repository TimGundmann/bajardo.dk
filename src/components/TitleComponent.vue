<template>
  <div class="main-title-2">
    <h1>
      {{ firstHeader }}<span>{{ secondHeader }}</span>
    </h1>
    <p>{{ subHeader }}</p>
    <div class="title-border">
      <div class="title-border-inner"></div>
      <div class="title-border-inner"></div>
      <div class="title-border-inner"></div>
      <div class="title-border-inner"></div>
      <div class="title-border-inner"></div>
      <div class="title-border-inner"></div>
      <div class="title-border-inner"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  firstHeader: String,
  secondHeader: String,
  subHeader: String,
});
</script>
