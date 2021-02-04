const getProfit = (numSuppliers, inventory, order) => {
  const stack = [];

  inventory.sort((a, b) => a - b);

  for (let i = 0; i < numSuppliers; i++) {
    if (stack.length === 0 || inventory[i] > stack[stack.length - 1][0]) {
      stack.push([inventory[i], 1]);
    } else if (inventory[i] === stack[stack.length - 1]) {
      stack[stack.length - 1][1] += 1;
    }
  }

  let totalProfit = 0;

  while (order) {
    const [profit, num] = stack[stack.length - 1];
    if (order >= num) {
      totalProfit += profit * num;
      order -= num;
      profit -= 1;
      if (stack.length >= 2 && profit === stack[stack.length - 2][0]) {
        stack.pop();
        stack[stack.length - 1][1] += num;
      } else {
        stack[stack.length - 1][0] -= 1;
      }
    } else {
      totalProfit += profit * order;
      order = 0;
    }
  }

  return totalProfit;
};

export default getProfit;
