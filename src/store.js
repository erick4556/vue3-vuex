import { createStore, createLogger } from "vuex";

//mutations son funciones que se pueden utilizar para modificar el store

const debug = process.env.NODE_ENV !== "production";

export default createStore({
  state() {
    return {
      categories: [],
      error: true,
      message: "",
    };
  },
  getters: {
    message: (state) => state.message,
    messageReverse: (state) => state.message.split("").reverse().join(""),
    error: (state) => state.error,
  },
  actions: {
    //Puede tener funciones asincronas
    setMessageAct: ({ commit }, message) => {
      commit("setMessage", message);
    },
  },
  mutations: {
    setMessage: (state, messageInput) => {
      state.message = messageInput;
    },
  },
  plugins: debug ? [createLogger()] : [], //Agregar el logger para debug
});
