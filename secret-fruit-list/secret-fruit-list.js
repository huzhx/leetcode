const findSecretFruitList = (customerPurchasedList, secretFruitLists) => {
  let purchasedIndex = 0;
  let secretListsIndex = 0;

  while (purchasedIndex < customerPurchasedList.length) {
    if (customerPurchasedList[purchasedIndex] === secretFruitLists[secretListsIndex][0]) {
      if (isMatched(purchasedIndex, secretListsIndex)) {
        purchasedIndex += secretFruitLists[secretListsIndex].length;
        secretListsIndex++;
        if (secretListsIndex === secretFruitLists.length) {
          return true;
        }
      } else {
        purchasedIndex++;
      }
    } else {
      purchasedIndex++;
    }
  }

  return false;

  function isMatched(purchasedIndex, secretListsIndex) {
    const secretFruitList = secretFruitLists[secretListsIndex];
    for (let i = 0; i < secretFruitList.length; i++) {
      if (purchasedIndex + i >= customerPurchasedList.length) return false;
      const purchasedItem = customerPurchasedList[purchasedIndex + i];
      const secretItem = secretFruitList[i];
      if (purchasedItem !== secretItem && secretFruitList[i] !== 'anything') {
        return false;
      }
    }
    return true;
  }
};

export default findSecretFruitList;
