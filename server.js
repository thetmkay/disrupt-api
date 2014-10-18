/**
 * Module dependencies
 */

var express = require('express'),
  cons = require('consolidate'),
  http = require('http'),
  path = require('path');

var app = module.exports = express();


/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));
app.engine('html', cons.nunjucks);
app.set('view engine', 'html');

// development only



/**
 * Routes
 */

app.get('/timer/:timer', function(req,res) {
  res.render('add',req.params.timer);
});
// redirect all others to the index (HTML5 history)
app.get('/', function(req,res) {
  res.render('index');
});


/**
 * Start Server
 */

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
