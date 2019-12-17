/*eslint no-console: "off"*/
/*eslint no-unused-vars: "off"*/


import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pseudo: null,
    token: null,
    counter: 0,
    value: null,
    message: null,
    success: false
  },
  mutations: {
    set_token(state, value) {
      state.token = value;
    },
    set_message(state, value) {
      state.message = value;
    },
    set_pseudo(state, value) {
      state.pseudo = value;
    },
    set_success(state, value) {
      state.success = value;
    },
    reset_state(state) {
      console.log("play again hit !")

      Object.assign(state, {
        pseudo: null,
        token: null,
        counter: 0,
        value: null,
        message: null,
        success: false
      })
    }
  },
  actions: {
    startGame({ commit }, _pseudo) {
      axios.post("/startGame", {
        pseudo: _pseudo
      })
      .then(response => {
        if(!response.data.error) {
          commit('set_token', response.data.token);
          commit('set_pseudo', _pseudo);
          console.log("token:", response.data.token);
          router.push({ name: 'game' });
        } else {
          commit('set_message', response.data.error);
        }
      })
      .catch(err => console.log(err.toString()));
    },
    proposer({ commit, state }, value) {
      console.log(value);
      axios.post("/checkValue", {
        token: state.token,
        value: value
      }).then(response => {
        const data = response.data.response; 
        console.log("data:", data);
        if(data.indication && data.success === false) {
          console.log("Indication:", data.indication)
          commit('set_message', data.indication)
        } else if(data.indication && data.success === true) {
          console.log("Success:", data.success)
          commit('set_success', data.success)
          commit('set_message', data.indication)
          router.push({ name: 'end' });
        } else {
          commit('set_message', "Erreur !")
        }
        state.counter++;
      }).catch(err => console.log(err.toString()));
    },
    playAgain({ commit, dispatch, state }) {
      const oldPseudo = state.pseudo
      commit('reset_state');
      dispatch('startGame', oldPseudo);
      router.push({ name: 'game' });
    }
  },
  modules: {
  }
})
