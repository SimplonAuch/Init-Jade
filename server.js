var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));
app.set('views', './views');
app.set('view engine', 'jade');

app.post('/signup', function(req, res){
  console.log(req.body);
  res.render('lala', { user: req.body });
});


app.listen(3000, function(){
  console.log('LISTEN ON PORT 3000');
});
