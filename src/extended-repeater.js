const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
let str = String(str);

 let repeatTimes = options.repeatTimes, separator, addition, additionRepeatTimes = options.additionRepeatTimes, additionSeparator;

  if (repeatTimes == null) {
      separator = "";
  } else if (options.separator == null) {
      separator = "+";
  } else {
      separator = options.separator;
  }

  if (String(options.addition) === "null") {
      addition = "null";
  } else if (String(options.addition) === "undefined") {
      addition = "";
  } else {
      addition = String(options.addition);
  }

  let add = addition;

  if (options.additionSeparator == null) {
      additionSeparator = "|";
  } else {
    additionSeparator = options.additionSeparator;
  }
  
  for (let i = 0; i < additionRepeatTimes - 1; i++) {
    add = add + additionSeparator + addition;
  }

  let newStr = str + add;
  if (additionRepeatTimes == null) {
      add = "";
  }
  for(let i = 0; i < repeatTimes - 1; i++) {
      newStr = newStr + separator + str + add;
  }
  if(repeatTimes == null) {
      newStr += add;
  }
  return newStr;
};
  