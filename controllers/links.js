var express = require("express");
var router = express.Router();
var sequelize = require("sequelize");
var Hashids = require("hashids");
	hashids = new Hashids("Emma's salt", 4);
var bodyParser = require('body-parser');
var db = require("./../models");

router.use(bodyParser.urlencoded({extended: false})); 


router.post("/", function(req, res) {
	var search = req.body.q;
	if (!search) {
		res.redirect("/error");	
	} else {
		db.url.create({url: search}).then(function(url) {
			var newId = hashids.encode(url.id);
			url.updateAttributes({hash: newId});
			url.save().then(function(url){
				console.log(url);
				res.redirect("/links/" + url.hash);
			});
		});
	}
		
});


module.exports = router;