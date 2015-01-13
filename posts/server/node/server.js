var express = require('express');
var bodyParser = require('body-parser');
 
var app = express();
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var mongoose = require('mongoose')
mongoose.connect('mongodb://test:test@ds029837.mongolab.com:29837/multivision', function () {
  console.log('mongodb connected')
})


var Post = mongoose.model('Post', {
  username: { type: String, required: true },
  body:     { type: String, required: true },
  date:     { type: Date, required: true, default: Date.now }
}) 


app.get('/', function (req, res) {
  res.sendfile('./posts.html');
})

app.get('/api/posts', function (req, res, next) {
  Post.find().sort('-date').exec(function(err, posts) {
    if (err) { return next(err) }
    res.json(posts)
  })
})

/*
app.get('/api/posts', function(req,res) {
	res.json([
		{ username: 'from server', body: 'server body' }
  		])
})
*/




//var Post = require('./model/post'); 

app.post('/api/posts', function (req, res, next) {
  var post = new Post({
    username: req.body.username,
    body: req.body.body
  })
  post.save(function (err, post) {
    if (err) { return next(err) }
    console.log('successful post');
    res.status(201).json(post);
    //res.json(201, post)
  })
})

/*
app.post('/api/posts', function (req, res) {
  console.log('post received!')
  console.log(req.body.username)
  console.log(req.body.body)
  res.sendStatus(201)
})
*/
app.listen(3000, function() {
	console.log('server listening port ', 3000);

})
