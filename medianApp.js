(function () {
  'use strict';

	angular.module('medianApp', [])
		.controller('formController', formController);

	formController.$inject = ['$scope', 'temperatureMonitorService'];

	function formController($scope, temperatureMonitorService) {

	  var vm = this;
	  var medianCalculated = false;

	  //methods
	  vm.addNewTemperature = addNewTemperature;
	  vm.getMedian = getMedian;

	  function addNewTemperature() {
	  	if(medianCalculated){
			temperatureMonitorService.temperatureList = [];
	      	vm.temperatureList = '';
	      	vm.median = '';
	      	medianCalculated = false;
	  	}		
	      vm.temperatureList = temperatureMonitorService.recordTemperature(vm.temperature);
	      vm.temperature = '';
	    }

	  function getMedian() {
	      vm.median = temperatureMonitorService.getCurrentMedian(vm.temperatureList);
	      medianCalculated = true;
	    }

	}
})();





