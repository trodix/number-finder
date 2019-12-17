<template>
  <div class="main">
    <p>Nombre d'essai:&nbsp;<span id="nb-try">{{ nbTry }}</span></p>
    <div>
      <input type="number" min=0 max=10000 placeholder="Saisir un nombre" :value="value">
      <button @click="proposer">Proposer</button>
    </div>
    <div class="info" v-if="message">
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nbTry: 0,
      message: null,
      pseudo: '',
      token: '',
      value: null,
      url: 'http://numberfinder.noodigital.fr'
    }
  },
  mounted() {
    this.pseudo = this.$router.currentRoute.params.pseudo;
    this.token = this.$router.currentRoute.params.token;
  },
  methods: {
    proposer() {
      axios.post(url, {
        token: this.token,
        value: this.value
      }).then(response => {
        console.log(response);
        if(response.data.) {
          this.$router.push({ name: 'end', pseudo: this.pseudo, token: this.token });
        }
        this.nbTry++;
      }).catch(err => console.log(err.toString()));
    }
  }
}
</script>

<style scoped>
.info {
  padding: 10px 10px;
  background-color: lightskyblue;
  font-size: 1.3em;
}
</style>