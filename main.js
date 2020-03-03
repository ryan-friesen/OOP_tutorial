// Below is a class declaration:

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }

  static getArea(a, b) {
    const dx = Math.abs(a.x - b.x);
    const dy = Math.abs(a.y - b.y);
    return dx * dy;
  }
}

function displayDistance() {
  let a = document.getElementById("point-a"),
    b = document.getElementById("point-b"),
    c = document.getElementById("point-c"),
    d = document.getElementById("point-d");
  const p1 = new Point(a.value, b.value);
  const p2 = new Point(c.value, d.value);
  let array = [p1, p2];
  return array;
}

function setDistance() {
  let p1 = displayDistance();
  let a = Point.distance(p1[0], p1[1]);
  document.getElementById("section-one-hypot-long").innerHTML = a;
  document.getElementById("section-one-hypot").innerHTML = a.toFixed(2);
}

function showAngle() {
  let angle = displayDistance();
  let a = Point.getArea(angle[0], angle[1]);
  console.log(angle[0], angle[1]);
  document.getElementById("section-one-area").innerHTML = a;
}
