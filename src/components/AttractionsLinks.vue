<template>
  <div id="attractionsLinks" class="content-area featured-properties">
    <div class="container">
      <TitleComponent
        :first-header="$t('seværdigheder.firstHeadLine')"
        :second-header="$t('seværdigheder.secondHeadline')"
        :sub-header="$t('seværdigheder.subText')"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import TitleComponent from "./TitleComponent.vue";
</script>
