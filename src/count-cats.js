const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {
  let num = 0, 
  newArray = array.flat(),
  howMuchCats = String(newArray).split('^^').length-1;
        return howMuchCats;
};
