const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {
  let newArray = array.flat(Infinity),
  howManyCats = String(newArray).split('^^').length-1;
  return howManyCats;
};
