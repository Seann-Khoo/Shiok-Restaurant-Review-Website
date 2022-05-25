"use strict"

const restaurantsdb = require('../Models/RestaurantsDB');

var restaurantsDBObject = new restaurantsdb();

function routeRestaurants(app){
    app.route('/allrestaurants')
        .get(restaurantsDBObject.getAllRestaurants);
    app.route('/restaurants/cuisine/:restaurant_cuisine')
        .get(restaurantsDBObject.getRestaurantsByCuisine);
    app.route('/restaurants/region/:restaurant_region')
        .get(restaurantsDBObject.getRestaurantsByRegion);
    app.route('/restaurants/pricerange/:restaurant_price_range')
        .get(restaurantsDBObject.getRestaurantsByPriceRange);
    app.route('/restaurants/halalstatus/:restaurant_halal')
        .get(restaurantsDBObject.getRestaurantsByHalalStatus);
    app.route('/restaurants/dietaryoptions/:restaurant_dietary_options')
        .get(restaurantsDBObject.getRestaurantsByDietaryOptions);
    app.route('/addnewrestaurant')
        .post(restaurantsDBObject.addRestaurant);
    app.route('/updaterestaurant/:restaurant_id')
        .put(restaurantsDBObject.updateRestaurant);
    app.route('/deleterestaurant/:restaurant_id')
        .delete(restaurantsDBObject.deleteRestaurant);
    app.route('/email')
        .post(restaurantsDBObject.sendEmail);
    app.route('/search')
        .post(restaurantsDBObject.searchAllRestaurants);
}
module.exports = {routeRestaurants};


