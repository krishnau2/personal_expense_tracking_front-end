const DEFAULT_ROW_COUNT = 3;

export const transactionRowDataObject = () => {
  return { accountId: 0, note: "", amount: 0 };
};

export const defaultTransactionRowObject = () => {
  let defaultRows = {};
  for (let i = 1; i <= DEFAULT_ROW_COUNT; i++) {
    defaultRows[Date.now() + i] = transactionRowDataObject();
  }
  return defaultRows;
};
