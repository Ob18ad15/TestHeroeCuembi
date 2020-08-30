<template>
  <div class="hello">
    <div id="app" class="container-fluid">
      <div class="row">
        <div class="col-4">
          <div>
            <input type="text" v-model="nombreHeroe1" v-on:keyup.enter="buscarHeroe1(nombreHeroe1)" />
            <button @click="buscarHeroe1(nombreHeroe1)">buscar</button>
            <ul>
              <li v-for="item in this.infoHeroe1" v-bind:key="item.id">
                <a href="javascript:;" @click="buscarIdHeroe1(item.id)">{{item.name}}</a>
              </li>
            </ul>

            <div v-if="this.heroe1.name !== '' ">
              <CardHero :heroe="heroe1"></CardHero>
            </div>
          </div>
        </div>

        <div class="col-4">
          <h1 v-if="this.heroe1.name !== '' && this.heroe2.name  !== '' ">Vs</h1>
        </div>
        <div class="col-4">
          <div>
            <input type="text" v-model="nombreHeroe2" v-on:keyup.enter="buscarHeroe2(nombreHeroe2)" />
            <button @click="buscarHeroe2(nombreHeroe2)">buscar</button>
            <ul>
              <li v-for="item in this.infoHeroe2" v-bind:key="item.id">
                <a href="javascript:;" @click="buscarIdHeroe2(item.id)">{{item.name}}</a>
              </li>
            </ul>
            <div v-if="this.heroe2.name !== '' ">
              <div>
                <CardHero :heroe="heroe2"></CardHero>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          

        </div>

      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CardHero from "./CardHero.vue";

export default {
  name: "HelloWorld",

  props: {
    msg: String
  },

  data() {
    return {
      infoHeroe1: null,
      infoHeroe2: null,
      heroSelected: null,
      busqueda: "",
      articulos: [],
      articuloSeleccionado: {},
      showCard: false,
      heroe1: {
        name: "",
        img: "",
        velocidad: "",
        poder: ""
      },

      heroe2: {
        name: "",
        img: "",
        velocidad: "",
        poder: ""
      },
      nombreHeroe1: "",
      nombreHeroe2: ""
    };
  },
  components: {
    CardHero
  },

  methods: {
    async buscar(nombre) {
      let headers = {
        "Content-Type": "application/json",
        Authorization: "JWT fefege..."
      };
      return await axios
        .get(
          `https://www.superheroapi.com/api.php/10160490325759782/search/${nombre}`,
          headers
        )
        .then(response => response.data.results);
    },

    async buscarIdHeroe1(id) {
      this.heroe1 = await this.buscarId(id);
    },

    async buscarIdHeroe2(id) {
      this.heroe2 = await this.buscarId(id);
    },

    async buscarHeroe1(nombre) {
      this.infoHeroe1 = await this.buscar(nombre);
    },

    async buscarHeroe2(nombre) {
      this.infoHeroe2 = await this.buscar(nombre);
    },

    async buscarId(id) {
      let headers = {
        "Content-Type": "application/json",
        Authorization: "JWT fefege..."
      };
      const data = await axios
        .get(
          `https://www.superheroapi.com/api.php/10160490325759782/${id}`,
          headers
        )
        .then(response => {
          let data = {
            name: response.data.name,
            img: response.data.image.url,
            velocidad: response.data.powerstats.speed,
            poder: response.data.powerstats.strength
          };
          return data;
        });
      return data;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
