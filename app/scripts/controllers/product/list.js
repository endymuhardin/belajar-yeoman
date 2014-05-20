'use strict';

angular.module('belajarYeomanApp')
  .controller('ProductListCtrl', function ($scope, ProductService) {
    $scope.products = ProductService.query()
    $scope.edit = function(x){
    	$scope.selectedProduct = ProductService.get({id: x.id}, function(hasil){
    		$scope.original = angular.copy(hasil);
    	});
    }
  });
