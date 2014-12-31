angular.module('starter.controllers', [])

.controller('sampleCtrl', function($scope, itemlist) {
	$scope.items = itemlist.getItems();
})

.controller('simpleBinding', function($scope) {
	$scope.simplebinding = "toto";
})

.controller('functionCtrl', ['$window', '$scope', function($window, $scope) {
	$scope.result = function() {
		$scope.name = 'World';
		$window.alert('toto' + $scope.name);
	};
}])

.controller('ExampleController1', ['$window', '$scope', function($window, $scope) {
  $scope.name = 'World';

  $scope.alertbox = function() {
    alert('Hello ' + $scope.name);
  };
}])

.controller('ExampleController2', ['$window', '$scope', function($window, $scope) {
    $scope.result = function() {
    alert(2 + 2);
  };
}]);
