module.exports = function getSeason(date) {
  if(!(Object.prototype.toString.call(date) === "[object Date]")) throw new Error()
  if(typeof(date) == 'undefined') return 'Unable to determine the time of year!'

  let month = date.getMonth();
  if(month < 2 || month == 11) return 'winter';
  else if(month < 5) return 'spring';
  else if(month < 8) return 'summer';
  else return 'autumn';

};
