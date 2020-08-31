<template>
  <div class="mt-5">
      <button type="button" class="btn btn-primary spaceBtn" @click="runHero()">RUN</button>
      <button type="button" class="btn btn-secondary spaceBtn" @click="fightHero()">FIGHT</button>
      <div>
      </div>
  </div>

</template>

<script>
export default {
  name: "BotonesFight",

  props: ['heroe1', 'heroe2'],

  data() {
    return {
      ganadorFight: '',
      ganadorSpeed: '',
    }

  },

  methods: {

    fightHero() {
       this.ganadorFight = '';
       
      if (this.heroe1.poder < this.heroe2.poder ) {
        this.ganadorFight ='ganadorHero2';
        this.$emit('winner', this.ganadorFight);
      } else if (this.heroe1.poder > this.heroe2.poder ) {
        this.ganadorFight ='ganadorHero1';
        this.$emit('winner', this.ganadorFight);
      } else {
        this.ganadorFight = 'empate'
        this.$emit('winner', this.ganadorFight);
      }
      
    },

    runHero() {
      this.ganadorSpeed= '';
      if (this.heroe1.velocidad < this.heroe2.velocidad ) {
        this.ganadorSpeed= 'ganadorSpeedHero2';
        this.$emit('winner', this.ganadorSpeed)
      } else if (this.heroe1.velocidad > this.heroe2.velocidad ) {
        this.ganadorSpeed = 'ganadorSpeedHero1';
        this.$emit('winner', this.ganadorSpeed)
      } else {
        this.ganadorSpeed = 'empateSpedd';
        this.$emit('winner', this.ganadorSpeed)
      }
      if (this.heroe1.velocidad == null || this.heroe2.velocidad == null ) {
        alert("La velocidad de uno de los competidores es nula, intenta con otro")
        this.$emit('winner', null)
      }


    }
   
  }
}
</script>

<style>

</style>