'use strict';
//The object model for the data
function Garbage(options) {
    if (!options) {
        options = {};
    }

    this.phone_id = options.phone_id;
    this.curr_date = options.currentDate;
    this.curr_time = options.currentTime;
    this.longitude = options.longitude;
    this.latitude = option.latitude;
    this.is_plastic = option.is_plastic;
    this.is_cigarettes = options.is_cigarettes;
    this.is_glass = option.is_glass;
    this.is_food_waste = option.is_food_waste;
    this.is_paper = options.is_paper;
    this.is_chemicals = options.is_chemicals;
    this.is_metal = options.is_metal;
    this.will_be_picked_up = options.will_be_picked_up;
    this.quantity = options.quantity;
    this.picture_id = option.picture_id;
}

module.exports = Garbage;
