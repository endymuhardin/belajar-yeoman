'use strict';

angular.module('belajarYeomanApp')
  .factory('ProductService', function ($resource, $http) {
    return {
      productResource: $resource('api/product/:id'),
      get: function(param, callback){
        return this.productResource.get(param,callback);
      },
      query: function(){
        return this.productResource.query();
      },
      save: function(data){
        if(data.id == null){
          return $http.post('api/product', data);
        } else {
          return $http.put('api/product/'+data.id, data);
        }
      },
      remove: function(data){
        if(data.id != null){
          return $http.delete('api/product/'+data.id);
        }
      }
    }
  });
