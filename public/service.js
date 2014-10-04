angular.module('FirstApp.service', [])

.factory('Grades',[function(){
  var grades = [
    {
      name: "Network Programming",
      grade: "B",
      credit: 3
    },
    {
      name: "Mobile Application Development",
      grade: "B",
      credit: 3
    },
    {
      name: "C++",
      grade: "B",
      credit: 3
    }
  ];

  return {
    getAll : function(){
      return grades;
    },
    addGrade : function(inputSubject,inputCredit,inputGrade) {
      var tmp = {
        subject:  inputSubject,
        grade:    inputGrade,
        credit:   inputCredit
      };

      grades.push(tmp);
    },
    delete : function(index) {
      grades.splice(index, 1);
    },
    gradeCal : function() {
      var sumCredit = 0;
      var sumGrades = 0;

      for(var i = 0; i< grades.length; i++) {
        var grade = grades[i];
        sumCredit += grade.credit*1;
        sumGrades += (this.gradeConvert(grade.grade) * grade.credit );
      }

      console.log(sumCredit + " : " + sumGrades);

      return (sumGrades/sumCredit).toFixed(2);
    },
    gradeConvert : function(grade) {
      switch(grade) {
        case "A":   return 4;
        case "B+":  return 3.5;
        case "B":   return 3;
        case "C+":  return 2.5;
        case "C":   return 2;
        case "D+":  return 1.5;
        case "D":   return 1;
        case "F":   return 0;
        default :   return 0;
      }
    }
  };













}]);
