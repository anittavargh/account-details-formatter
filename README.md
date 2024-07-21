**A Node.js utility for processing and formatting user account details with currency conversion and formatting support.**

**Sample Input:**
{
  "cursor": 0,
  "results": [
    {
      "account_number": "23823",
      "balance": 10000,
      "currency_code": "CAD",
      "institution": "Wells Fargo",
      "type": "Checking Account(s)",
      "Created By": "1618853077819x838712937924270300",
      "Created Date": "2024-07-15T17:56:11.402Z",
      "Modified Date": "2024-07-15T22:59:49.003Z",
      "description": "Paycheck direct deposit.",
      "_id": "1721066208967x629766039089709000"
    },
    {
      "account_number": "2323",
      "balance": 100,
      "currency_code": "AUD",
      "institution": "Wells Fargo",
      "type": "Checking Account(s)",
      "Created By": "1618853077819x838712937924270300",
      "Created Date": "2024-07-15T17:56:11.402Z",
      "Modified Date": "2024-07-15T22:59:49.003Z",
      "description": "Paycheck direct deposit.",
      "_id": "1721066208967x629766039089709000"
    },
    {
      "account_number": "8897",
      "balance": 100,
      "currency_code": "GBP",
      "institution": "Fidelity",
      "type": "Stocks",
      "Created By": "1618853077819x838712937924270300",
      "Created Date": "2024-07-15T23:00:09.353Z",
      "Modified Date": "2024-07-15T23:00:43.715Z",
      "description": "Microsoft stocks.",
      "_id": "1721084446890x271407019881922560"
    },
    {
      "balance": 100,
      "currency_code": "EUR",
      "institution": "n/a",
      "type": "Cash on Hand",
      "Created By": "1618853077819x838712937924270300",
      "Created Date": "2024-07-15T23:00:45.084Z",
      "Modified Date": "2024-07-15T23:01:30.226Z",
      "_id": "1721084482603x549991178857611260"
    }
  ],
  "count": 4,
  "remaining": 0
}

**Expected Output for Sample Input:**
{
"status": 200,
"result": "1. Account Number: 23823, Balance: $10000.00, Institution: Wells Fargo, Type: Checking Account(s), Description: Paycheck direct deposit.\n2. Account Number: 2323, Balance: $100.00, Institution: Wells Fargo, Type: Checking Account(s), Description: Paycheck direct deposit.\n3. Account Number: 8897, Balance: £100.00, Institution: Fidelity, Type: Stocks, Description: Microsoft stocks.\n4. Account Number: NONE, Balance: €100.00, Institution: n/a, Type: Cash on Hand, Description: NONE\nTOTAL: $7593.32"
}
 

