const getNumberOfOptions = (prices_of_jeans, prices_of_shoes, prices_of_skirts, prices_of_tops, limit) => {
  const allPrices = [prices_of_jeans, prices_of_shoes, prices_of_skirts, prices_of_tops];
  const N = allPrices.length;
  for (let prices of allPrices) {
    prices.sort((a, b) => a - b);
  }
  const ranges = [[0, 0]];
  const combs = [1];
  for (let prices of allPrices) {
    const [low, high] = ranges[ranges.length - 1];
    ranges.push([prices[0] + low, prices[prices.length - 1] + high]);
    combs.push(prices.length * combs[combs.length - 1]);
  }

  return search(N, limit);

  function search(items, limit) {
    const prices0 = allPrices[0];
    let b0 = prices0.length;

    const prices = allPrices[items - 1];
    const [low, high] = ranges[items - 1];
    let ways = 0;
    for (let price of prices) {
      const left = limit - price;
      if (left < low) {
        break;
      }
      if (left >= high) {
        ways += combs[items - 1];
        continue;
      }
      if (items === 2) {
        while (prices0[b0 - 1] > left) {
          b0 -= 1;
        }
        ways += b0;
        continue;
      }
      ways += search(items - 1, left);
    }

    return ways;
  }
};

export default getNumberOfOptions;
