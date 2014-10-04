angular.module('FirstApp.service', [])

.factory('Grades', ['$http',
  function($http) {

    return {
      getAll: function(callback) {
        $http.get('/getSubject')
          .success(function(data, status, headers, config) {
            callback(data);
          }).
        error(function(data, status, headers, config) {
          callback({
            error: 1
          });
        });
      },
      addGrade: function(inputSubject, inputCredit, inputGrade,callback) {
        var tmp = {
          name: inputSubject,
          grade: inputGrade,
          credit: inputCredit
        };

        $http.get('/addSubject',{params : tmp})
          .success(function(data, status, headers, config) {
            callback(data);
          }).
        error(function(data, status, headers, config) {
          callback({
            error: 1
          });
        });
      },
      delete: function(index, callback) {
        $http.get('/removeSubject/'+index)
          .success(function(data, status, headers, config) {
            callback(data);
          }).
        error(function(data, status, headers, config) {
          callback({
            error: 1
          });
        });
      },
      edit: function(page, callback) {


        $http.get('/updateSubject/'+page._id, {params : page})
          .success(function(data, status, headers, config) {
            callback(data);
          }).
        error(function(data, status, headers, config) {
          callback({
            error: 1
          });
        });
      }
    };


  }
]);
