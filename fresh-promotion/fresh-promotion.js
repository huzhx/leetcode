const isWinner = (codeList, shoppingCart) => {

  if (codeList.length === 0) return 1;

  let codeListIndex = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    if (shoppingCart[i] === codeList[codeListIndex][0]) {
      if (canMatch(i, codeList[codeListIndex])) {
        i += codeList[codeListIndex].length - 1;
        codeListIndex++;
      }
    }
  }

  return codeListIndex === codeList.length ? 1 : 0;

  function canMatch(shoppingCartIndex, codeListSubarray) {
    for (let i = 0; i < codeListSubarray.length; i++) {
      if (codeListSubarray[i] === 'anything' || codeListSubarray[i] === shoppingCart[shoppingCartIndex]) {
        shoppingCartIndex++;
      } else {
        return false;
      }
    }
    return true;
  }
};

export default isWinner;
