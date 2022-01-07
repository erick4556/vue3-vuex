const message = (state) => state.message;
const messageReverse = (state) => state.message.split("").reverse().join("");
const error = (state) => state.error;
const category = (state) => state.category;
const loading = (state) => state.loading;
const categories = (state) => state.categories;

export default {
  message,
  messageReverse,
  error,
  category,
  loading,
  categories,
};
