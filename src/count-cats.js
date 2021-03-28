const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {
  let newArray = array.flat(Infinity), 
  ears = '^^', 
  num = 0;
  for(const value of newArray){
    if(ears === value) {
    num+=1;
    }
  }
  return num;
};
