function sendEmail() {

    var emailUser = new XMLHttpRequest();

    emailUser.open("POST", "/email", true);
    emailUser.setRequestHeader("Content-Type", "application/json");
    emailUser.onload = function () {

        var token = JSON.parse(emailUser.responseText);
        console.log(token.result);
        if (token.result == "success"){
            $('#successModal').modal('show');
        }else{
            $('#failModal').modal('show');
        }
    }

    var email = document.getElementById("email").value;
    var feedback = document.getElementById("feedback").value;
    var payload = { email: email, feedback: feedback }
    emailUser.send(JSON.stringify(payload));
}