angular.module("app").config(function($routeProvider, $locationProvider) {

  $routeProvider.when('/login', {
    templateUrl: 'angular/login.html',
    controller: 'LoginController'
  });

  $routeProvider.when('/home', {
    templateUrl: 'angular/home.html',
    controller: 'HomeController'
  });

  $routeProvider.when('/books', {
    template: 'angular/books.html',
    controller: 'BooksController',
    resolve: {
      books : function(BookService) {
        return BookService.get();
      }
    }
  });

  $locationProvider.html5Mode(true);

  $routeProvider.otherwise({ redirectTo: '/login' });

});
