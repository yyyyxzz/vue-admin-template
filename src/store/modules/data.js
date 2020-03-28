const state = {
  realData: {},
  getData: {}
};

const mutations = {
  changeReal(state, value) {
    state.realData = value;
  },
  changeGet(state, value) {
    state.getData = value;
  }
};

const actions = {
  changeRealFun(ctx, value) {
    ctx.commit("changeReal", value);
  },
  changeGetFun(ctx, value) {
    ctx.commit("changeGet", value);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
