
medianApp.factory('temperatureMonitor', function () {
  
  var temperatures = [];
  return {
      recordTemperature:  function (temperature) {
          if (temperature == null)
            alert("Please enter a temperature");
          else{
            temperatures.push(temperature);
            return temperatures;
            }
      },
      getCurrentMedian: function (temperatureList) {
          if (temperatureList == null)
            alert("Please enter temperatures first to calculate median");
          else {
            temperatureList.sort(function(a, b) {
              return a - b;
            });
          
          var length = temperatureList.length;
          var middleElIndex = (length / 2) - 1;
          var num1 = temperatureList[middleElIndex];
          var num2 = temperatureList[(middleElIndex + 1)];

          if (length % 2 === 0) { //even number of items
            return ((num1 + num2) / 2);
          } 
          else { //odd number of items
            return temperatureList[(Math.ceil(middleElIndex))];
          }
        }
      }
  };   
});