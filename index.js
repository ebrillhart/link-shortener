var express = require("express");
var bodyParser = require("body-parser");
var sequelize = require("sequelize");
var Hashids = require("hashids");
	hashids = new Hashids("Emma's salt");
var db = require('./models');	
var app = express();

var ejsLayouts = require("express-ejs-layouts");
app.use(ejsLayouts);

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/static'));
app.use(bodyParser.urlencoded({extended: false}));

app.set("view engine", "ejs");

app.get("/", function(req, res) {
	res.render("index");
});

app.get("/links/", function(req, res) {
	var urls = db.url.findAll({order: 'clicks DESC'}).then(function(urls) {
		var myArray = urls;
		res.render("links/index", {myArray});
	});
});

app.get("/:hash", function(req, res) {
	var hashid = req.params.hash;
	db.url.find({where: {hash: hashid}}).then(function(url) {
		var clickCount = url.clicks;
		clickCount++;
		url.save().then(function(url) {
			var finalUrl = url.url;
  			res.redirect(finalUrl);
		});
	});
});

app.get("/links/:idx", function(req, res) {
	var id = req.params.idx;
	res.render("links/show", {hash: id});
});

app.get("/error", function(req, res) {
	res.render("error");
});

app.use("/links", require("./controllers/links"));

app.listen(3000);