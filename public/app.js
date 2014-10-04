angular.module('FirstApp', ['FirstApp.service'])
  .controller('firstCtrl', ['$scope', 'Grades', function($scope, Grades) {

    $scope.grades = Grades.getAll();

    $scope.gpa = 0;

  }]);
