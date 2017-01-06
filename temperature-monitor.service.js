
(function () {
  'use strict';

angular.module('medianApp')
    .service('temperatureMonitorService', temperatureMonitorService);

temperatureMonitorService.$inject = ['$window']; 

function temperatureMonitorService ($window) {

  var service = this;
  service.temperatureList = [];

  service.recordTemperature = recordTemperature;
  service.getCurrentMedian = getCurrentMedian;
  
  function recordTemperature (temperature) {
          if (!temperature) {
            $window.alert("Please enter a valid temperature");
            return;
          }
          else {
            temperature = parseInt(temperature, 10);
            service.temperatureList.push(temperature);
            return service.temperatureList;
          }
      }

  function getCurrentMedian (temperatureList) {
    if (temperatureList){
      temperatureList.sort(function(a, b) {
        return a - b;
      });
          
    var middleIndex = parseInt(temperatureList.length/2, 10);

    if(temperatureList.length % 2)
        return temperatureList[middleIndex];
    else
        return (temperatureList[middleIndex-1] + temperatureList[middleIndex]) / 2.0;
      }
    }  
}

})();