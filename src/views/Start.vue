<template>
  <div id="start">
    <input type="text" :value="pseudo" required>
    <button @click=startGame>Jouer</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      pseudo: '',
      url: 'http://numberfinder.noodigital.fr'
    }
  },
  methods: {
    startGame() {
      axios.post(this.url, {
        pseudo: this.pseudo
      })
      .then(response => {
        this.$router.push({ name: 'game', params: { pseudo: this.pseudo, token: this.response.data.token } });
      })
      .catch(err => console.log(err.toString()));
    }
  }
}
</script>

<style>

</style>