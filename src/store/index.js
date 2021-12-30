import { createStore, createLogger } from "vuex";

const debug = process.env.NODE_ENV !== "production";
import categories from "./modules/categories";

export default createStore({
  modules: { categories }, //Para agregar los módulos
  plugins: debug ? [createLogger()] : [], //Agregar el logger para debug
});
