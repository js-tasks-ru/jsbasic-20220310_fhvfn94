function sumSalary(salaries) {
  let r = 0;
  for (const key in salaries) {
    if (typeof salaries[key] === "number" && salaries[key] > 0 && salaries[key] != Infinity && salaries[key] != -Infinity) {
      r += salaries[key];
    }
  }
  return r;
}

console.log(
  sumSalary(
    (salaries = {
      John: 1000,
      Ann: 1600,
      Pete: 1300,
      month: "December",
      currency: "USD",
      isPayed: false,
    })
  )
);
