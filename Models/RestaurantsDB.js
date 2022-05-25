"use strict"
var db = require('../db-connection');
const Restaurants = require('../Models/Restaurants');
const sgMail = require('@sendgrid/mail')

class RestaurantsDB {
    getAllRestaurants(request, respond) {
        var sql = "SELECT * FROM mydb.restaurant_information";
        db.query(sql, function (error, result) {
            if (error) {
                throw error;
            }
            else {
                respond.json(result);
            }
        });
    }

    getRestaurantsByCuisine(request, respond) {
        var restaurantCuisine = request.params.restaurant_cuisine
        var sql = "SELECT * FROM mydb.restaurant_information WHERE restaurant_cuisine = ?";
        db.query(sql, restaurantCuisine, function (error, result) {
            if (error) {
                throw error;
            }
            else {
                respond.json(result);
            }
        });
    }

    getRestaurantsByRegion(request, respond) {
        var restaurantRegion = request.params.restaurant_region
        var sql = "SELECT * FROM mydb.restaurant_information WHERE restaurant_region = ?";
        db.query(sql, restaurantRegion, function (error, result) {
            if (error) {
                throw error;
            }
            else {
                respond.json(result);
            }
        });
    }

    getRestaurantsByPriceRange(request, respond) {
        var restaurantPriceRange = request.params.restaurant_price_range
        var sql = "SELECT * FROM mydb.restaurant_information WHERE restaurant_price_range = ?";
        db.query(sql, restaurantPriceRange, function (error, result) {
            if (error) {
                throw error;
            }
            else {
                respond.json(result);
            }
        });
    }

    getRestaurantsByHalalStatus(request, respond) {
        var restaurantHalalStatus = request.params.restaurant_halal
        var sql = "SELECT * FROM mydb.restaurant_information WHERE restaurant_halal = ?";
        db.query(sql, restaurantHalalStatus, function (error, result) {
            if (error) {
                throw error;
            }
            else {
                respond.json(result);
            }
        });
    }

    getRestaurantsByDietaryOptions(request, respond) {
        var restaurantDietaryOptions = request.params.restaurant_dietary_options
        var sql = "SELECT * FROM mydb.restaurant_information WHERE restaurant_dietary_options = ?";
        db.query(sql, restaurantDietaryOptions, function (error, result) {
            if (error) {
                throw error;
            }
            else {
                respond.json(result);
            }
        });
    }

    searchAllRestaurants(request, respond){
        var searchTerm = request.body.search;
        var search = "%" + searchTerm + "%";
        var sql = "SELECT * FROM mydb.restaurant_information WHERE restaurant_name LIKE '%" + search + "%'";
        db.query(sql, [search] , function(error, result){
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
        });
    }

    sendEmail(request, respond) {
        var email = request.body.email;
        var feedback = request.body.feedback;
        sgMail.setApiKey("Insert API Key")
        const msg = {
            to: email, // Change to your recipient
            from: 'Insert Email Address', // Change to your verified sender
            subject: 'Shiok Restaurant Review Feedback',
            text: "Thanks for your feedback! It means a lot to Shiok Restaurant Review. An email receipt of your feedback response is attached below." + '<br>' +  '<br>' + '<strong>' + feedback + '</strong>',
            html: "Thanks for your feedback! It means a lot to Shiok Restaurant Review. An email receipt of your feedback response is attached below." + '<br>' +  '<br>' + '<strong>' + feedback + '</strong>',
        }
        sgMail
            .send(msg)
            .then(() => {
                console.log('Email sent')
                respond.json({ result: "success" });
            })
            .catch((error) => {
                console.error(error)
                respond.json({ result: "fail" });
            })
    }

    addRestaurant(request, respond) {
        var now = new Date();
        var restaurantObject = new Restaurants(null, request.body.restaurant_name, request.body.restaurant_cover_image, request.body.restaurant_cuisine, request.body.restaurant_region,
            request.body.restaurant_price_range, request.body.restaurant_halal, request.body.restaurant_dietary_options, request.body.restaurant_suitability, request.body.restaurant_address,
            request.body.restaurant_address_longitude, request.body.restaurant_address_latitude, request.body.restaurant_postal_code, request.body.restaurant_description, request.body.restaurant_operating_hours,
            request.body.restaurant_phone_number, request.body.restaurant_email, request.body.restaurant_website, request.body.restaurant_reservation_link, request.body.restaurant_overall_rating, now.toString());
        var sql = "INSERT INTO mydb.restaurant_information (restaurant_name, restaurant_cover_image, restaurant_cuisine, restaurant_region, restaurant_price_range, restaurant_halal, restaurant_dietary_options, restaurant_suitability, restaurant_address, restaurant_address_longitude, restaurant_address_latitude, restaurant_postal_code, restaurant_description, restaurant_operating_hours, restaurant_phone_number, restaurant_email, restaurant_website, restaurant_reservation_link, restaurant_overall_rating, restaurant_dateListed) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        var values = [restaurantObject.getName(), restaurantObject.getCoverImage(), restaurantObject.getCuisine(), restaurantObject.getRegion(), restaurantObject.getPriceRange(), restaurantObject.getHalalStatus(), restaurantObject.getDietaryOptions(), restaurantObject.getSuitability(), restaurantObject.getAddress(), restaurantObject.getAddressLongitude(),
        restaurantObject.getAddressLatitude(), restaurantObject.getPostalCode(), restaurantObject.getDescription(), restaurantObject.getOperatingHours(), restaurantObject.getPhoneNumber(), restaurantObject.getEmailAddress(), restaurantObject.getWebsiteLink(), restaurantObject.getReservationLink(), restaurantObject.getOverallRating(), restaurantObject.getDateListed()];
        db.query(sql, values, function (error, result) {
            if (error) {
                throw error;
            }
            else {
                respond.json(result);
            }
        });
    }

    updateRestaurant(request, respond) {
        var now = new Date();
        var restaurantObject = new Restaurants(request.params.restaurant_id, request.body.restaurant_name, request.body.restaurant_cover_image, request.body.restaurant_cuisine, request.body.restaurant_region,
            request.body.restaurant_price_range, request.body.restaurant_halal, request.body.restaurant_dietary_options, request.body.restaurant_suitability, request.body.restaurant_address,
            request.body.restaurant_address_longitude, request.body.restaurant_address_latitude, request.body.restaurant_postal_code, request.body.restaurant_description, request.body.restaurant_operating_hours,
            request.body.restaurant_phone_number, request.body.restaurant_email, request.body.restaurant_website, request.body.restaurant_reservation_link, request.body.restaurant_overall_rating);
        var sql = "UPDATE mydb.restaurant_information SET restaurant_name = ?, restaurant_cover_image = ?, restaurant_cuisine = ?, restaurant_region = ?, restaurant_price_range = ?, restaurant_halal = ?, restaurant_dietary_options = ?, restaurant_suitability = ?, restaurant_address = ?, restaurant_address_longitude = ?, restaurant_address_latitude = ?, restaurant_postal_code = ?, restaurant_description = ?, restaurant_operating_hours = ?, restaurant_phone_number = ?, restaurant_email = ?, restaurant_website = ?, restaurant_reservation_link = ?, restaurant_overall_rating = ? WHERE restaurant_id = ?";
        var values = [restaurantObject.getName(), restaurantObject.getCoverImage(), restaurantObject.getCuisine(), restaurantObject.getRegion(), restaurantObject.getPriceRange(), restaurantObject.getHalalStatus(), restaurantObject.getDietaryOptions(), restaurantObject.getSuitability(), restaurantObject.getAddress(), restaurantObject.getAddressLongitude(),
        restaurantObject.getAddressLatitude(), restaurantObject.getPostalCode(), restaurantObject.getDescription(), restaurantObject.getOperatingHours(), restaurantObject.getPhoneNumber(), restaurantObject.getEmailAddress(), restaurantObject.getWebsiteLink(), restaurantObject.getReservationLink(), restaurantObject.getOverallRating(), restaurantObject.getId()];
        db.query(sql, values, function (error, result) {
            if (error) {
                throw error;
            }
            else {
                respond.json(result);
            }
        });
    }

    deleteRestaurant(request, respond) {
        var restaurantID = request.params.restaurant_id;
        var sql = "DELETE FROM mydb.restaurant_information WHERE restaurant_id = ?";
        db.query(sql, restaurantID, function (error, result) {
            if (error) {
                throw error;
            }
            else {
                respond.json(result);
            }
        });
    }

}

module.exports = RestaurantsDB;


