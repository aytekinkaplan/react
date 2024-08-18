// Two numbers are added together and the sum is returned.
export const addTwo = (a, b) => {
  console.log(`Adding ${a} and ${b}`);
  return a + b;
};

// Two numbers are multiplied together and the product is returned.
export const multiply = (a, b) => {
  console.log(`Multiplying ${a} by ${b}`);
  return a * b;
};

// The second number is subtracted from the first, and the difference is returned.
export const subtract = (a, b) => {
  console.log(`Subtracting ${b} from ${a}`);
  return a - b;
};

// The default export is an object containing all the above functions,
// providing an easy way to perform basic arithmetic operations.
export default (function doSomeMath() {
  console.log("Math operations are ready to be used.");
  return {
    addTwo,
    multiply,
    subtract,
  };
})();
