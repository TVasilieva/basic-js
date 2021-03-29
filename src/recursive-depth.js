module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1, currentDepth = 1;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        currentDepth += this.calculateDepth(arr[i]);
      }
      if (currentDepth > depth) {
        depth = currentDepth;
      } 
      currentDepth = 1;
    }
    let result = depth;
    currentDepth = 1;
    return result;
  }
}