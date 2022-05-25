function fetchReviews() {
    var request = new XMLHttpRequest();

    request.open('GET', review_url, true);

    //This command starts the calling of the comments api
    request.onload = function() {
    //get all the comments records into our comments array
    review_array = JSON.parse(request.responseText);
    };
    request.send();
}

function newReview() {
    //Initialise each HTML input elements in the modal window with default value.
        rating = 0;
        document.getElementById("customer_comments").value = "";
        document.getElementById("customer_username").value = "";
    }
// Submit or send the new comment to the server to be added.
function addReview() {
    var comment = new Object();
    comment.restaurantId = restaurant_array[currentIndex].restaurant_id; // Movie ID is required by server to create new comment 
    comment.restaurant_name = restaurant_array[currentIndex].restaurant_name; // Movie title is required by server to create new comment
    comment.memberId = document.getElementById("memberId").value; // Value from HTML input text
    comment.customer_username = document.getElementById("customer_username").value; // Value from HTML input text
    comment.customer_comments = document.getElementById("customer_comments").value; // Value from HTML input text
    comment.comment_datePosted = null; // Change the datePosted to null instead of taking the timestamp on the client side;
    comment.customer_rating = rating;

    var postReview = new XMLHttpRequest(); // new HttpRequest instance to send comment

    postReview.open("POST", review_url, true); //Use the HTTP POST method to send data to server

    postReview.setRequestHeader("Content-Type", "application/json");
    postReview.onload = function() {
        fetchReviews();  // fetch all comments again so that the web page can have updated comments.   
        $('#successModal').modal('show');  
    };
// Convert the data in Comment object to JSON format before sending to the server.
    postReview.send(JSON.stringify(comment)); 
}

//This function allows the user to mouse hover the black and white popcorn
//so that it will turn to a colored version when hovered
function rateIt(element) {
    var num = element.getAttribute("value");
    var classname = element.getAttribute("class");
    var popcorns = document.getElementsByClassName(classname);
    var classTarget = "." + classname;

    // This is another way of writing 'for' loop, which initialises the 
    // popcorn images to use black and white.
    for (let popcorn of popcorns){
        popcorn.setAttribute("src", popcornBWImage);
    }
    changePopcornImage(num, classTarget);
}

// This function sets the rating and coloured images based on the value of the image tag when  
// the mouse cursor hovers over the popcorn image.
function changePopcornImage(num, classTarget) {
    switch (eval(num)) {
        case 1:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", popcornImage);
            rating = 1;
            break;
        case 2:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", popcornImage);
            rating = 2;
            break;
        case 3:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", popcornImage);
            rating = 3;
            break;
        case 4:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='4']").setAttribute("src", popcornImage);
            rating = 4;
            break;
        case 5:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='4']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='5']").setAttribute("src", popcornImage);
            rating = 5;
            break;
    }
}


//This function will hide the existing modal and present a modal with the selected comment
//so that the user can attempt to change the username, rating or movie review
function editReview(element) {
    var item = element.getAttribute("item");

    currentIndex = item;

    document.getElementById("editusername").value = review_array[item].customer_username;
    document.getElementById("editcustomercomments").value = review_array[item].customer_comments;
    displayColorPopcorn('editpop', review_array[item].customer_rating);
}

//This function displayS the correct number of colored popcorn
//based on the movie rating that is given in the user comment
function displayColorPopcorn(classname, num) {
    var pop = document.getElementsByClassName(classname);
    var classTarget = "." + classname;
    for (let p of pop) {
    p.setAttribute("src", popcornBWImage);
    }
    changePopcornImage(num, classTarget);
}

//This function sends the Comment data to the server for updating
function updateReview() {
    var response = confirm("Are you sure you want to update this comment?");
    if (response == true) {
    //var reviewModal = document.getElementById("editReviewModal");
    var edit_review_url = review_url + "/" + review_array[currentIndex].comment_id;
    var updateReview = new XMLHttpRequest(); // new HttpRequest instance to send request to server
    //reviewModal.hide();
    updateReview.open("PUT", edit_review_url, true); //The HTTP method called 'PUT' is used here as we are updating data
    updateReview.setRequestHeader("Content-Type", "application/json");
    review_array[currentIndex].customer_username = document.getElementById("editusername").value;
    review_array[currentIndex].customer_comments = document.getElementById("editcustomercomments").value;
    review_array[currentIndex].customer_rating = rating;
    updateReview.onload = function() {
    fetchReviews();
    $('#successModal').modal('show'); 
    };
    updateReview.send(JSON.stringify(review_array[currentIndex]));
    }
}
    
//This function deletes the selected comment in a specific movie
function deleteReview(element) {
    var response = confirm("Are you sure you want to delete this comment?");

    if (response == true) {
        var item = element.getAttribute("item"); //get the current item
        var delete_review_url = review_url + "/" + review_array[item].comment_id;
        var eraseReview = new XMLHttpRequest();
        eraseReview.open("DELETE", delete_review_url, true);
        eraseReview.onload = function() {
            fetchReviews();
            $('#successModal').modal('show'); 
        };
        eraseReview.send();
    }
}


//This function is to display all the comments of that movie
//whenever the user click on the "comment" button
function showRestaurantReviews(element) {
    document.getElementById("emptyReview").innerHTML = "No Reviews Yet. Be the First to Write a Review.";
    var item = element.getAttribute("item");
    currentIndex = item;

    document.getElementById("review").textContent = "All Reviews for " + restaurant_array[item].restaurant_name;
    document.getElementById("commentBody").textContent = "";

    for (var i = 0; i < review_array.length; i++) {
        if (review_array[i].restaurant_name == restaurant_array[item].restaurant_name) {
            document.getElementById("emptyReview").innerHTML = "";
            selectedRestaurantId = restaurant_array[item].restaurant_id;
            star = "";
            var html = '<div class="text-center" style="width:100%;">                                                           \
                            <div class="card">                                                                                  \
                                <div class="card-body">                                                                         \
                                    <p class="card-text" id="rating' + i + '">' + review_array[i].customer_comments + "</p>               \
                                    <small>Posted by "+ review_array[i].customer_username + " on " + review_array[i].comment_datePosted +"</small>   \
                                </div>                                                                                          \
                            </div>                                                                                              \
                        </div>";
            document.getElementById("commentBody").insertAdjacentHTML('beforeend', html);

            var star = "";
            for (var j = 0; j < review_array[i].customer_rating; j++) {
                console.log(i);
                star += "<img src='images/ricebowl.png' style='width:50px' />";
            }
            star += "<img src='images/delete.png' class='edit' data-dismiss='modal' item='" + i + "' onClick='deleteReview(this)' />";
            star += "<img src='images/edit.png' class='edit' data-toggle='modal' data-target='#editCommentModal' data-dismiss='modal' item='"
		 + i + "' onClick='editReview(this)' />";
            document.getElementById("rating" + i).insertAdjacentHTML('beforebegin', star + "<br/>");
        }
    }
}
