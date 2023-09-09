<template>
  <div id="bajardoLinks" class="content-area featured-properties">
    <div class="container">
      <TitleComponent
        :first-header="$t('bajardo.firstHeadLine')"
        :second-header="$t('bajardo.secondHeadline')"
        :sub-header="$t('bajardo.subText')"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import TitleComponent from "./TitleComponent.vue";
</script>
