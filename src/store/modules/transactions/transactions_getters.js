const transactions = (state) => state.all;

const ingresosList = (state) => {
  let result = [];
  state.all.forEach((t) => {
    if (!t.gasto) {
      result.push(t);
    }
  });
  return result;
};

const transaction = (state) => state.transaction;

const saldo = (state) => {
  let result = 0;
  state.all.map((t) => (result += t.gasto ? t.amount * -1 : t.amount));
  return result;
};

export default {
  transactions,
  ingresosList,
  transaction,
  saldo,
};
