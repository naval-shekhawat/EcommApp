let sum = (a, b) => {
  if (typeof a != "number" || typeof b != "number") {
    return "Please enter numbers";
  }
  return a + b;
};

let square = () => {};

module.exports = {
  sum,
  square,
};
