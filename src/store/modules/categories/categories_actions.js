import CategoryService from "../../../services/CategoryService";
import {
  CREATE_CATEGORY_ERROR,
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_SUCCESS,
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_ERROR,
} from "./categories_types";

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

const getCategories = async ({ commit }) => {
  try {
    commit(GET_CATEGORIES_REQUEST);
    const categories = await CategoryService.getCategories();
    commit(GET_CATEGORIES_SUCCESS, categories);
  } catch (error) {
    console.log(error);
    commit(GET_CATEGORIES_ERROR, error);
  }
};

export default {
  setMessageAct,
  addCategory,
  getCategories,
};
