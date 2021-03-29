module.exports = function getSeason(date) {
  if(typeof(date) == 'undefined') return 'Unable to determine the time of year!'

  let month = date.getMonth();
  if(month < 1 || month == 11) return 'winter';
  else if(month > 2 && month < 5) return 'spring';
  else if(month > 5 && month < 8) return 'summer';
  else return 'autumn';

};
