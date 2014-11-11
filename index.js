
var restify = require('restify');
var utils = require('./utils');
var server = restify.createServer({ name: 'email journal server' });

server.listen(3000, function () {
  console.log('%s listening at %s', server.name, server.url)
});

server
  .use(restify.fullResponse())
  .use(restify.bodyParser());

server.get('/hello', function (req, res, next) {
  console.log("req is "+ req);
  res.send("why hello to you");
  next();
});

server.post('/storeEmail/:email', storeEmail);

function storeEmail(req, res, next) {
  console.log("received store email with req" + req);
  res.send('hello ' + req.params.name);
  next();
}
