'use strict';

 var repository = require('../lib/contactRepository');
 //var test = require('../lib/sqltest');
 //var tst =new test();

 module.exports = {
     post: function contacts_get(req, res) {
         console.log(req.body['name']);
         
     //    test.dbQuery(req.body['name'],req.body['id']);
        // res.put.json(repository.all())
         
     }
 };