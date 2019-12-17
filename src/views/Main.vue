<template>
  <div class="main">
    <p>Pseudo:&nbsp;<span>{{ pseudo }}</span></p>
    <p>Nombre d'essai:&nbsp;<span id="counter">{{ counter }}</span></p>
    <div>
      <input type="number" min=0 max=10000 placeholder="Saisir un nombre" v-model="value">
      <button @click="proposer">Proposer</button>
    </div>
    <div class="info" v-if="message">
      {{ message }}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      value: null,
    }
  },
  mounted() {
    if(!this.pseudo || !this.token) {
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
    proposer() {
      this.$store.dispatch('proposer', this.value);
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