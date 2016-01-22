var medianApp = angular.module('medianApp', []).controller('formController', function($scope, temperatureMonitor) {

  $scope.addNewTemperature = function (temperature) {
      $scope.temperatureList = temperatureMonitor.recordTemperature(temperature);
    };

  $scope.getMedian = function (temperatureList) {
      $scope.median = temperatureMonitor.getCurrentMedian(temperatureList);
    };

});




