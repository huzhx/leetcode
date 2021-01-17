const getInstanceNum = (utils, instances) => {
  let i = 0;
  while (i < utils.length) {
    if (utils[i] >= 25 && utils[i] <= 60) {
      i++;
    } else if (utils[i] < 25) {
      if (instances <= 1) {
        i++;
      } else {
        instances = Math.ceil(instances / 2);
        i += 10;
      }
    } else {
      if (instances * 2 > 2 * Math.pow(10, 8)) {
        i++;
      } else {
        instances *= 2;
        i += 10;
      }
    }
  }

  return instances;
};

export default getInstanceNum;
