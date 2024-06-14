<script setup lang="ts">
import { RouterView } from 'vue-router'
import '@/assets/vendor/jquery/jquery.min.js'
import '@/assets/vendor/bootstrap/js/bootstrap.bundle.min.js'
import '@/assets/js/owl-carousel.js'
//import '@/assets/js/animation.js'
import '@/assets/js/imagesloaded.js'
import '@/assets/js/custom.js'
import MainHeader from '@/components/MainHeader.vue'
import MainFooter from '@/components/MainFooter.vue'
</script>
<template>
  <main>
    <MainHeader />
    <RouterView />
  </main>
  <MainFooter />
</template>

<style>
@import '@/assets/vendor/bootstrap/css/bootstrap.min.css';
@import '@/assets/css/fontawesome.css';
@import '@/assets/css/templatemo-digimedia-v3.css';
@import '@/assets/css/animated.css';
@import '@/assets/css/owl.css';
</style>
