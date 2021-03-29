const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let highLetters = '';
    for(const x of members){
      if(x === String(x)){
        let value = x.trim();
        if(value == (value.charAt(0).toUpperCase() + value.slice(1))){
          highLetters = highLetters + value.charAt(0);
        }
      } else if(value !== String(value)) {
    }
  }
  return highLetters.split('').sort().join('');
};
