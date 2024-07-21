const CC = require("currency-converter-lt");
const currencyConverter = new CC();

const convertCurrency = async (from, to, amount) => {
  if (typeof amount !== "number" || isNaN(amount)) {
    return 0;
  }
  try {
    let convertedAmt = await currencyConverter
      .from(from)
      .to(to)
      .amount(amount)
      .convert();
    if (!convertedAmt) return 0;
    return convertedAmt;
  } catch (err) {
    console.error(`Couldn't fetch the exchange rate, ${err.message}`);
    return "Error fetching rate";
  }
};

module.exports = { convertCurrency };
