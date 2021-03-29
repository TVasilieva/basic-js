const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
let highLetters = '';
  if(!Array.isArray(members)) return false;
    for(const x of members){
      if(x === String(x)){
        let value = x.trim();
        if(value == (value.charAt(0).toUpperCase() + value.slice(1))){
          highLetters = highLetters + value.charAt(0);
        } else if(value == (value.charAt(0).toLowerCase() + value.slice(1))){
          highLetters = highLetters + value.charAt(0);
        }
      }
  }
  return highLetters.toUpperCase().split('').sort().join('');
};
