"use strict"


const reviewsdb = require('../Models/ReviewsDB');

var reviewsDBObject = new reviewsdb();

function routeReviews(app) {
    app.route('/reviews')
        .get(reviewsDBObject.getAllReviews)
        .post(reviewsDBObject.addReview)
    app.route('/reviews/:comment_id')
        .put(reviewsDBObject.updateReview)
        .delete(reviewsDBObject.deleteReview);
    app.route('/individualreview/:comment_id')
        .get(reviewsDBObject.getIndividualReview);
    app.route('/memberreviews/:memberId')
        .get(reviewsDBObject.getReviewsByMember);
    app.route('/restaurantreviews/:restaurantId')
        .get(reviewsDBObject.getReviewsByRestaurant);
    //app.route('/addnewreview')
    //.post(reviewsDBObject.addReview);
}
module.exports = { routeReviews };

