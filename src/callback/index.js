const suma = (x, y) => {
  return x + y;
};

const calc = (numb1, numb2, callback) => {
  return callback(numb1, numb2);
};
console.log(calc(10, 20, suma));
 