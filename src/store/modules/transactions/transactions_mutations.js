const GET_TRANSACTIONS_REQUEST = (state) => {
  state.loading = true;
  state.error = false;
  state.message = "";
  state.all = [];
};

const GET_TRANSACTIONS_ERROR = (state, error) => {
  state.loading = false;
  state.error = true;
  state.message = error;
  state.all = [];
};

const GET_TRANSACTIONS_SUCCESS = (state, transactions) => {
  state.loading = false;
  state.error = false;
  state.message = "";
  state.all = transactions;
};

const CREATE_TRANSACTION_REQUEST = (state) => {
  state.loading = true;
  state.error = false;
  state.message = "";
  state.transaction = null;
};

const CREATE_TRANSACTION_ERROR = (state, error) => {
  state.loading = false;
  state.error = true;
  state.message = error;
  state.transaction = null;
};

const CREATE_TRANSACTION_SUCCESS = (state, transaction) => {
  state.loading = false;
  state.error = false;
  state.message = "";
  state.transaction = transaction;
};

export default {
  GET_TRANSACTIONS_REQUEST,
  GET_TRANSACTIONS_ERROR,
  GET_TRANSACTIONS_SUCCESS,
  CREATE_TRANSACTION_REQUEST,
  CREATE_TRANSACTION_ERROR,
  CREATE_TRANSACTION_SUCCESS,
};
