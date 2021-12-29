const state = () => {
  return {
    categories: [],
    error: true,
    message: "",
  };
};

const getters = {
  message: (state) => state.message,
  messageReverse: (state) => state.message.split("").reverse().join(""),
  error: (state) => state.error,
};

const actions = {
  //Puede tener funciones asincronas
  setMessageAct: ({ commit }, message) => {
    commit("setMessage", message);
  },
};

const mutations = {
  setMessage: (state, messageInput) => {
    state.message = messageInput;
  },
};

export default {
  namespaced: true, //Para nombrar el módulo
  state,
  actions,
  mutations,
  getters,
};
