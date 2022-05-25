"use strict"
var db = require('../db-connection');
const Bookmarks = require('../Models/Bookmarks');

class BookmarksDB{
    getAllBookmarks(request, respond){
        var sql = "SELECT member_bookmarks.bookmark_id, member_bookmarks.memberID, member_bookmarks.restaurantID, member_personal_information.member_username, restaurant_information.restaurant_name, member_bookmarks.bookmark_dateAdded FROM ((member_bookmarks INNER JOIN member_personal_information ON member_bookmarks.memberID = member_personal_information.member_id) INNER JOIN restaurant_information ON member_bookmarks.restaurantID = restaurant_information.restaurant_id)";
        db.query(sql, function(error, result){
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
        });
    }

    viewMemberBookmarks(request, respond){
        var memberID = request.params.memberID;
        var sql = "SELECT restaurant_information.restaurant_name, member_bookmarks.bookmark_dateAdded FROM member_bookmarks INNER JOIN restaurant_information ON member_bookmarks.restaurantId = restaurant_information.restaurant_id WHERE member_bookmarks.memberID = ?";
        db.query(sql, memberID, function(error, result){
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
        });
    }
    
    addBookmark(request, respond){
        var now = new Date();
        var bookmarkObject = new Bookmarks(null, request.body.memberID, request.body.restaurantID, now.toString());
        var sql = "INSERT INTO mydb.member_bookmarks (memberID, restaurantID, bookmark_dateAdded) VALUES(?,?,?)";
        var values = [bookmarkObject.getMemberId(), bookmarkObject.getRestaurantId(), bookmarkObject.getDateAdded()];
        db.query(sql, values, function (error, result) {
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
          });
    }
    
    deleteBookmark(request, respond){
        var bookmarkID = request.params.bookmark_id;
        var sql = "DELETE FROM mydb.member_bookmarks WHERE bookmark_id = ?";
        db.query(sql, bookmarkID, function (error, result) {
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
          });
    }

}

module.exports = BookmarksDB;


