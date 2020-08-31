<template>
  <div class="hello">
    <div id="app" class="container-fluid">
      <div class="row">
        <div class="col-4">
          <div>
            <input
              type="text"
              class="btn"
              placeholder="Busca tu heroe favorito"
              v-model="nombreHeroe1"
              v-on:keyup.enter="buscarHeroe1(nombreHeroe1)"
            />
            <button class="btn" @click="buscarHeroe1(nombreHeroe1)">buscar</button>
            <ul v-if="!this.heroeSelected1">
              <li v-for="item in this.infoHeroe1" v-bind:key="item.id">
                <a href="javascript:;" @click="buscarIdHeroe1(item.id)">{{item.name}}</a>
              </li>
            </ul>

            <div class="col-md-12 mt-5" v-if="this.heroe1.name !== '' ">
              <div v-bind:class="[ganadorHero1 ? 'ganador' : '']">
                <CardHero :heroe="heroe1"></CardHero>
              </div>
            </div>
          </div>
        </div>

        <div class="col-4">
          <h1 v-if="this.heroe1.name !== '' && this.heroe2.name  !== '' ">Vs</h1>
        </div>
        <div class="col-4">
          <div>
            <input
              type="text"
              class="btn"
              placeholder="Busca tu heroe favorito"
              v-model="nombreHeroe2"
              v-on:keyup.enter="buscarHeroe2(nombreHeroe2)"
            />
            <button class="btn" @click="buscarHeroe2(nombreHeroe2)">buscar</button>
            <ul v-if="!this.heroeSelected">
              <li v-for="item in this.infoHeroe2" v-bind:key="item.id">
                <a href="javascript:;" @click="buscarIdHeroe2(item.id)">{{item.name}}</a>
              </li>
            </ul>
            <div class="col-md-12 mt-5" v-if="this.heroe2.name !== '' ">
              <div v-bind:class="[ganadorHero2 ? 'ganador' : '']">
                <CardHero :heroe="heroe2"></CardHero>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12" v-if="this.heroe1.name !== '' && this.heroe2.name  !== '' ">
          <BotonesFight :heroe2="heroe2" :heroe1="heroe1" v-on:winner="esGanador"></BotonesFight>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CardHero from "./CardHero.vue";
import BotonesFight from "./BotonesFight.vue";

export default {
  name: "HelloWorld",

  props: {
    msg: String
  },

  data() {
    return {
      heroeSelected: true,
      heroeSelected1: true,
      ganadorHero2: false,
      ganadorHero1: false,
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
    CardHero,
    BotonesFight
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
      this.ganadorHero2 = false;
      this.ganadorHero1= false;
      this.heroeSelected1 = true;
    },

    async buscarIdHeroe2(id) {
      this.heroe2 = await this.buscarId(id);
      this.ganadorHero2 = false;
      this.ganadorHero1= false;
      this.heroeSelected = true;
    },

    async buscarHeroe1(nombre) {
      this.infoHeroe1 = await this.buscar(nombre);
      if (this.infoHeroe1 == null) {
        alert("no se encontraron datos");
      }
      this.ganadorHero2 = false;
      this.ganadorHero1= false;
      this.heroeSelected1 = false;
    },

    async buscarHeroe2(nombre) {
      this.infoHeroe2 = await this.buscar(nombre);
      if (this.infoHeroe2 == null) {
        alert("no se encontraron datos");
      }
      this.ganadorHero2 = false;
      this.ganadorHero1= false;
      this.heroeSelected = false;
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
    },

    esGanador(winner) {
      this.ganadorHero2 = false;
      this.ganadorHero1 = false;
      if (winner == null){
        alert("La velocidad de uno de los competidores es nula, intenta con otro");
      }

      if (
        winner == "ganadorHero2" ||
        winner == "ganadorHero1" ||
        winner == "empate"
      ) {
        if (winner == "ganadorHero2") {
          this.ganadorHero2 = true;
        }

        if (winner == "ganadorHero1") {
          this.ganadorHero1 = true;
        }

        if (winner == "empate") {
          this.ganadorHero1 = true;
          this.ganadorHero2 = true;
          alert("Aqui hay un empate..");
        }
      }
      if (
        winner == "ganadorSpeedHero2" ||
        winner == "ganadorSpeedHero1" ||
        winner == "empateSpedd"
      ) {
        if (winner == "ganadorSpeedHero2") {
          this.ganadorHero2 = true;
        }
        if (winner == "ganadorSpeedHero1") {
          this.ganadorHero1 = true;
        }

        if (winner == "empateSpedd") {
          this.ganadorHero1 = true;
          this.ganadorHero2 = true;
          alert("Aqui hay un empate en velocidad..");
        }
      }
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
  display: block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
