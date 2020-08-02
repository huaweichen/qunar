import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'

export default Vuex.createStore({
  state,
  actions,
  mutations,
  getters: {
    doubleCity (state) {
      return '当前城市： ' + state.city
    }
  }
});