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
  constructor(x, y, centerX, centerY) {
    this.x = x;
    this.y = y;
  }

  static line(a, b) {
    const startX = a.x;
    const startY = a.y;
    const endX = b.x;
    const endY = b.y;

    let coordArray = [startX, startY, endX, endY];
    return coordArray;
  }

  static circle(a, b, x, y) {
    const width = a;
    const height = b;
    const centerX = x;
    const centerY = y;

    let array = [width, height, centerX, centerY];
    return array;
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

function createCanvasLine() {
  let a = document.getElementById("point-a"),
    b = document.getElementById("point-b"),
    c = document.getElementById("point-c"),
    d = document.getElementById("point-d");
  const p1 = new Canvas(a.value, b.value);
  const p2 = new Canvas(c.value, d.value);
  let array = [p1, p2];

  return array;
}

function colorGradientCanvas() {
  let c = document.getElementById("visual-canvas");
  c.width = 502;
  c.height = 502;
  let ctx = c.getContext("2d");
  for (i = 0; i < 51; i++) {
    if (i == 25) {
      ctx.lineWidth = 3;
    } else {
      ctx.lineWidth = 1;
    }
    ctx.beginPath();
    ctx.moveTo(i * 10, 0);
    ctx.lineTo(i * 10, 500);
    ctx.stroke();
    ctx.moveTo(0, i * 10);
    ctx.lineTo(500, i * 10);
    ctx.stroke();
  }
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
  let a = createCanvasLine();
  const b = Canvas.line(a[0], a[1]);
  let c = document.getElementById("visual-canvas");
  let ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.globalAlpha = 0.7;
  ctx.moveTo(a[0].x * 10 + 250, -a[0].y * 10 + 250);
  ctx.lineTo(a[1].x * 10 + 250, -a[1].y * 10 + 250);
  ctx.lineWidth = 3;
  ctx.stroke();
}

function numberSorter(a, b) {
  let sortArray = [a, b];
  sortArray.sort(function(a, b) {
    return a - b;
  });
  return sortArray;
}

function changeInputParams() {
  let a = document.getElementById("shape-menu").value;
  clearRect();
  colorGradientCanvas();
  switch (a) {
    case "line":
      basicXYInput();
      drawLine();
      setDistance();
      break;
    case "rectangle":
      basicXYInput();
      drawRect();
      showArea();
      break;
    case "circle":
      basicCircleInput();
      drawCircle();
      break;
    default:
      break;
  }
}

function basicXYInput() {
  document.getElementById("input-text-1").innerHTML = "X1:";
  document.getElementById("input-text-2").innerHTML = "Y1:";
  document.getElementById("input-text-3").innerHTML = "X2:";
  document.getElementById("input-text-4").innerHTML = "Y2:";
}

function basicCircleInput() {
  document.getElementById("input-text-1").innerHTML = "Width:";
  document.getElementById("input-text-2").innerHTML = "Height:";
  document.getElementById("input-text-3").innerHTML = "Center X:";
  document.getElementById("input-text-4").innerHTML = "Center Y:";
}

function drawCircle() {
  let a = createCanvasCircle();
  let c = document.getElementById("visual-canvas");
  let ctx = c.getContext("2d");
  ctx.beginPath();
  let centerX = 250 + a[2] * 10;
  let centerY = 250 - a[3] * 10;
  let width = a[0] * 10;
  let height = a[1] * 10;
  ctx.arc(centerX, centerY, width, 0, 2 * Math.PI);
  ctx.fillStyle = "rgba(75,139,151,.7)";
  ctx.fill();
  ctx.stroke();
}

function createCanvasCircle() {
  let a = displayDistance();
  let circle = Canvas.circle(a[0].x, a[0].y, a[1].x, a[1].y);
  return circle;
}

function drawRect() {
  let a = createCanvasLine();
  let c = document.getElementById("visual-canvas");
  let ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.fillStyle = "rgba(75,139,151,.7)";
  let sortX = numberSorter(a[0].x * 10, a[1].x * 10),
    sortY = numberSorter(a[0].y * 10, a[1].y * 10);
  let finalX = Math.abs(sortX[0] - sortX[1]),
    finalY = Math.abs(sortY[0] - sortY[1]);
  ctx.fillRect(sortX[0] + 250, -sortY[0] + 250, finalX, -finalY);
}

function setDistance() {
  let p1 = displayDistance();
  let a = Point.distance(p1[0], p1[1]);
  document.getElementById("section-one-hypot-long").innerHTML = a;
  document.getElementById("section-one-hypot").innerHTML = a.toFixed(2);
}

function showArea() {
  let angle = displayDistance();
  let a = Point.getArea(angle[0], angle[1]);
  document.getElementById("section-one-area").innerHTML = a;
}

function outputLine() {
  let a1 = displayDistance();
  let a = Canvas.line(a1[0], a1[1]);
}
