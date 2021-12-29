import { createStore, createLogger } from "vuex";

//mutations son funciones que se pueden utilizar para modificar el store

const debug = process.env.NODE_ENV !== "production";
import categories from "./store/categories";

export default createStore({
  modules: { categories }, //Para agregar los módulos
  plugins: debug ? [createLogger()] : [], //Agregar el logger para debug
});
