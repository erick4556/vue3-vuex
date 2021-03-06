import mutations from "./transactions_mutations";
import actions from "./transactions_actions";
import getters from "./transactions_getters";

const state = () => {
  return {
    all: [],
    transaction: null,
    loading: false,
    error: false,
    message: "",
  };
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
