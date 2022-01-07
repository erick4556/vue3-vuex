const setMessage = (state, messageInput) => {
  state.message = messageInput;
};

const CREATE_CATEGORY_REQUEST = (state) => {
  state.loading = true;
  state.error = false;
  state.message = "";
};

const CREATE_CATEGORY_ERROR = (state, error) => {
  state.loading = false;
  state.error = true;
  state.message = error;
  state.category = null;
};

const CREATE_CATEGORY_SUCCESS = (state, category) => {
  state.loading = false;
  state.error = false;
  state.message = "";
  state.category = category;
};

const GET_CATEGORIES_REQUEST = (state) => {
  state.loading = true;
  state.error = false;
  state.message = "";
  state.categories = [];
};

const GET_CATEGORIES_ERROR = (state, error) => {
  state.loading = false;
  state.error = true;
  state.message = error;
  state.categories = [];
};

const GET_CATEGORIES_SUCCESS = (state, categories) => {
  state.loading = false;
  state.error = false;
  state.message = "";
  state.categories = categories;
};

export default {
  setMessage,
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_ERROR,
  CREATE_CATEGORY_SUCCESS,
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_ERROR,
  GET_CATEGORIES_SUCCESS,
};
