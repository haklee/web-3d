interface Point {
  x: number;
  y: number;
  z: number;
}

function cross(o: Point, a: Point, b: Point): number {
  return (a.x - o.x) * (b.y - o.y) - (a.y - o.y) * (b.x - o.x);
}

export function convexHull(points: Point[]): Point[] {
  if (points.length < 3) return points;

  // Sort points by x-coordinate (and y-coordinate if x is equal)
  const sortedPoints = [...points].sort((a, b) => {
    if (a.x === b.x) return a.y - b.y;
    return a.x - b.x;
  });

  // Build lower hull
  const lower: Point[] = [];
  for (const point of sortedPoints) {
    while (lower.length >= 2 && 
           cross(lower[lower.length - 2], lower[lower.length - 1], point) <= 0) {
      lower.pop();
    }
    lower.push(point);
  }

  // Build upper hull
  const upper: Point[] = [];
  for (let i = sortedPoints.length - 1; i >= 0; i--) {
    const point = sortedPoints[i];
    while (upper.length >= 2 && 
           cross(upper[upper.length - 2], upper[upper.length - 1], point) <= 0) {
      upper.pop();
    }
    upper.push(point);
  }

  // Remove duplicates and combine
  lower.pop();
  upper.pop();
  return [...lower, ...upper];
} 