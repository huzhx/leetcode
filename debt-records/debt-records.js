const getSmallestNegatives = (numCols, numRows, debts) => {
  const personDebtHash = {}; // person => debt
  let min = 0;
  let output = [];

  for (let r = 0; r < numRows; r++) {
    const [borrower, lender, amount] = debts[r];
    const borrowerCurDebt = personDebtHash[borrower] || 0;
    const lenderCurDebt = personDebtHash[lender] || 0;
    personDebtHash[borrower] = borrowerCurDebt - amount;
    personDebtHash[lender] = lenderCurDebt + amount;
  }

  for (let key of Object.keys(personDebtHash)) {
    if (personDebtHash[key] < min) {
      min = personDebtHash[key];
      output = [key];
    } else if (personDebtHash[key] === min && min !== 0) {
      output.push(key);
    }
  }

  if (output.length > 0) {
    output.sort();
  } else {
    output.push('Nobody has a negative balance');
  }

  return output;
};

export default getSmallestNegatives;
