// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'tmh.dynamicLocale'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  })
})
.controller('indexCtrl', function($scope, tmhDynamicLocale) {

  $scope.currencies = [
    { id : '0', name : 'British pound', symbol : '£', code : 'en-gb' },
    { id : '1', name : 'Euro', symbol : '€', code : 'fr-fr' },
    { id : '2', name : 'Indian rupee', symbol : 'Rp', code : 'hi-in' },
    { id : '3', name : 'USD', symbol : '$', code : 'en-us' },
    { id : '4', name : "Yen", symbol : "¥", code : 'ja-jp' },
    { id : '5', name : "Yuan", symbol : "¥", code : 'zh-cn' }
  ];

  $scope.currencySelected = $scope.currencies[0];

})
