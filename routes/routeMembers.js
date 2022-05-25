"use strict"

const membersdb = require('../Models/MembersDB');

var membersDBObject = new membersdb();

function routeMembers(app){
    app.route('/allmembers')
        .get(membersDBObject.getAllMembers);
    //app.route('/viewaccountinfo/:member_id')
        //.get(membersDBObject.viewMember);
    app.route('/accountinfo')
        .post(membersDBObject.getMembers)
        .put(membersDBObject.updateMember);
    app.route('/userlogin')
        .post(membersDBObject.getLoginCredentials);
    app.route('/addnewaccount')
        .post(membersDBObject.addMember);
    //app.route('/updateaccountinfo/:member_id')
        //.put(membersDBObject.updateMemberInfo);
    app.route('/delete')
        .delete(membersDBObject.deleteMember);
}
module.exports = {routeMembers};


