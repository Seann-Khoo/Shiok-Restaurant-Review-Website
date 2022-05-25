"use strict"

var db = require('../db-connection');
const Reviews = require('../Models/Reviews');
var jwt = require("jsonwebtoken");
var secret = "somesecretkey";

class ReviewsDB{

    getAllReviews(request, respond){
        var sql = "SELECT member_personal_information.member_username, restaurant_information.restaurant_name, customer_reviews.comment_id, customer_reviews.customer_username, customer_reviews.customer_comments, customer_reviews.customer_rating, customer_reviews.customer_images, customer_reviews.comment_datePosted FROM ((customer_reviews INNER JOIN restaurant_information ON customer_reviews.restaurantId = restaurant_information.restaurant_id) INNER JOIN member_personal_information ON customer_reviews.memberId = member_personal_information.member_id)";
        db.query(sql, function(error, result){
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
        });
    }

    getIndividualReview(request, respond){
        var commentID = request.params.comment_id;
        var sql = "SELECT member_personal_information.member_username, restaurant_information.restaurant_name, customer_reviews.customer_comments, customer_reviews.customer_rating, customer_reviews.customer_images, customer_reviews.comment_datePosted FROM ((customer_reviews INNER JOIN restaurant_information ON customer_reviews.restaurantId = restaurant_information.restaurant_id) INNER JOIN member_personal_information ON customer_reviews.memberId = member_personal_information.member_id) WHERE customer_reviews.comment_id = ?";
        db.query(sql, commentID, function(error, result){
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
        });
    }

    getReviewsByMember(request, respond){
        var memberID = request.params.memberId;
        var sql = "SELECT member_personal_information.member_username, restaurant_information.restaurant_name, customer_reviews.customer_comments, customer_reviews.customer_rating, customer_reviews.customer_images, customer_reviews.comment_datePosted FROM ((customer_reviews INNER JOIN restaurant_information ON customer_reviews.restaurantId = restaurant_information.restaurant_id) INNER JOIN member_personal_information ON customer_reviews.memberId = member_personal_information.member_id) WHERE customer_reviews.memberId = ?";
        db.query(sql, memberID, function(error, result){
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
        });
    }

    getReviewsByRestaurant(request, respond){
        var restaurantID = request.params.restaurantId;
        var sql = "SELECT member_personal_information.member_username, restaurant_information.restaurant_name, customer_reviews.customer_comments, customer_reviews.customer_rating, customer_reviews.customer_images, customer_reviews.comment_datePosted FROM ((customer_reviews INNER JOIN restaurant_information ON customer_reviews.restaurantId = restaurant_information.restaurant_id) INNER JOIN member_personal_information ON customer_reviews.memberId = member_personal_information.member_id) WHERE customer_reviews.restaurantId = ?";
        db.query(sql, restaurantID, function(error, result){
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
        });
    } 

    addReview(request, respond){
        var now = new Date();
        var reviewObject = new Reviews(null, request.body.memberId, request.body.restaurantId, request.body.customer_username,
            request.body.customer_comments, request.body.customer_rating, request.body.customer_images, now.toString());
        var sql = "INSERT INTO mydb.customer_reviews (memberId, restaurantId, customer_username, customer_comments, customer_rating, customer_images, comment_datePosted) VALUES(?,?,?,?,?,?,?)";
        var values = [reviewObject.getMemberId(), reviewObject.getRestaurantId(), reviewObject.getCustomerUsername(),
            reviewObject.getCustomerComments(), reviewObject.getCustomerRating(), reviewObject.getCustomerImages(), reviewObject.getDatePosted()];
        db.query(sql, values, function (error, result) {
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
          });
    }
    
    updateReview(request, respond){
        var now = new Date();
        var reviewObject = new Reviews(request.params.comment_id, request.body.memberId, request.body.restaurantId, request.body.customer_username, request.body.customer_comments, request.body.customer_rating, request.body.customer_images, now.toString());

        var sql = "UPDATE mydb.customer_reviews SET customer_username=?, customer_comments=?, customer_rating=?, customer_images=?, comment_datePosted=? WHERE comment_id=?";
        var values = [reviewObject.getCustomerUsername(), reviewObject.getCustomerComments(), reviewObject.getCustomerRating(), reviewObject.getCustomerImages(), reviewObject.getDatePosted(), reviewObject.getId()];
        db.query(sql, values, function (error, result) {
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
          });
    }
    
    deleteReview(request, respond){
        var comment_id = request.params.comment_id;
        var sql = "DELETE FROM mydb.customer_reviews WHERE comment_id=?";
        db.query(sql, comment_id, function (error, result) {
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
          });
    }
    
}
module.exports = ReviewsDB;

