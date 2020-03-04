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

class Canvas {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static line(a, b) {
    const startX = a.x;
    const startY = a.y;
    const endX = b.x;
    const endY = b.y;

    let coordArray = [startX, startY, endX, endY];
    console.log(coordArray);
    return coordArray;
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

function colorGradientCanvas() {
  let c = document.getElementById("visual-canvas");
  c.width = 502;
  c.height = 502;
  let ctx = c.getContext("2d");
  for(i = 0; i < 51; i++) {
  ctx.beginPath();
  ctx.moveTo(i * 10, 0);
  ctx.lineTo(i * 10, 500);
  ctx.stroke();
  ctx.moveTo(0, i * 10);
  ctx.lineTo(500, i * 10);
  ctx.stroke();
  };
}

function clearRect() {
  let a = document.getElementById("visual-canvas");
  let b = a.getContext("2d");
  b.clearRect(0, 0, 500, 500);
}

function fillRect() {
  clearRect();
  colorGradientCanvas();
  drawRect();
  drawLine();
}

function drawLine() {
  let a = displayDistance();
  let c = document.getElementById("visual-canvas");
  let ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.moveTo((a[0].x) * 10, (a[0].y) * 10);
  ctx.lineTo((a[1].x) * 10, (a[1].y) * 10);
  ctx.stroke();

}

function drawRect() {
  let a = displayDistance();
  let c = document.getElementById("visual-canvas");
  let ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.fillStyle = "#F00";
  ctx.moveTo((a[0].x) * 10, (a[0].y) * 10);
  ctx.fillRect((a[0].x) * 10, (a[0].y) * 10, (a[1].x) * 10, (a[1].y) * 10);
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

function outputLine() {
  let a1 = displayDistance();
  let a = Canvas.line(a1[0], a1[1]);
  console.log(a);
}