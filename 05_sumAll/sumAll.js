const sumAll = function(num1, num2) {
  if (num1 < 0 || num2 < 0) {
    return('ERROR');
  } else if (typeof num1 != 'number' || typeof num2 != 'number') {
    return('ERROR');
  }

  let total = 0;
  switch (num1 > num2) {
    case (false):
      for (i = 0; i <= (num2 - num1); i++) {
        total += num1 + i;    
      };
      return total;

    case (true):
      for (i = 0; i <= (num1 - num2); i++) {
        total += num2 + i;    
      };
      return total;
  };
};
// Do not edit below this line
module.exports = sumAll;
