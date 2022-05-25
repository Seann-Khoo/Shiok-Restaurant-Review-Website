function deleteMe() {

    var deleteProfile = new XMLHttpRequest();

    deleteProfile.open("DELETE", "/delete", true);
    deleteProfile.setRequestHeader("Content-Type", "application/json");
    deleteProfile.onload = function () {
        JSON.parse(deleteProfile.responseText);
        console.log(deleteProfile.responseText);
        $('#registerMenu').show();
        $('#loginMenu').show();
        $('#logoutMenu').hide();
        $('#editMenu').hide();
        sessionStorage.removeItem("token");
        $('#successModal').modal('show');
        window.location.href="index.html";
    }

    var payload = { token: token }
    deleteProfile.send(JSON.stringify(payload));
}