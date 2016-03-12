exports.index = function(req, res, next){
  var type = "events"
  , params = ""
  , url = "http://dc-api-test.herokuapp.com/api/v1/" + type + params;

  request(url, function(err, response, body) {
    var r = JSON.parse(body);
    data = r.events
  })
  res.render('index', data);
};
