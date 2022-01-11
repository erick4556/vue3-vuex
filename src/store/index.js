import { createStore, createLogger } from "vuex";

import categories from "./modules/categories";
import transactions from "./modules/transactions";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
  modules: { categories, transactions }, //Para agregar los módulos
  strict: debug, //Para forzar a usar los getters
  plugins: debug ? [createLogger()] : [], //Agregar el logger para debug
});
