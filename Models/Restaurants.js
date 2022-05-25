"use strict"

class Restaurants{
    constructor(restaurant_id, restaurant_name, restaurant_cover_image, restaurant_cuisine, restaurant_region, restaurant_price_range, restaurant_halal, restaurant_dietary_options, restaurant_suitability, restaurant_address, restaurant_address_latitude, restaurant_address_longitude, restaurant_postal_code, restaurant_description, restaurant_operating_hours, restaurant_phone_number, restaurant_email, restaurant_website, restaurant_reservation_link, restaurant_overall_rating, restaurant_dateListed){
        this.restaurant_id = restaurant_id;
        this.restaurant_name = restaurant_name;
        this.restaurant_cover_image = restaurant_cover_image;
        this.restaurant_cuisine = restaurant_cuisine;
        this.restaurant_region = restaurant_region;
        this.restaurant_price_range = restaurant_price_range;
        this.restaurant_halal = restaurant_halal;
        this.restaurant_dietary_options = restaurant_dietary_options;
        this.restaurant_suitability = restaurant_suitability;
        this.restaurant_address = restaurant_address;
        this.restaurant_address_latitude = restaurant_address_latitude;
        this.restaurant_address_longitude = restaurant_address_longitude;
        this.restaurant_postal_code = restaurant_postal_code;
        this.restaurant_description = restaurant_description;
        this.restaurant_operating_hours = restaurant_operating_hours;
        this.restaurant_phone_number = restaurant_phone_number;
        this.restaurant_email = restaurant_email;
        this.restaurant_website = restaurant_website;
        this.restaurant_reservation_link = restaurant_reservation_link;
        this.restaurant_overall_rating = restaurant_overall_rating;
        this.restaurant_dateListed = restaurant_dateListed;
    }
    getId(){
        return this.restaurant_id;
    }
    getName(){
        return this.restaurant_name;
    }
    getCoverImage(){
        return this.restaurant_cover_image;
    }
    getCuisine(){
        return this.restaurant_cuisine;
    }
	getRegion(){
        return this.restaurant_region;
    }
	getPriceRange(){
        return this.restaurant_price_range;
    }
    getHalalStatus(){
        return this.restaurant_halal;
    }
    getDietaryOptions(){
        return this.restaurant_dietary_options;
    }
    getSuitability(){
        return this.restaurant_suitability;
    }
    getAddress(){
        return this.restaurant_address;
    }
    getAddressLatitude(){
        return this.restaurant_address_latitude;
    }
    getAddressLongitude(){
        return this.restaurant_address_longitude;
    }
    getPostalCode(){
        return this.restaurant_postal_code;
    }
    getDescription(){
        return this.restaurant_description;
    }
    getOperatingHours(){
        return this.restaurant_operating_hours;
    }
    getPhoneNumber(){
        return this.restaurant_phone_number;
    }
    getEmailAddress(){
        return this.restaurant_email;
    }
    getWebsiteLink(){
        return this.restaurant_website;
    }
    getReservationLink(){
        return this.restaurant_reservation_link;
    }
    getOverallRating(){
        return this.restaurant_overall_rating;
    }
    getDateListed(){
        return this.restaurant_dateListed;
    }
}
module.exports = Restaurants;