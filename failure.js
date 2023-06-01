const a = 2;
const b = 3;

doIt();

function doIt2 () {
  if (a === 2) {
    console.log('a is 2');
    if (b === 3) {
      console.log('b is 3');
      if (a === 2) {
        console.log('a is 2');
      }
    }
  }
}

function sum (x, y) {
  return x + y;
}

sum(a, b);
