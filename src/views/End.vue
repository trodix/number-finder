<template>
  <div class="result">
    <h1>Résultat</h1>
    <p>pseudo:&nbsp;<span>{{ pseudo }}</span></p>
    <p>counter:&nbsp;<span>{{ counter }}</span></p>
    <div class="info" v-if="message">
      {{ message }}
    </div>
    <button id="#play-again" @click="playAgain">Rejouer</button>
  </div>
</template>

<script>
/*eslint no-console: "off"*/
import { mapState } from 'vuex'

export default {
  mounted() {
    if(!this.pseudo || !this.token) {
      console.log("redirect !")
      this.$router.push('/')
    }
  },
  computed: {
    ...mapState({
      pseudo: state => state.pseudo,
      token: state => state.token,
      counter: state => state.counter,
      message: state => state.message,
    })
  },
  methods: {
    playAgain() {
      this.$store.dispatch('playAgain')
    }
  }
}
</script>

<style>
.info {
  padding: 10px 10px;
  background-color: #008800;
  font-size: 1.3em;
  color: white;
}
</style>