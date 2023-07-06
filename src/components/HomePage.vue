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
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item item-bg active" :style="{ backgroundImage: 'url(' + image3 + ')' }">
          <div class="carousel-caption banner-slider-inner d-flex h-100">
            <div class="banner-content container align-self-center text-center">
              <h1>Bajardo</h1>
              <p>Allow us to guide you through the innovative stress free approach in finding your dream Properties.</p>
              <a class="btn-2 btn-defaults" href="#"> <span>Get Started Now</span> <i class="arrow"></i> </a>
              <a class="btn-1 btn-outline-1" href="#"> <span>Learn More</span> <i class="arrow"></i> </a>
            </div>
          </div>
        </div>
        <div class="carousel-item item-bg" :style="{ backgroundImage: 'url(' + image4 + ')' }">
          <div class="carousel-caption banner-slider-inner d-flex h-100">
            <div class="banner-content container align-self-center text-center">
              <h1>Bajardo</h1>
              <p>Allow us to guide you through the innovative stress free approach in finding your dream Properties.</p>
              <a class="btn-2 btn-defaults" href="#"> <span>Get Started Now</span> <i class="arrow"></i> </a>
              <a class="btn-1 btn-outline-1" href="#"> <span>Learn More</span> <i class="arrow"></i> </a>
            </div>
          </div>
        </div>
        <div class="carousel-item item-bg" :style="{ backgroundImage: 'url(' + image1 + ')' }">
          <div class="carousel-caption banner-slider-inner d-flex h-100">
            <div class="banner-content container align-self-center text-center">
              <h1>Bajardo</h1>
              <p>Allow us to guide you through the innovative stress free approach in finding your dream Properties.</p>
              <a class="btn-2 btn-defaults" href="#"> <span>Get Started Now</span> <i class="arrow"></i> </a>
              <a class="btn-1 btn-outline-1" href="#"> <span>Learn More</span> <i class="arrow"></i> </a>
            </div>
          </div>
        </div>
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
</style>