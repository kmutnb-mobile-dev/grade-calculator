livereload = require('livereload');
server = livereload.createServer();
server.watch(__dirname + "/public");

/* ======================================= */

var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var format = require('util').format;

var studentGrade = null;
/* ======================================= */

var port = 4000;
var express = require('express');
var app = express();

app.use(express.static('./public/'));

app.get('/addSubject',function(request,response)
{
  var insertData = {
    subject_id:     request.query.subject_id,
    name:           request.query.name,
    credit:         request.query.credit,
    grade:          request.query.grade
  };

  studentGrade.insert(insertData,function()
  {
    response.send('Success');
  });
});

app.get('/getSubject/:subject_id?',function(request,response)
{
  var find = {};

  if(request.params.subject_id)
    find.subject_id = request.params.subject_id;

  studentGrade.find(find).toArray(function(err,result)
  {
    response.send(JSON.stringify(result));
  });
});

app.get('/updateSubject/:subject_id',function(request,response)
{
  var find = {};
  var newData = {};
  if(request.params.subject_id)
    find.subject_id = request.params.subject_id;

  if(request.query.name)
    newData.name = request.query.name;
  if(request.query.credit)
    newData.credit = request.query.credit;
  if(request.query.grade)
    newData.grade = request.query.grade;

  studentGrade.update(find,{'$set':newData},function(err,result)
  {
    response.send('Success');
  });
});

app.get('/removeSubject/:subject_id',function(request,response)
{
  var find = {};
  if(request.params.subject_id)
    find.subject_id = request.params.subject_id;

  studentGrade.remove(find,function(err,result)
  {
    response.send('Success');
  });
});



MongoClient.connect('mongodb://root:1234@linus.mongohq.com:10067/grade', function(err, db) {
  if(err) throw err;
  studentGrade = db.collection('student_grade');
  app.listen(port);
  console.log("\nhttp://127.0.0.1:"+port+"\n");
});
