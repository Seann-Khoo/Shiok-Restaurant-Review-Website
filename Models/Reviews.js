"use strict"

class Reviews{
    constructor(comment_id, memberId, restaurantId, customer_username, customer_comments, customer_rating, customer_images, comment_datePosted){
        this.comment_id = comment_id;
        this.memberId = memberId;
        this.restaurantId = restaurantId;
        this.customer_username = customer_username;
        this.customer_comments = customer_comments;
        this.customer_rating = customer_rating;
        this.customer_images = customer_images;
        this.comment_datePosted = comment_datePosted;
    }
    getId(){
        return this.comment_id;
    }
    getMemberId(){
        return this.memberId;
    }
    getRestaurantId(){
        return this.restaurantId;
    }
    getCustomerUsername(){
        return this.customer_username
    }
    getCustomerComments(){
        return this.customer_comments;
    }
    getCustomerRating(){
        return this.customer_rating;
    }
    getCustomerImages(){
        return this.customer_images;
    }
    getDatePosted(){
        return this.comment_datePosted;
    }
	
    setMemberId(memberId){
        this.memberId = memberId;
    }
    setRestaurantId(restaurantId){
        this.restaurantId = restaurantId;
    }
    setMember(customer_comments){
        this.customer_comments = customer_comments;
    }
    setMember(customer_rating){
        this.customer_rating = customer_rating;
    }
    setMember(customer_images){
        this.customer_images = customer_images;
    }
    setMember(comment_datePosted){
        this.comment_datePosted = comment_datePosted;
    }
}
module.exports = Reviews;