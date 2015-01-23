(function() {

  var $injector = angular.injector(['ng']);

  $injector.invoke(function($http, $rootScope) {
    // this works!
    // Need to ADD the withCredentials otherwise Laravel will create a new session on each page reload.
    $rootScope.$apply(function() {
      $http({withCredentials: true,
            method: "GET",
            url: "/auth/csrf_token"
            })
            .then(function(response) {
              angular.module("app").constant("CSRF_TOKEN", response.csrf_token);
              angular.bootstrap(document, ['app']);
            });
    });
  });

})();
