# Sum to n Implementations

This project demonstrates three different ways to implement a function `sum_to_n(n)`, which calculates the sum of integers from `1` to `n`.

## Implementations

### 1. Approach A – Mathematical Formula (O(1))

```javascript
var sum_to_n_a = function (n) {
  return (n * (n + 1)) / 2;
};
```

✅ Pros:<br>
• Constant time complexity O(1) (most efficient).<br>
• No loops or recursion needed.<br>
• Very concise.<br>
⚠️ Cons:<br>
• Relies on mathematical insight (less obvious to beginners).<br>
• May cause integer overflow for very large n in some environments.

### 2. Approach B – Iterative Loop (O(n))

```javascript
var sum_to_n_b = function (n) {
  var sum = 0;
  for (var i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};
```

✅ Pros:<br>
• Easy to understand and implement.<br>
• Works reliably for any n.<br>
⚠️ Cons:<br>
• Linear time complexity O(n) (less efficient for very large n).<br>
• Verbose compared to Approach A.

### 3. Approach C – Array + Reduce (O(n))

```javascript
var sum_to_n_c = function (n) {
  return Array.from({ length: n }, (_, i) => i + 1).reduce((a, b) => a + b, 0);
};
```

✅ Pros:<br>
• Declarative, uses modern JavaScript features.<br>
• Showcases functional programming style.<br>
⚠️ Cons:<br>
• Still O(n) in time complexity.<br>
• Creates an intermediate array, so less memory efficient.<br>
• Harder to read for some developers.
