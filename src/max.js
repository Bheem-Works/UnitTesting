// Lesson: Writing your first tests
export function max(a, b) {
  if (a > b) return a;
  else if (b > a) return b;
  return a;
}

// if number can be divisible by 2 
export function divisible(two) {
  if(two % 2 === 0) return "vim";
}
// Exercise
export function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
  if (n % 3 === 0) return 'Fizz';
  if (n % 5 === 0) return 'Buzz';
  return n.toString();
}


export function strList(str) {
  return str
  .split(',')
  .filter(value => value.trim() !=='')
  .map(Number);
}
