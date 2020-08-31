<template>
  <div class="mt-5">
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">{{heroe.name}}</h5>
        <img class="card-img-top" :src="heroe.img" alt="Card image cap" />
        <p
          class="card-text"
        > Speed: {{heroe.velocidad}} </p>
        <p
          class="card-text"
        >Power: {{heroe.poder}} </p>
        
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