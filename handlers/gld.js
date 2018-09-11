'use strict';

//Garbage Location Data - gld
//A handler for 
 var garbageModel = require('../models/garbage');
 var db = require('../lib/makeQuery');

 module.exports = {
    post: function dump_request_data(req, res) {
        garbageModel.phone_id = req.body['phone_id'];
        garbageModel.curr_date = req.body['curr_date'];
        garbageModel.curr_time = req.body['curr_time'];
        garbageModel.longitude = req.body['longitude'];
        garbageModel.latitude = req.body['latitude'];
        garbageModel.is_plastic = req.body['is_plastic'];
        garbageModel.is_cigarettes = req.body['is_cigarettes'];
        garbageModel.is_glass = req.body['is_glass'];
        garbageModel.is_food_waste = req.body['is_food_waste'];
        garbageModel.is_paper = req.body['is_paper'];
        garbageModel.is_chemicals = req.body['is_chemicals'];
        garbageModel.is_metal = req.body['is_metal'];
        garbageModel.will_be_picked_up = req.body['will_be_picked_up'];
        garbageModel.quantity = req.body['quantity'];
        garbageModel.picture_id = req.body['picture_id'];

        db.insert(garbageModel,res);
       // res.put.json(repository.all())
        
    },
};