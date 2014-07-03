// apis

var apis = require('ember-mongoose')(require('./models'));

// quiz

apis.Quiz.setPaths([
  'title',
  'image',
  'excerpt',
  'fullName',
  'quizType',
  'submittedOn'
]);

// question

apis.Question.setPaths([
  'title',
  'image',
  'quiz'
]);

// answer

apis.Answer.setPaths([
  'title',
  'image',
  'question',
  'result',
  'value'
]);

// result

apis.Result.setPaths([
  'title',
  'content',
  'image',
  'quiz',
  'max',
  'min'
]);

// expose

module.exports = apis.getURIS();