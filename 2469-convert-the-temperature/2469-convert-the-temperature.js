/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
      const arr=[]
    const kelvin=(celsius + 273.15).toFixed(5)
  const fahrenheit=(celsius * 1.80 + 32.00).toFixed(5)
  arr.push(kelvin, fahrenheit)
  console.log(arr)
  return arr
};