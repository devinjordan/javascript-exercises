const palindromes = function (string) {
  const processedString = string.toLowerCase().replace(/[^a-z0-9]/g, ""); // XOR a-z, 0-9 globally, replace with nothing
  return processedString.split("").reverse().join("") == processedString;
};

module.exports = palindromes;
