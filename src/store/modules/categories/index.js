import actions from "./categories_actions";
import getters from "./categories_getters";
import mutations from "./categories_mutations";

const state = () => {
  return {
    categories: [],
    error: true,
    message: "",
  };
};

export default {
  namespaced: true, //Para nombrar el módulo
  state,
  actions,
  mutations,
  getters,
};
