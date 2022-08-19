import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    advantages: []
  },
  getters: {
    ADVANTAGES(state){
      return state.advantages
    }
  },
  mutations: {
    SET_ADVANTAGES_TO_STATE: ( state, advantages) => {
      state.advantages = advantages
    }
  },
  actions: {
    async GET_ADVANTAGES_FROM_DB({commit}){
      
      try {
        const advantages = await axios("https://raw.githubusercontent.com/sedm1/svc/main/db.json", {
          method: "GET"
        })

        commit("SET_ADVANTAGES_TO_STATE", advantages.data)
        return advantages
      } catch(error) {
        console.log(error)
        return error
      }
    }
  },
  modules: {
  }
})
