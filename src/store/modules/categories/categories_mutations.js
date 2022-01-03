const setMessage = (state, messageInput) => {
  state.message = messageInput;
};

const addCategory = (state, category) => {
  state.category = category;
};

export default {
  setMessage,
  addCategory,
};
