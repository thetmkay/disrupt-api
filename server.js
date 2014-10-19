/**
 * Module dependencies
 */

var express = require('express'),
  cons = require('consolidate'),
  http = require('http'),
  path = require('path');

var Parse = require('parse').Parse;

Parse.initialize("TpudbmSzk74NMI1GBDfs4FJq4E5Tk4MbJ4kgb5rR", "WA4rrkLGN1Pcx2RiyccEBrAm6h0DAY5hiYXXa9M4");

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

app.get('/timer/:routine', function(req,res) {
  console.log(req.params.routine);
  var query = new Parse.Query(Parse.Object.extend("Routine") );
  query.get(req.params.routine, {
    success: function(datastring) {
      var data = datastring._serverData;
      // console.log(data);
      var user = data.user;
      delete data.user;
      // console.log(user);
      // console.log(data.attributes.timers);
      var encoded_url = encodeURI(JSON.stringify(data));
      // console.log(encoded_url);
      res.render('add', {user:user, name:data.name, timers:data.timers, encoded_url:encoded_url});
    }
  });
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
