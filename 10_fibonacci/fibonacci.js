const fibonacci = function(num) {
  if (typeof num == 'number' || typeof num == 'string') {
    if (num < 0) return "OOPS";
    let fibNums = [];
    for (i = 0; i < num; i++) {
      if (i == 0 || i == 1) {
        fibNums[i] = 1;
        continue;
      }
      fibNums[i] = fibNums[i - 2] + fibNums[i - 1];
    }
    console.log(fibNums);
    console.log(fibNums[num - 1]);
    return fibNums[num - 1];
  } else {
    console.log('Usage error. Must be a positive integer.');
    return;
  }

};

// Do not edit below this line
module.exports = fibonacci;
