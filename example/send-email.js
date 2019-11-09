var email = require('../lib');

email.send({
  api_user: "username",
  api_key: "key",
  to: "tw2999pa@uwaterloo.ca",
  from: "tw2999pa@uwaterloo.ca",
  subject: "test email from email resource",
  text: "hello"
}, function (err, result) {
  console.log(err, result);
});
