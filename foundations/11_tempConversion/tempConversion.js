const convertToCelsius = function(fahreinheit) {
  return Math.round((fahreinheit - 32)*50/9)/10;
};

const convertToFahrenheit = function(celsius) {
  return Math.round((celsius)*90/5 + 320)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
