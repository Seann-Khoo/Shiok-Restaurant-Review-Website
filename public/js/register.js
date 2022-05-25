function encode() {

    var selectedfile = document.getElementById("myinput").files;
    if (selectedfile.length > 0){
        var imageFile = selectedfile[0]
        var fileReader = new FileReader();
        fileReader.onload = function(fileLoadedEvent) {
            member_profile_picture = fileLoadedEvent.target.result;
            document.getElementById('target').src = member_profile_picture;
        }
        fileReader.readAsDataURL(imageFile);
    }
}

function registerMe() {

    var registerUser = new XMLHttpRequest();

    registerUser.open("POST", "/addnewaccount", true);
    registerUser.setRequestHeader("Content-Type", "application/json");
    registerUser.onload = function () {

        $('#registerModal').modal('hide');
        $('#successModal').modal('show');
    }

    var member_first_name = document.getElementById("member_first_name").value;
    var member_last_name = document.getElementById("member_last_name").value;
    var member_gender = document.getElementById("member_gender").value;
    var member_email = document.getElementById("member_email").value;
    var member_address = document.getElementById("member_address").value;
    var member_postal_code = document.getElementById("member_postal_code").value;
    var member_phone_number = document.getElementById("member_phone_number").value;
    var register_username = document.getElementById("register_username").value;
    var register_password = document.getElementById("register_password").value;
    var payload = { member_first_name: member_first_name, member_last_name: member_last_name, member_profile_picture: member_profile_picture, member_gender: member_gender, member_email: member_email, member_address: member_address, member_postal_code: member_postal_code, member_phone_number: member_phone_number, member_username: register_username, member_password: register_password }
    registerUser.send(JSON.stringify(payload));
}