
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , request = require('request')
  , bodyParser = require('body-parser')
  , favicon = require('serve-favicon')
  , logger = require('morgan')
  , methodOverride = require('method-override');

var app = express();

app.set('port', process.env.PORT || 3030);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(favicon(__dirname + '/public/images/favicon.png'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

if (app.get('env') == 'development') {
	app.locals.pretty = true;
}

var type = "events"
  , params = ""
  , url = "http://dc-api-test.herokuapp.com/api/v1/" + type + params;

/**
* Init
*/

app.get('/', function(req, res, next) {
  request(url, function(err, response, body) {
    var r = JSON.parse(body);
    data = r.events
    res.render('index', data)
  })
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
