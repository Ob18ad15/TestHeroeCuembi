<template>
  <div class="mt-5">
   <div class="card" style="width: 18rem;">
  
  <div class="card-body">
    <h5 class="card-title">{{heroe.name}}</h5>
    <img class="card-img-top" :src= heroe.img alt="Card image cap">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  </div>
</template>


<script>
import "bootstrap";
export default {
  name: "CardHero",

  props: ['heroe']
};
</script>

<style>
</style>