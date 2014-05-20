'use strict';

angular.module('belajarYeomanApp')
  .controller('ProductListCtrl', function ($scope, ProductService) {
    $scope.products = ProductService.query()
    $scope.edit = function(x){
    	$scope.selectedProduct = ProductService.get({id: x.id}, function(hasil){
    		$scope.original = angular.copy(hasil);
    	});
    }

    $scope.save = function(){
    	ProductService.save($scope.selectedProduct).success(function(){
    		$scope.products = ProductService.query();
    		$scope.baru();
    	});
    };

    $scope.baru = function(){
    	$scope.selectedProduct = null;
    	$scope.original = null;
    }

    $scope.hapus = function(x){
    	ProductService.remove(x).success(function(){
    		$scope.products = ProductService.query();
    		$scope.baru();
    	});
    }
  });
