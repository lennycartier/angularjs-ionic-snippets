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

.factory('calcul', ['$window', function() {
  var resultat;
  return function(nombre) {
    nombre++;
    win.alert(nombre);
    }
}]);
