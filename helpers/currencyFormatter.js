var currencyFormatter = require("currency-formatter");

const currencyFormat = async (currencyCode, amount) => {
  if (typeof amount !== "number" || isNaN(amount)) {
    amount = 0;
  }
  const currency = currencyFormatter.findCurrency(currencyCode);
  if (!currency) {
    return `${amount}${currencyCode}`;
  }

  const currencySymbol = currency.symbol;
  const formattedBalance = amount.toFixed(2);
  return `${currencySymbol}${formattedBalance}`;
};

module.exports = { currencyFormat };
