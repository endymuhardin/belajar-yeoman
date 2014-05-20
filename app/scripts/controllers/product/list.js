'use strict';

angular.module('belajarYeomanApp')
  .controller('ProductListCtrl', function ($scope, ProductService) {
    $scope.products = ProductService.query();
  });
