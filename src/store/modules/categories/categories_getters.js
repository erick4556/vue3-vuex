const message = (state) => state.message;
const messageReverse = (state) => state.message.split("").reverse().join("");
const error = (state) => state.error;

export default {
  message,
  messageReverse,
  error,
};
