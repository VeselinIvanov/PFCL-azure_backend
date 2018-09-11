'use strict';
var db = require("../../lib/makeQuery");
var gm = require("../../models/garbage");

 module.exports = {
     get: function getAllUserRequestByID(req, res) {
        gm.phone_id = req.params['id'];
        db.get(gm,res);
     }    
 };