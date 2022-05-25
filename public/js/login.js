function loginMe() {

    var loginUser = new XMLHttpRequest();

    loginUser.open("POST", "/userlogin", true);
    loginUser.setRequestHeader("Content-Type", "application/json");
    loginUser.onload = function () {

        $('#loginModal').modal('hide');

        var token = JSON.parse(loginUser.responseText);
        console.log(token.result);
        if (token.result != false){
            $('#successModal').modal('show');
            document.getElementById("registerMenu").style.display="none";
            document.getElementById("loginMenu").style.display="none";
            document.getElementById("logoutMenu").style.display="block";
            document.getElementById("editMenu").style.display="block";
            sessionStorage.setItem("token", token.result);
        }else{
            $('#failModal').modal('show');
        }
    }

    var member_username = document.getElementById("member_username").value;
    var member_password = document.getElementById("member_password").value;
    var payload = { member_username: member_username, member_password: member_password }
    loginUser.send(JSON.stringify(payload));
}