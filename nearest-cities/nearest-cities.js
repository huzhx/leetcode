const getNearestCities = (cities, xCoordinates, yCoordinates, queries) => {
  const cityIndexMap = new Map();
  const xMap = new Map();
  const yMap = new Map();
  const output = [];

  for (let i = 0; i < cities.length; i++) {
    cityIndexMap.set(cities[i], i);
  }

  for (let i = 0; i < xCoordinates.length; i++) {
    const citiesArray = xMap.get(xCoordinates[i]) || [];
    citiesArray.push(cities[i]);
    xMap.set(xCoordinates[i], citiesArray);
  }

  for (let i = 0; i < yCoordinates.length; i++) {
    const citiesArray = yMap.get(yCoordinates[i]) || [];
    citiesArray.push(cities[i]);
    yMap.set(xCoordinates[i], citiesArray);
  }

  for (let city of queries) {
    const index = cityIndexMap.get(city);
    const x = xCoordinates[index];
    const y = yCoordinates[index];

    const citiesShareX = xMap.get(x).filter((item) => item !== city);
    const citiesShareY = yMap.get(y).filter((item) => item !== city);

    if (citiesShareX.length === 0 && citiesShareY.length === 0) {
      output.push(null);
      continue;
    }

    citiesShareX.sort((a, b) => {
      const aIndex = cityIndexMap.get(a);
      const aX = xCoordinates[aIndex];
      const bIndex = cityIndexMap.get(b);
      const bX = xCoordinates[bIndex];
      return inOrder(aX, bX, x);
    });

    citiesShareY.sort((a, b) => {
      const aIndex = cityIndexMap.get(a);
      const aY = yCoordinates[aIndex];
      const bIndex = cityIndexMap.get(b);
      const bY = yCoordinates[bIndex];
      return inOrder(aY, bY, y);
    });

    // console.log(citiesShareX, citiesShareY);
    const minXCity = citiesShareX[0];
    const minYCity = citiesShareY[0];

    const minXCityIndex = cityIndexMap.get(minXCity);
    const minYCityIndex = cityIndexMap.get(minYCity);

    const distanceForMinXCity = Math.abs(xCoordinates[minXCityIndex] - x);
    const distanceForMinYCity = Math.abs(yCoordinates[minYCityIndex] - y);

    if (distanceForMinXCity < distanceForMinYCity) {
      output.push(minXCity);
    } else {
      output.push(minYCity);
    }
  }

  return output;

  function inOrder(a, b, target) {
    if (Math.abs(a - target) < Math.abs(b - target)) {
      return -1;
    } else if (Math.abs(a - target) > Math.abs(b - target)) {
      return 1;
    } else {
      if (a < b) return -1;
      return 1;
    }
  }
};

export default getNearestCities;
