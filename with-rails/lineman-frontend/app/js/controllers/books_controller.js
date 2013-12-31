angular.module("app").controller("BooksController", function($scope, books) {
  $scope.books = books.data;
});
