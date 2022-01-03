import actions from "./categories_actions";
import getters from "./categories_getters";
import mutations from "./categories_mutations";

const state = () => {
  return {
    categories: [],
    error: false,
    message: "",
    category: null,
  };
};

export default {
  namespaced: true, //Para nombrar el módulo
  state,
  actions,
  mutations,
  getters,
};
