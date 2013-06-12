(function() {

  var app = angular.module("app");

  app.run(function($http) {
    $http.get("/auth/csrf_token").success(function(response) {
      app.constant("CSRF_TOKEN", response.csrf_token);
    });
  });

}());
