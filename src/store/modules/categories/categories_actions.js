import CategoryService from "../../../services/CategoryService";

const setMessageAct = ({ commit }, message) => {
  commit("setMessage", message);
};

const addCategory = async ({ commit }, category) => {
  try {
    const categoryId = await CategoryService.addCategory(category);
    console.log(categoryId);
    commit("addCategory", categoryId);
  } catch (error) {
    console.log(error);
  }
};

export default {
  setMessageAct,
  addCategory,
};
