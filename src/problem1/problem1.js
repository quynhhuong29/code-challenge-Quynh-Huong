// Approach A: Mathematical formula
// Uses the well-known formula for the sum of the first n natural numbers: n * (n + 1) / 2
// Time complexity: O(1) — very efficient, requires no loops
var sum_to_n_a = function (n) {
  return (n * (n + 1)) / 2;
};

// Approach B: Iterative summation
// Loops from 1 to n and accumulates the sum step by step
// Time complexity: O(n) — simple and easy to understand, but slower for large n
var sum_to_n_b = function (n) {
  var sum = 0;
  for (var i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

// Approach C: Functional programming style
// Creates an array [1, 2, ..., n] using Array.from, then reduces it to a single sum
// Time complexity: O(n) — concise and expressive, but less memory efficient due to array creation
var sum_to_n_c = function (n) {
  return Array.from({ length: n }, (_, i) => i + 1).reduce((a, b) => a + b, 0);
};
