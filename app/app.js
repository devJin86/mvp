var App = angular.module('Blogs', [
    'ngRoute',
    'ngSanitize',
    'Blogs.blogsController',
    'Blogs.authController'
  ]).config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
          templateUrl: 'clients/index.html',
          controller: 'blogsController'
      })
      .when('/signup', {
          templateUrl: 'clients/app/users/signup.html',
          controller: 'authController'
      })
      .otherwise({
        redirectTo: '/'
      });
    }]);
 



App.controller('blogsController', ['$scope', function($scope) {
  $scope.foo = 'hello';
}]);

App.controller('authController', ['$scope', function($scope) {
  
  var creatUser = function() {
    $scope.newUser = $scope.newStudents;
    console.log($scope.newStudents);
  }
  
}]);

