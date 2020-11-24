<template>
<q-page>
  <div class="portfolio flex-center q-mt-lg q-mb-xl q-gutter-xl row q-pa-md">
    <div class="text-center col-4">
      <q-carousel
      class="q-mb-sm"
      animated
      v-model="slide"
      arrows
      navigation
      infinite
    >
        <q-carousel-slide :name="1" img-src="..//assets/videos/dif/dif1.jpg" />
        <q-carousel-slide :name="2" img-src="..//assets/videos/dif/dif2.jpg" />
        <q-carousel-slide :name="3" img-src="..//assets/videos/dif/dif3.jpg" />
        <q-carousel-slide :name="4" img-src="..//assets/videos/dif/dif5.jpg" />
        <q-carousel-slide :name="5" img-src="..//assets/videos/dif/dif4.jpg" />
      </q-carousel>
        <p>Front-end desenvolvido para a Empresa DIF</p>
    </div>
    <div class="text-center col-4">
        <q-carousel
        class="q-mb-sm"
      animated
      v-model="slides"
      arrows
      navigation
      infinite
    >
        <q-carousel-slide :name="6" img-src="..//assets/videos/eco/eco1.jpg" />
        <q-carousel-slide :name="7" img-src="..//assets/videos/eco/eco11.jpg" />
        <q-carousel-slide :name="8" img-src="..//assets/videos/eco/eco2.jpg" />
        <q-carousel-slide :name="9" img-src="..//assets/videos/eco/eco3.jpg" />
        </q-carousel>
         <p class="text-center">Projeto para a Faculdade FICR usando Quasar, vue.js</p>
    </div>
</div>
<div class="portfolio flex-center q-gutter-xl row">
    <q-img class="q-mb-sm" width="500px" height="400px" src="..//assets/videos/vivernoseua.jpg">
    </q-img></div>
    <p style="font-size:20px" class="text-center">Front-end desenvolvido para Empresa de Advocacia</p>
</q-page>
  </template>

<script>
export default {
  data () {
    return {
      slide: 1,
      slides: 6
    }
  }
}
</script>

<style>
.q-carousel {
    width:500px;
}

.portfolio p{
    font-size:20px;
}

</style>
