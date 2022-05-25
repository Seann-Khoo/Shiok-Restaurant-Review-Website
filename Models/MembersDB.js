"use strict"
var db = require('../db-connection');
const Members = require('../Models/Members');
var jwt = require("jsonwebtoken");
var secret = "somesecretkey";

class MembersDB {
    getAllMembers(request, respond) {
        var sql = "SELECT * FROM mydb.member_personal_information";
        db.query(sql, function (error, result) {
            if (error) {
                throw error;
            }
            else {
                respond.json(result);
            }
        });
    }

    viewMember(request, respond) {
        var memberID = request.params.member_id;
        var sql = "SELECT * FROM mydb.member_personal_information where member_id = ?";
        db.query(sql, memberID, function (error, result) {
            if (error) {
                throw error;
            }
            else {
                respond.json(result);
            }
        });
    }

    getLoginCredentials(request, respond) {
        var username = request.body.member_username;
        var password = request.body.member_password;

        var sql = "SELECT member_password FROM mydb.member_personal_information WHERE member_username = ?";

        db.query(sql, [username], function (error, result) {
            if (error) {
                throw error;
            }
            else {
                if (result.length > 0) {
                    if (password == result[0].member_password) {
                        var token = jwt.sign(username, secret);
                        respond.json({ result: token });
                    }
                    else {
                        respond.json({ result: false });
                    }
                }
            }
        });
    }

    getMembers(request, respond) {
        var token = request.body.token;
        var sql = "SELECT distinct member_profile_picture, member_email, member_address, member_postal_code, member_phone_number, member_password FROM mydb.member_personal_information where member_username = ?";

        try{
            var decoded = jwt.verify(token, secret);
            db.query(sql, [decoded], function(error, result) {
                if(error){
                    respond.json(error);
                }
                else{
                    respond.json(result);
                }
            })
        } 
        catch(error){
            respond.json({ result: false });
        }
    }

    updateMember(request, respond) {
        var token = request.body.token;
        var member_profile_picture = request.body.member_profile_picture;
        var member_email = request.body.member_email;
        var member_address = request.body.member_address;
        var member_postal_code = request.body.member_postal_code;
        var member_phone_number = request.body.member_phone_number;
        var member_password = request.body.member_password;
        var sql = "UPDATE mydb.member_personal_information SET member_profile_picture = ?, member_email = ?, member_address = ?, member_postal_code = ?, member_phone_number = ?, member_password = ? WHERE member_username = ?";

        try{
            var decoded = jwt.verify(token, secret);
            db.query(sql, [member_profile_picture, member_email, member_address, member_postal_code, member_phone_number, member_password, decoded], function(error, result) {
                if(error){
                    respond.json(error);
                }
                else{
                    respond.json(result);
                }
            })
        } 
        catch(error){
            respond.json({ result: false });
        }
    }
        

    addMember(request, respond) {
        var now = new Date();
        var memberObject = new Members(null, request.body.member_first_name, request.body.member_last_name, request.body.member_profile_picture, request.body.member_gender, request.body.member_email,
            request.body.member_address, request.body.member_postal_code, request.body.member_phone_number, request.body.member_username, request.body.member_password, now.toString());
        var sql = "INSERT INTO mydb.member_personal_information (member_first_name, member_last_name, member_profile_picture, member_gender, member_email, member_address, member_postal_code, member_phone_number, member_username, member_password, member_dateJoined) VALUES(?,?,?,?,?,?,?,?,?,?,?)";
        var values = [memberObject.getFirstName(), memberObject.getLastName(), memberObject.getProfilePicture(), memberObject.getGender(), memberObject.getEmail(),
        memberObject.getAddress(), memberObject.getPostalCode(), memberObject.getPhoneNumber(), memberObject.getUsername(), memberObject.getPassword(), memberObject.getDateJoined()];
        db.query(sql, values, function (error, result) {
            if (error) {
                throw error;
            }
            else {
                respond.json(result);
            }
        });
    }

    updateMemberInfo(request, respond) {
        var now = new Date();
        var memberObject = new Members(request.params.member_id, request.body.member_first_name, request.body.member_last_name, request.body.member_gender,
            request.body.member_email, request.body.member_address, request.body.member_postal_code, request.body.member_phone_number, request.body.member_username, request.body.member_password);

        var sql = "UPDATE mydb.member_personal_information SET member_email = ?, member_address = ?, member_postal_code = ?, member_phone_number = ?, member_username = ?, member_password = ? WHERE member_id = ?";
        var values = [memberObject.getEmail(), memberObject.getAddress(), memberObject.getPostalCode(), memberObject.getPhoneNumber(), memberObject.getUsername(), memberObject.getPassword(), memberObject.getId()];
        db.query(sql, values, function (error, result) {
            if (error) {
                throw error;
            }
            else {
                respond.json(result);
            }
        });
    }

    deleteMember2(request, respond) {
        var memberID = request.params.member_id;
        var sql = "DELETE FROM mydb.member_personal_information WHERE member_id = ?";
        db.query(sql, memberID, function (error, result) {
            if (error) {
                throw error;
            }
            else {
                respond.json(result);
            }
        });
    }

    deleteMember(request, respond) {
        var token = request.body.token;

        var sql = "DELETE FROM mydb.member_personal_information WHERE member_username = ?";

        try{
            var decoded = jwt.verify(token, secret);
            db.query(sql, [decoded], function(error, result) {
                if(error){
                    respond.json(error);
                }
                else{
                    respond.json(result);
                }
            })
        } 
        catch(error){
            respond.json({ result: false });
        }
    }

}

module.exports = MembersDB;


