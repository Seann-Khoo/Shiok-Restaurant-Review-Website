"use strict"

class Members{
    constructor(member_id, member_first_name, member_last_name, member_profile_picture, member_gender, member_email, member_address, member_postal_code, member_phone_number, member_username, member_password, member_dateJoined){
        this.member_id = member_id;
        this.member_first_name = member_first_name;
        this.member_last_name = member_last_name;
        this.member_profile_picture = member_profile_picture;
        this.member_gender = member_gender;
        this.member_email = member_email;
        this.member_address = member_address;
        this.member_postal_code = member_postal_code;
        this.member_phone_number = member_phone_number;
        this.member_username = member_username;
        this.member_password = member_password;
        this.member_dateJoined = member_dateJoined;
    }
    getId(){
        return this.member_id;
    }
    getFirstName(){
        return this.member_first_name;
    }
    getLastName(){
        return this.member_last_name;
    }
    getProfilePicture(){
        return this.member_profile_picture;
    }
    getGender(){
        return this.member_gender;
    }
	getEmail(){
        return this.member_email;
    }
	getAddress(){
        return this.member_address;
    }
    getPostalCode(){
        return this.member_postal_code;
    }
    getPhoneNumber(){
        return this.member_phone_number;
    }
    getUsername(){
        return this.member_username;
    }
    getPassword(){
        return this.member_password;
    }
    getDateJoined(){
        return this.member_dateJoined;
    }
}
module.exports = Members;