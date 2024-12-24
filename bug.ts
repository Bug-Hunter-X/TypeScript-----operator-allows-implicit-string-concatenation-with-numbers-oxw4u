function add(a: number, b: number): number {
  return a + b;
}

let result = add(5, '10'); // Type error is not thrown
console.log(result); // Outputs 510