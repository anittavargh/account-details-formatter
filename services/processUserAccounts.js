const { convertCurrency } = require("../helpers/currencyConvertor");
const { currencyFormat } = require("../helpers/currencyFormatter");

const processUserAccounts = async (accountDetails) => {
  let totalAmount = 0;

  const formattedAccountDetails = await Promise.all(
    accountDetails.map(async (item, index) => {
      const {
        currency_code,
        balance,
        account_number = "NONE",
        institution = "NONE",
        type = "NONE",
        description = "NONE",
      } = item;

      let totalAmountInUSD = 0;
      let formattedAmount = "";

      try {
        totalAmountInUSD = await convertCurrency(currency_code, "USD", balance);
        totalAmount += totalAmountInUSD;
      } catch (error) {
        console.error(
          `Error converting currency for account ${account_number}:`,
          error
        );
      }

      try {
        formattedAmount = await currencyFormat(currency_code, balance);
      } catch (error) {
        console.error(
          `Error formatting currency for account ${account_number}:`,
          error
        );
      }

      return `${
        index + 1
      }. Account Number: ${account_number}, Balance: ${formattedAmount}, Institution: ${institution}, Type: ${type}, Description: ${description}`;
    })
  );

  formattedAccountDetails.push(`TOTAL: $${totalAmount.toFixed(2)}`);

  const result = formattedAccountDetails.join("\n");
  return result;
};

module.exports = { processUserAccounts };
