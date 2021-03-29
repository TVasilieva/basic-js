module.exports = function calculateHanoi(disks, turnsSpeed) {
  let result = (Math.pow(2, disks)) - 1;
  let time = parseInt(result/(turnsSpeed/3600));
    return{
      seconds: time, turns: result
    }
};
