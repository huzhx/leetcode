const getNearestCities2 = (cities, xCoordinates, yCoordinates, queries) => {
  const xMap = new Map();
  const yMap = new Map();
  const cityNameMap = new Map();

  for (let i = 0; i < cities.length; i++) {
    const name = cities[i];
    const city = new City(name, xCoordinates[i], yCoordinates[i]);
    cityNameMap.set(name, city);
    if (xMap.get(city.x)) {
      xMap.get(city.x).push(city);
    } else {
      xMap.set(city.x, [city]);
    }
    if (yMap.get(city.y)) {
      yMap.get(city.y).push(city);
    } else {
      yMap.set(city.y, [city]);
    }
  }

  const output = [];
  const cache = {};
  for (let name of queries) {
    if (typeof cache[name] !== 'undefined') {
      output.push(cache[name]);
      continue;
    }

    const city = cityNameMap.get(name);
    let searches = [...xMap.get(city.x), ...yMap.get(city.y)];

    if (searches.length === 2) {
      output.push(null);
      continue;
    }

    searches.sort((a, b) => a.dist(city) - b.dist(city));

    const closest = searches[2].name;
    output.push(closest);
    cache[city.name] = closest;
    cache[closest] = city.name;
  }
  return output;
};

class City {
  constructor(name, x, y) {
    this.name = name;
    this.x = x;
    this.y = y;
  }

  dist(otherCity) {
    return Math.pow(this.x - otherCity.x, 2) + Math.pow(this.y - otherCity.y, 2);
  }

  get(coor) {
    if (coor === 'x') return this.x;
    return this.y;
  }
}

export default getNearestCities2;
