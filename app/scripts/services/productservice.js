'use strict';

angular.module('belajarYeomanApp')
  .factory('ProductService', function ($resource) {
    return {
      productResource: $resource('api/product/:id'),
      query: function(){
        return this.productResource.query();
      }
    }
  });
