angular.module('starter.controllers', [])

.controller('sampleCtrl', function($scope, itemlist) {
	$scope.items = itemlist.getItems();
})

.controller('simpleBinding', function($scope) {
	$scope.simplebinding = "text binding";
})

.controller('ExampleController1', ['$window', '$scope', function($window, $scope) {
  $scope.name = 'World';
  $scope.alertbox = function() {
    alert('Hello ' + $scope.name);
  }
}])

.controller('ExampleController2', ['$window', '$scope', function($window, $scope) {
    $scope.result = function() {
    alert(2 + 2);
	}
}])

.controller('ExampleController3', ['$scope', 'calculate', function($scope, calculate) {
		$scope.serviceresult = function(number) {
			calculate(number);
			}
}]);

