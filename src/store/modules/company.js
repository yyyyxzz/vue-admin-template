
const state = {
 selectedCompany:'0',
 showMenu:false
}

const mutations = {
  CHANGE_COMPANY: (state, company) => {
    state.selectedCompany = company
  },
  CHANGE_SHOW_MENU:(state)=>{
    state.showMenu = !state.showMenu
  }
}

const actions = {
  changeCompany({ commit }, company) {
    commit('CHANGE_COMPANY', company)
  },
  changeShowMenu({commit}){
    commit('CHANGE_SHOW_MENU')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
