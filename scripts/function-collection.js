
export function add(a, b) {
  let sum = a + b;

  return sum;
}

export function subtraction(a, b) {
  let sub = a - b;

  return sub;
}

export function multiplication(a, b) {
  let mult = a * b;

  return mult;
}

export function division(a, b) {
  let division = a / b;

  return division;
}

export function power(a, n) {
  let pow = 1;

  for (let i = 0; i < n; i++) {
    pow = pow * a;
  }

  return pow;
}

export function addInterval(a, b) {
  let sum = 0;
  for (a; a < b; a++) {
    sum = sum + a;
  }
  return sum;
}
export function integerDivision(a, b) {
  let res = Math.floor(a / b);

  return res;
}
export function remainder(a, b) {
  let res = a - integerDivision(a, b) * b;

  return res;
}