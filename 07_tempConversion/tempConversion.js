const convertToCelsius = function(tempF) {
  let rawNumber = (tempF - 32) * (5 / 9);
  let rounded = Math.round(rawNumber * 10) / 10;
  let fixed = parseFloat(rounded.toFixed(1));
  return fixed;
};

const convertToFahrenheit = function(tempC) {
  let rawNumber = (tempC * (9 / 5) + 32);
  let rounded = Math.round(rawNumber * 10) / 10;
  let fixed = parseFloat(rounded.toFixed(1));
  return fixed;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
