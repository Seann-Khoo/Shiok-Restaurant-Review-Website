"use strict"

class Bookmarks{
    constructor(bookmark_id, memberID, restaurantID, bookmark_dateAdded){
        this.bookmark_id = bookmark_id;
        this.memberID = memberID;
        this.restaurantID = restaurantID
        this.bookmark_dateAdded = bookmark_dateAdded;
    }
    getId(){
        return this.bookmark_id;
    }
    getMemberId(){
        return this.memberID;
    }
    getRestaurantId(){
        return this.restaurantID;
    }
    getDateAdded(){
        return this.bookmark_dateAdded;
    }
	
    setMemberId(memberID){
        this.memberID = memberID;
    }
    setRestaurantId(restaurantID){
        this.restaurantID = restaurantID;
    }
    setNember(bookmark_dateAdded){
        this.bookmark_dateAdded = bookmark_dateAdded;
    }
}
module.exports = Bookmarks;