const repeatString = function(string, num) {
  if (num < 0) {
    return('ERROR');
  }
  if (string) {
    let returnValue = '';
    for (i = 0; i < num; i++) {
      returnValue += string;
    }
    return returnValue;
  } else {
    return('');
  }
};

// Do not edit below this line
module.exports = repeatString;
