const a = 2;
const b = 3;

doIt2();

function doIt2 () {
  if (a === 2) {
    if (b === 3) {
      return sum(1, 2);
    }
  }
}

function sum (x, y) {
  return x + y;
}

sum(a, b);
