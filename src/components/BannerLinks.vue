<template>
<div class="carousel-item item-bg" :class="{ 'active' : active }" :style="{ backgroundImage: 'url(' + image + ')' }">
    <div class="carousel-caption banner-slider-inner d-flex h-100">
        <div class="banner-content container align-self-center text-center">
            <h1 class="carousel__headline">{{ headLine }}</h1>
            <p class="carousel__text">{{ description }}</p>
            <a class="btn-2 btn-defaults" href="#"> <span>Get Started Now</span> <i class="arrow"></i> </a>
            <a class="btn-1 btn-outline-1" href="#"> <span class="carousel__text--black-outline">Learn More</span> <i class="arrow"></i> </a>
        </div>
    </div>
</div>
</template>
<script setup lang="ts">

defineProps({
    image: String,
    headLine: String,
    description: String,
    active: Boolean
});

</script>
<style>
.carousel-item {
  height: 100vh;
  min-height: 350px; /* you can adjust this minimum height as needed */
  background: no-repeat center center scroll;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.carousel-item img {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  height: 100vh;
}

.carousel__text--black-outline {
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
}  

.carousel__headline {
  text-shadow: -1px -1px 0 #95c41f, 1px -1px 0 #95c41f, -1px 1px 0 #95c41f, 1px 1px 0 #95c41f;
  color: white !important;
  font-weight: 700;
}
.carousel__text {
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  color: white !important;
  font-size: 1.25rem;
}
</style>