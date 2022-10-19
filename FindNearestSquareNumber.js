/*
Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

Goodluck :)
*/

function nearestSq(n) {
  // your code
  n = Math.pow(Math.round(Math.sqrt(n)), 2);
  return n;
}
