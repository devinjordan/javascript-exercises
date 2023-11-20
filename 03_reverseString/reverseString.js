const reverseString = function(string) {
  let array = string.split("");
  let revString = array.reverse();
  return revString.join('');
};

// Do not edit below this line
module.exports = reverseString;
