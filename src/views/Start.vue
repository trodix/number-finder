<template>
  <div id="start">
    <input type="text" v-model="pseudo_tmp" required>
    <button @click=startGame>Jouer</button>
    <div class="info" v-if="message">
      {{ message }}
    </div>
    <div class="score">
      <table>
        <tr v-for="s in score" :key="s.token">
          <td>{{ s.pseudo }}</td>
          <td>{{ s.cnt }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
/*eslint no-console: "off"*/

export default {
  data() {
    return {
      pseudo_tmp: null,
    }
  },
  created() {
    this.$store.dispatch('loadScore');
  },
  computed: {
    ...mapState({
      pseudo: state => state.pseudo,
      token: state => state.token,
      message: state => state.message,
      score: state => state.score,
    })
  },
  methods: {
    startGame() {
      this.$store.dispatch('startGame', this.pseudo_tmp);
    }
  }
}
</script>

<style>
.info {
  padding: 10px 10px;
  background-color: lightskyblue;
  font-size: 1.3em;
}
</style>