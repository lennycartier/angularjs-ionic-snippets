angular.module('starter.services', [])

.factory('itemlist', function() {
    return {
        getItems: function() {
            return [
			    { item : 'Item 1' },
				{ item : 'Item 2' }
            ];
        }
    };
})

.factory('calculate', ['$window', function(win) {
  return function(number) {
    number++;
    win.alert(number);
    }
}]);
