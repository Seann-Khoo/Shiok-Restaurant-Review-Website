"use strict"

const preferencesdb = require('../Models/PreferencesDB');

var preferencesDBObject = new preferencesdb();

function routePreferences(app){
    app.route('/allpreferences')
        .get(preferencesDBObject.getAllPreferences);
    app.route('/viewpreferences/:membersId')
       .get(preferencesDBObject.viewMemberPreferences);
    app.route('/addnewpreferences')
        .post(preferencesDBObject.addPreference);
    app.route('/updatepreferences/:preference_id')
        .put(preferencesDBObject.updatePreference);
    app.route('/deletepreferences/:preference_id')
        .delete(preferencesDBObject.deletePreference);
    app.route('/resetpreferences/:preference_id')
        .put(preferencesDBObject.resetPreference)
}
module.exports = {routePreferences};


