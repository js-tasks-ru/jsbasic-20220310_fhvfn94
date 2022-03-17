function factorial(n) {
  let result = 1;
  if (n === 0 || n === 1) {
    return result
  }
  for (let index = 1; index <= n; index++) {
    result = result * index
  }
  return result
}

factorial(0); // 1
factorial(1); // 1
factorial(3); // 6
factorial(5); // 120
