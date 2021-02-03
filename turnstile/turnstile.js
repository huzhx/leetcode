const getPassTime = (numCustomers, arrTime, direction) => {
  /**
   * 0 = enter
   * 1 = exit
   *
   * If one customer wants to enter the store and another customer wants to exit at the same moment, there are three cases:
   *
   * 1) If in the previous second the turnstile was not used (maybe it was used before, but not at the previous second), then the customer who wants to exit goes first.
   *
   * 2) If in the previous second the turnstile was used as an exit, then the customer who wants to leave goes first.
   *
   * 3) If in the previous second the turnstile was used as an entrance, then the customer who wants to enter goes first. Passing through the turnstile takes 1 second.
   */

  let lastUsedInfo = {
    time: -1,
    for: null,
  };
  const queueIn = [];
  const queueOut = [];
  const output = new Array(numCustomers).fill(null);

  for (let i = 0; i < numCustomers; i++) {
    const customer = new Customer(i, arrTime[i], direction[i]);
    if (customer.dir === 0) {
      queueIn.push(customer);
    } else {
      queueOut.push(customer);
    }
  }

  while (queueIn.length && queueOut.length) {
    const inArrTime = queueIn[0].arrTime;
    const outArrTime = queueOut[0].arrTime;
    let tar;
    if (inArrTime < outArrTime) {
      lastUsedInfo.time = inArrTime;
      lastUsedInfo.for = queueIn[0].dir;
      tar = queueIn.shift();
    } else if (inArrTime > outArrTime) {
      lastUsedInfo.time = outArrTime;
      lastUsedInfo.for = queueOut[0].dir;
      tar = queueOut.shift();
    } else {
      const curTime = inArrTime;
      const lastUsedTime = lastUsedInfo.time;
      if (lastUsedTime === -1 || lastUsedTime < curTime - 1) {
        // the customer who wants to exit goes first
        lastUsedInfo.time = outArrTime;
        lastUsedInfo.for = queueOut[0].dir;
        tar = queueOut.shift();
        queueIn[0].arrTime++;
      } else {
        if (lastUsedInfo.for === queueOut[0].dir) {
          // the customer who wants to leave goes first
          lastUsedInfo.time = outArrTime;
          lastUsedInfo.for = queueOut[0].dir;
          tar = queueOut.shift();
          queueIn[0].arrTime++;
        } else {
          // the customer who wants to enter goes first
          lastUsedInfo.time = inArrTime;
          lastUsedInfo.for = queueIn[0].dir;
          tar = queueIn.shift();
          queueOut[0].arrTime++;
        }
      }
    }
    output[tar.id] = tar.arrTime;
  }

  if (queueIn.length) {
    for (let customer of queueIn) {
      output[customer.id] = customer.arrTime;
    }
  }

  if (queueOut.length) {
    for (let customer of queueOut) {
      output[customer.id] = customer.arrTime;
    }
  }

  return output;
};

class Customer {
  constructor(id, arrTime, dir) {
    this.id = id;
    this.arrTime = arrTime;
    this.dir = dir;
  }
}

export default getPassTime;
