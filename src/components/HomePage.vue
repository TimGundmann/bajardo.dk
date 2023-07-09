<template>
  <div class="banner text-center" id="banner2">
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCations"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <BannerLinks :active="true" :image="image3" :headLine="$t('bajardo')" description="Nyd roen og den fantastiske udsigt i en lille bjergby tæt på Sanremo og Nice"/> 
        <BannerLinks :image="image4" :headLine="$t('ferielejligheder')" description="Du har mulighed for at leje lejligheder i forskellig størrelse og med forskelligt særpræg"/> 
        <BannerLinks :image="image1" headLine="Seværdigheder" description="Natur, italiensk mad og strandliv. Her er alt, hvad du har brug for på din ferie"/> 
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  <ArrigoLinks></ArrigoLinks> 
</template>

<script setup lang="ts">
import image1 from "@/assets/img/banner/img-1.jpg";
import image3 from "@/assets/img/banner/img-3.png";
import image4 from "@/assets/img/banner/img-4.png";
import ArrigoLinks from "./ArrigoLinks.vue";
import BannerLinks from "./BannerLinks.vue";
</script>
