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

function update() {
    
    var updateUser = new XMLHttpRequest();

    updateUser.open("PUT", "/accountinfo", true);
    updateUser.setRequestHeader("Content-Type", "application/json");
    updateUser.onload = function () {

        $('#successModal').modal('show');
    }

    member_email = document.getElementById("member_email").value;
    member_address = document.getElementById("member_address").value;
    member_postal_code = document.getElementById("member_postal_code").value;
    member_phone_number = document.getElementById("member_phone_number").value;
    member_password = document.getElementById("member_password").value;
    var payload = {token:token, member_email:member_email, member_address:member_address, member_postal_code:member_postal_code, member_phone_number:member_phone_number, member_password:member_password, member_profile_picture:member_profile_picture}
    updateUser.send(JSON.stringify(payload));
}