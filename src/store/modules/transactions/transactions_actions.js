import TransactionService from "../../../services/TransactionService";
import {
  CREATE_TRANSACTION_REQUEST,
  CREATE_TRANSACTION_SUCCESS,
  CREATE_TRANSACTION_ERROR,
  GET_TRANSACTIONS_REQUEST,
  GET_TRANSACTIONS_SUCCESS,
  GET_TRANSACTIONS_ERROR,
} from "./transactions_types";

const createTransaction = async ({ commit }, transaction) => {
  try {
    commit(CREATE_TRANSACTION_REQUEST);
    const transactionCreated = await TransactionService.addTransaction(
      transaction
    );
    commit(CREATE_TRANSACTION_SUCCESS, transactionCreated);
  } catch (error) {
    console.log(error);
    commit(CREATE_TRANSACTION_ERROR, error.message);
  }
};

const getTransactions = async ({ commit }) => {
  try {
    commit(GET_TRANSACTIONS_REQUEST);
    const transactions = await TransactionService.getTransactions();
    commit(GET_TRANSACTIONS_SUCCESS, transactions);
  } catch (error) {
    console.log(error);
    commit(GET_TRANSACTIONS_ERROR, error.message);
  }
};

export default {
  createTransaction,
  getTransactions,
};
