"use strict"

class Preferences{
    constructor(preference_id, membersId, member_profile_image, social_media_accounts, region_preferences, cuisine_preferences, price_range_preferences, dietary_preferences, website_language, website_font_size, website_theme, website_notifications, preferences_dateEdited){
        this.preference_id = preference_id;
        this.membersId = membersId;
        this.member_profile_image = member_profile_image;
        this.social_media_accounts = social_media_accounts;
        this.region_preferences = region_preferences;
        this.cuisine_preferences = cuisine_preferences;
        this.price_range_preferences = price_range_preferences;
        this.dietary_preferences = dietary_preferences;
        this.website_language = website_language;
        this.website_font_size = website_font_size;
        this.website_theme = website_theme;
        this.website_notifications = website_notifications;
        this.preferences_dateEdited = preferences_dateEdited;
    }
    getId(){
        return this.preference_id;
    }
    getMemberId(){
        return this.membersId;
    }
    getProfileImage(){
        return this.member_profile_image;
    }
    getSocialMediaAccounts(){
        return this.social_media_accounts;
    }
    getRegionPreferences(){
        return this.region_preferences;
    }
    getCuisinePreferences(){
        return this.cuisine_preferences;
    }
    getPriceRangePreferences(){
        return this.price_range_preferences;
    }
    getDietaryPreferences(){
        return this.dietary_preferences;
    }
    getWebsiteLanguage(){
        return this.website_language;
    }
    getWebsiteFontSize(){
        return this.website_font_size;
    }
    getWebsiteTheme(){
        return this.website_theme;
    }
    getWebsiteNotifications(){
        return this.website_notifications;
    }
    getDateEdited(){
        return this.preferences_dateEdited;
    }
	
    setMemberId(membersId){
        this.membersId = membersId;
    }
    setMember(social_media_accounts){
        this.social_media_accounts = social_media_accounts;
    }
    setMember(region_preferences){
        this.region_preferences = region_preferences;
    }
    setMember(cuisine_preferences){
        this.cuisine_preferences = cuisine_preferences;
    }
    setMember(price_range_preferences){
        this.price_range_preferences = price_range_preferences;
    }
    setMember(dietary_preferences){
        this.dietary_preferences = dietary_preferences;
    }
    setMember(website_language){
        this.website_language = website_language;
    }
    setMember(website_font_size){
        this.website_font_size= website_font_size;
    }
    setMember(website_theme){
        this.website_theme = website_theme;
    }
    setMember(website_notifications){
        this.website_notifications = website_notifications;
    }
    setMember(preferences_dateEdited){
        this.preferences_dateEdited = preferences_dateEdited;
    }
}
module.exports = Preferences;