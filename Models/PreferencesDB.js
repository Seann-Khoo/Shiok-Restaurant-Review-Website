"use strict"

var db = require('../db-connection');
const Preferences = require('../Models/Preferences');

class PreferencesDB{

    getAllPreferences(request, respond){
        var sql = "SELECT * FROM mydb.member_preferences";
        db.query(sql, function(error, result){
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
        });
    }

    viewMemberPreferences(request, respond){
        var memberID = request.params.membersId;
        var sql = "SELECT * FROM mydb.member_preferences where membersId = ?";
        db.query(sql, memberID, function(error, result){
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
        });
    }

    addPreference(request, respond){
        var now = new Date();
        var preferenceObject = new Preferences(null, request.body.membersId, request.body.member_profile_image, request.body.social_media_accounts, request.body.region_preferences,
            request.body.cuisine_preferences, request.body.price_range_preferences, request.body.dietary_preferences, request.body.website_language, request.body.website_font_size, request.body.website_theme, request.body.website_notifications, now.toString());
        var sql = "INSERT INTO mydb.member_preferences (membersId, member_profile_image, social_media_accounts, region_preferences, cuisine_preferences, price_range_preferences, dietary_preferences, website_language, website_font_size, website_theme, website_notifications, preferences_dateEdited) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)";
        var values = [preferenceObject.getMemberId(), preferenceObject.getProfileImage(), preferenceObject.getSocialMediaAccounts(), preferenceObject.getRegionPreferences(), 
            preferenceObject.getCuisinePreferences(), preferenceObject.getPriceRangePreferences(), preferenceObject.getDietaryPreferences(), preferenceObject.getWebsiteLanguage(), preferenceObject.getWebsiteFontSize(), preferenceObject.getWebsiteTheme(), preferenceObject.getWebsiteNotifications(), preferenceObject.getDateEdited()];
        db.query(sql, values, function (error, result) {
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
          });
    }
    
    updatePreference(request, respond){
        var now = new Date();
        
        var preferenceObject = new Preferences(request.params.preference_id, request.body.membersId, request.body.member_profile_image, request.body.social_media_accounts, request.body.region_preferences,
            request.body.cuisine_preferences, request.body.price_range_preferences, request.body.dietary_preferences, request.body.website_language, request.body.website_font_size, request.body.website_theme, request.body.website_notifications, now.toString());

        var sql = "UPDATE mydb.member_preferences SET member_profile_image = ?, social_media_accounts = ?, region_preferences = ?, cuisine_preferences = ?, price_range_preferences = ?, dietary_preferences = ?, website_language = ?, website_font_size = ?, website_theme = ?, website_notifications = ?, preferences_dateEdited=? WHERE preference_id = ?";
        var values = [preferenceObject.getProfileImage(), preferenceObject.getSocialMediaAccounts(), preferenceObject.getRegionPreferences(), preferenceObject.getCuisinePreferences(), preferenceObject.getPriceRangePreferences(), preferenceObject.getDietaryPreferences(), preferenceObject.getWebsiteLanguage(), preferenceObject.getWebsiteFontSize(), preferenceObject.getWebsiteTheme(), preferenceObject.getWebsiteNotifications(), preferenceObject.getDateEdited(), preferenceObject.getId()];
        db.query(sql, values, function (error, result) {
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
          });
    }
    
    resetPreference(request, respond){
        var now = new Date();
        
        var preferenceObject = new Preferences(request.params.preference_id, request.body.membersId, request.body.member_profile_image, request.body.social_media_accounts,
            request.body.region_preferences, request.body.cuisine_preferences, request.body.price_range_preferences, request.body.dietary_preferences, request.body.website_language, request.body.website_font_size, request.body.website_theme, request.body.website_notifications, now.toString());

        var sql = "UPDATE mydb.member_preferences SET member_profile_image = null, social_media_accounts = null, region_preferences = 'All Regions', cuisine_preferences = 'All Cuisines', price_range_preferences = 'All PR', dietary_preferences = null, website_language = 'English (Singapore)', website_font_size = 'Medium', website_theme = 'Default', website_notifications = 'All Notifications', preferences_dateEdited=? WHERE preference_id = ?";
        var values = [preferenceObject.getDateEdited(), preferenceObject.getId()];
        db.query(sql, values, function (error, result) {
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
          });
    }
    
    deletePreference(request, respond){
        var preferenceID = request.params.preference_id;
        var sql = "DELETE FROM mydb.member_preferences WHERE preference_id = ?";
        db.query(sql, preferenceID, function (error, result) {
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
          });
    }
    
}
module.exports = PreferencesDB;

