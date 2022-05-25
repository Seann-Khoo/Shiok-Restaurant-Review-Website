$(document).ready(function (){

    var getProfile = new XMLHttpRequest();

    getProfile.open("POST", "/accountinfo", true);
    getProfile.setRequestHeader("Content-Type", "application/json");
    getProfile.onload = function () {
        var profile = JSON.parse(getProfile.responseText);
        console.log(getProfile.responseText);
        member_profile_picture = profile[0].member_profile_picture;
        member_email = profile[0].member_email;
        member_address = profile[0].member_address;
        member_postal_code = profile[0].member_postal_code;
        member_phone_number = profile[0].member_phone_number;
        member_password = profile[0].member_password;
        //member_profile_picture = profile[0].member_profile_picture;
        document.getElementById('member_email').value=member_email;
        document.getElementById('member_address').value=member_address;
        document.getElementById('member_postal_code').value=member_postal_code;
        document.getElementById('member_phone_number').value=member_phone_number;
        document.getElementById('member_password').value=member_password;
        document.getElementById('target').src=member_profile_picture;
    }

    var payload = {token: token}
    getProfile.send(JSON.stringify(payload));
})