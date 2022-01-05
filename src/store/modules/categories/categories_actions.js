import CategoryService from "../../../services/CategoryService";
import {
  CREATE_CATEGORY_ERROR,
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_SUCCESS,
} from "./categories.type";

const setMessageAct = ({ commit }, message) => {
  commit("setMessage", message);
};

const addCategory = async ({ commit }, category) => {
  try {
    commit(CREATE_CATEGORY_REQUEST);
    const categoryId = await CategoryService.addCategory(category);
    console.log(categoryId);
    commit(CREATE_CATEGORY_SUCCESS, categoryId);
  } catch (error) {
    console.log(error);
    commit(CREATE_CATEGORY_ERROR, error);
  }
};

export default {
  setMessageAct,
  addCategory,
};
