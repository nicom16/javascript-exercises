const convertToCelsius = function(farTemperature) {
  let celTemperature = (farTemperature - 32) * 5/9;
  celTemperature = Math.round(celTemperature * 10) / 10;

  return celTemperature;
};

const convertToFahrenheit = function(celTemperature) {
  let farTemperature = celTemperature * 9/5 + 32;
  farTemperature = Math.round(farTemperature * 10) / 10;

  return farTemperature;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
