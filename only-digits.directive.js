
(function () {
  'use strict';

angular.module('medianApp').
  directive('onlyDigits', onlyDigits);

  onlyDigits.$inject = ['$window'];

  function onlyDigits($window) {
    return {
        restrict: 'A',
        require: '?ngModel',
        link: function (scope, element, attrs, modelCtrl) {
            modelCtrl.$parsers.push(function (inputValue) {
                if (!inputValue) return '';
                var transformedInput = inputValue.replace(/[^0-9]/g, '');
                if (transformedInput !== inputValue) {
                    modelCtrl.$setViewValue(transformedInput);
                    modelCtrl.$render();
                    $window.alert("Temperature should be a number");
                }
                return transformedInput;
            });
        }
    };
}

})();