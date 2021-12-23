import { createStore, createLogger } from "vuex";

const debug = process.env.NODE_ENV !== "production";
export default createStore({
  state() {
    return {};
  },
  actions: {},
  mutations: {},
  plugins: debug ? [createLogger()] : [], //Agregar el logger para debug
});
