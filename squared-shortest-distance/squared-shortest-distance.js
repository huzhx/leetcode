const getShortestDistance = (numRobots, positionX, positionY) => {
  const points = [];
  const seen = new Set();
  for (let i = 0; i < numRobots; i++) {
    const x = positionX[i];
    const y = positionY[i];
    if (seen.has(`${x}#${y}`)) continue;
    seen.add(`${x}#${y}`);
    points.push(new Point(x, y));
  }
  points.sort((a, b) => a.x - b.x || a.y - b.y);
  return closestUtil(points, points.length);

  function closestUtil(points, n) {
    if (n <= 3) {
      return bruteForce(points, n);
    }

    const mid = Math.floor(n / 2);
    const midPoint = points[mid];
    const leftGroup = [];
    const rightGroup = [];
    for (let i = 0; i < n; i++) {
      if (points[i].x <= midPoint.x && i < mid) {
        leftGroup.push(points[i]);
      } else {
        rightGroup.push(points[i]);
      }
    }
    const minDistInLeft = closestUtil(leftGroup, mid);
    const minDistInRight = closestUtil(rightGroup, n - mid);
    const minDist = Math.min(minDistInLeft, minDistInRight);

    // console.log({ minDistInLeft, minDistInRight, minDist });

    const strip = [];
    for (let i = 0; i < n; i++) {
      if (dist(points[i], new Point(midPoint.x, points[i].y)) < minDist) {
        strip.push(points[i]);
      }
    }

    // console.log({ minDist, midX: midPoint.x, strip });
    return stripClosest(strip, minDist);
  }

  function bruteForce(points, n) {
    let min = Infinity;
    for (let i = 0; i < n - 1; i++) {
      for (let j = i + 1; j < n; j++) {
        const curDist = dist(points[i], points[j]);
        if (curDist === 0) continue;
        min = Math.min(min, curDist);
      }
    }
    return min;
  }

  function dist(point1, point2) {
    if (point1 && point2) return Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2);
  }

  function stripClosest(strip, minDist) {
    let min = minDist;
    for (let i = 0; i < strip.length - 1; i++) {
      for (let j = i + 1; j < strip.length; j++) {
        const curDist = dist(strip[i], strip[j]);
        min = Math.min(min, curDist);
      }
    }
    return min;
  }
};

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

export default getShortestDistance;
