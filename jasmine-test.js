/// <reference path="temperatureMonitor.service.js" />

describe("Temperature Monitor Service", function () {

  var $provide;
  var tmpMonitorService;

	beforeEach(module("medianApp"));

    beforeEach(angular.mock.module(function (_$provide_) {
    $provide = _$provide_;
    }));

    module(function($provide) {
      $provide.service('temperatureMonitorService', temperatureMonitorService);
    });

   	beforeEach(function () {
		inject(function ($injector) {
            tmpMonitorService = $injector.get('temperatureMonitorService');
        });
	});


	describe("getCurrentMedian", function() {

	  it("It should determine the median", function() {
	  	var arr = [5, 1, -7, 7, 8, 3];
	  	var median = tmpMonitorService.getCurrentMedian(arr);
	    expect(median).toBe(4);
	  });

	});

});
