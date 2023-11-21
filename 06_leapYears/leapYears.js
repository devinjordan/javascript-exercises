const leapYears = function(year) {
  switch (year % 100 === 0) {
    case (false):
      if (year % 4 === 0) {
        return(true);
      } else {
        return(false);
      };
    case (true):
      if (year % 400 === 0) {
        return (true);
      } else {
        return (false);
      };
  };
};

// Do not edit below this line
module.exports = leapYears;
