const message = (state) => state.message;
const messageReverse = (state) => state.message.split("").reverse().join("");
const error = (state) => state.error;
const category = (state) => state.category;

export default {
  message,
  messageReverse,
  error,
  category,
};
