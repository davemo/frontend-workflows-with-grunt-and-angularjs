angular.module("app").factory("BookService", function($http) {
  return {
    get: function() {
      return $http.get('/api/books');
    }
  };
});
