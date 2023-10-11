function outer() {
  return "hello";
}

const outerTwo = function () {
  return "bye";
};

const outerThree = () => "wow";

const outerFour = (a) => a;
console.log(outer());
console.log(outerTwo());
console.log(outerThree());
