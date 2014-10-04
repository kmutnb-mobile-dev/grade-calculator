angular.module('FirstApp', ['FirstApp.service'])
  .controller('firstCtrl', ['$scope', 'Grades', function($scope, Grades) {

    $scope.grades = [];

    // Grades.getAll(function(data){
    //   $scope.grades = data;
    // });

    $scope.grades = Grades.getAll();

    $scope.gpa = 0;

    $scope.delete = function(index){
      Grades.delete(index);
    };

    $scope.addGrade = function(inputSubject,inputCredit,inputGrade) {
      Grades.addGrade(inputSubject,inputCredit,inputGrade);
    };

    $scope.gradeCal = function(){
      return Grades.gradeCal();
    };

  }]);
