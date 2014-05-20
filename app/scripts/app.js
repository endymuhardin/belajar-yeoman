'use strict';

angular
  .module('belajarYeomanApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/product/list', {
        templateUrl: 'views/product/list.html',
        controller: 'ProductListCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
