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
});