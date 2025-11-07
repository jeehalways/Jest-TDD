export function stringCalculator(str) {
  if (str === "") return 0;

  const nums = str.split(",").map(Number);

  return nums.reduce((sum, n) => sum + n, 0);
}
