function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers');
  }
  return a + b;
}

// Example usage
let result1 = add(5, 10);  // Correct usage, no error
console.log(result1); // Outputs 15

try {
  let result2 = add(5, '10'); // Type checking throws an error
  console.log(result2);
} catch (error) {
  console.error(error.message);
}

//Alternatively, using type guards for more robust handling
function isNumber(x: any): x is number {
    return typeof x === 'number';
}

function addSafe(a: any, b: any): number {
    if (isNumber(a) && isNumber(b)) {
        return a + b;
    } else {
        throw new Error('Both inputs must be numbers');
    }
}

console.log(addSafe(5,10));
console.log(addSafe(5,'10')); //Throws error