function MainController($scope, $http) {
  $scope.name = 'Kyle'
  $scope.email = "kylegraydev@gmail.com"
  $scope.phone = "867-5309"
}

angular
  .module('app')
  .controller('MainController', MainController);
