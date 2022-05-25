function getRestaurantData() {
    var request = new XMLHttpRequest();
    request.open('GET', restaurant_url, true);

    request.onload = function () {
        restaurant_array = JSON.parse(request.responseText);
        fetchReviews();
        displayRestaurants(category);
        displayAllRestaurants();
    };
    request.send();
}

function displayRestaurantSearch(category) {
    var table = document.getElementById("restaurantsTable");
    var restaurantCount = 0;
    var message = "";

    table.innerHTML = "";
    totalRestaurants = restaurant_array.length;
    for (var count = 0; count < totalRestaurants; count++) {
        if (document.getElementById("search_input").value = restaurant_array[count].restaurant_name) {
            var restaurant_cover_image = restaurant_array[count].restaurant_cover_image;
            var restaurant_name = restaurant_array[count].restaurant_name;
            var restaurant_cuisine = restaurant_array[count].restaurant_cuisine;
            var restaurant_region = restaurant_array[count].restaurant_region;
            var cell = '<div id="products" class="row view-group">\
             <div class="col-md-9" style="left:30px; top:20px;">\
                        <div class="thumbnail card" style="background-color: #ffe59e;">\
                            <div class="img-event">\
                                <img src='+ restaurant_cover_image + ' / width="268" height="158" >\
                            </div>\
                            <div class="caption card-body">\
                                <h5 class="group card-title inner list-group-item-heading text-center" style="height: 30px;">\
                                   '+ restaurant_name + ' </h5> \
                            </div> \
                            <div class="caption card-body">\
                                <h6 class="group card-title inner list-group-item-heading text-center" style="height: 10px;">\
                                    '+ restaurant_cuisine + ' Cuisine</h6>\
                                <h6 class="group card-title inner list-group-item-heading text-center" style="height: 10px;">\
                                    '+ restaurant_region + '</h6>\
                                    </div>\
                                    <div class="container"> \
                                    <button href="#" data-toggle="modal" data-target="#restaurantModal" item="' + count + '" type="button" class="btn btn-warning" onClick="showRestaurantDetails(this)" >Details</button> \
                                    <button href="#" data-toggle="modal" data-target="#commentModal" item="' + count + '" type="button" class="btn btn-warning" onClick="showRestaurantReviews(this)" >Reviews</button> \
                                    <button href="#" data-toggle="modal" data-target="#mapModal" item="' + count + '" type="button" class="btn btn-warning" onClick="showMap(this)" >Locate</button> \
                                    <br> \
                                    <br>\
                            </div>';
            table.insertAdjacentHTML('beforeend', cell);
            restaurantCount++;
        }
    }
    message = "Displaying All Restaurants for Search Result: " + category;
    document.getElementById("summary").textContent = message;
}

function displayAllRestaurants() {
    var table = document.getElementById("restaurantsTable");
    var restaurantCount = 0;
    var message = "";

    table.innerHTML = "";
    totalRestaurants = restaurant_array.length;
    for (var count = 0; count < totalRestaurants; count++) {

        var restaurant_cover_image = restaurant_array[count].restaurant_cover_image;
        var restaurant_name = restaurant_array[count].restaurant_name;
        var restaurant_cuisine = restaurant_array[count].restaurant_cuisine;
        var restaurant_region = restaurant_array[count].restaurant_region;
        var cell = '<div id="products" class="row view-group">\
             <div class="col-md-9" style="left:30px; top:20px;">\
                        <div class="thumbnail card" style="background-color: #ffe59e;">\
                            <div class="img-event">\
                                <img src='+ restaurant_cover_image + ' / width="268" height="158" >\
                            </div>\
                            <div class="caption card-body">\
                                <h5 class="group card-title inner list-group-item-heading text-center" style="height: 30px;">\
                                   '+ restaurant_name + ' </h5> \
                            </div> \
                            <div class="caption card-body">\
                                <h6 class="group card-title inner list-group-item-heading text-center" style="height: 10px;">\
                                    '+ restaurant_cuisine + ' Cuisine</h6>\
                                <h6 class="group card-title inner list-group-item-heading text-center" style="height: 10px;">\
                                    '+ restaurant_region + '</h6>\
                                    </div>\
                                    <div class="container"> \
                                    <button href="#" data-toggle="modal" data-target="#restaurantModal" item="' + count + '" type="button" class="btn btn-warning" onClick="showRestaurantDetails(this)" >Details</button> \
                                    <button href="#" data-toggle="modal" data-target="#commentModal" item="' + count + '" type="button" class="btn btn-warning" onClick="showRestaurantReviews(this)" >Reviews</button> \
                                    <button href="#" data-toggle="modal" data-target="#mapModal" item="' + count + '" type="button" class="btn btn-warning" onClick="showMap(this)" >Locate</button> \
                                    <br> \
                                    <br>\
                            </div>';
        table.insertAdjacentHTML('beforeend', cell);
        restaurantCount++;

    }
    message = "Displaying All " + restaurantCount + " Restaurants";
    document.getElementById("summary").textContent = message;
    document.getElementById("summary").style.color = "#ffffff";
    document.getElementById("parent").textContent = "";
}

function displayRestaurants(category) {
    var table = document.getElementById("restaurantsTable");
    var restaurantCount = 0;
    var message = "";

    table.innerHTML = "";
    totalRestaurants = restaurant_array.length;
    for (var count = 0; count < totalRestaurants; count++) {
        if (restaurant_array[count].restaurant_cuisine == category) {
            var restaurant_cover_image = restaurant_array[count].restaurant_cover_image;
            var restaurant_name = restaurant_array[count].restaurant_name;
            var restaurant_region = restaurant_array[count].restaurant_region;
            var cell = '<div id="products" class="row view-group">\
            <div class="col-md-9" style="left:30px; top:20px;">\
                       <div class="thumbnail card" style="background-color: #ffe59e;">\
                           <div class="img-event">\
                               <img src='+ restaurant_cover_image + ' / width="268" height="158" >\
                           </div>\
                           <div class="caption card-body">\
                               <h5 class="group card-title inner list-group-item-heading text-center" style="height: 30px;">\
                                  '+ restaurant_name + ' </h5> \
                           </div> \
                           <div class="caption card-body">\
                               <h6 class="group card-title inner list-group-item-heading text-center" style="height: 10px;">\
                                   '+ restaurant_region + '</h6>\
                                   </div>\
                                   <div class="container"> \
                                   <button href="#" data-toggle="modal" data-target="#restaurantModal" item="' + count + '" type="button" class="btn btn-warning" onClick="showRestaurantDetails(this)" >Details</button> \
                                   <button href="#" data-toggle="modal" data-target="#commentModal" item="' + count + '" type="button" class="btn btn-warning" onClick="showRestaurantReviews(this)" >Reviews</button> \
                                   <button href="#" data-toggle="modal" data-target="#mapModal" item="' + count + '" type="button" class="btn btn-warning" onClick="showMap(this)" >Locate</button> \
                                   <br> \
                                   <br>\
                           </div>';
            table.insertAdjacentHTML('beforeend', cell);
            restaurantCount++;
        }
    }
    message = "Displaying " + restaurantCount + " Restaurants for " + category + " Cuisine";
    document.getElementById("summary").textContent = message;
    document.getElementById("summary").style.color = "#ffffff";
    document.getElementById("parent").textContent = "";
}

function listKoreanFood() {
    category = "Korean";
    displayRestaurants(category);
    document.getElementById("koreanFood").classList.remove("active");
    document.getElementById("japaneseFood").classList.remove("active");
    document.getElementById("localfareFood").classList.remove("active");
    document.getElementById("indonesianFood").classList.remove("active");
    document.getElementById("chineseFood").classList.remove("active");
    document.getElementById("westernFood").classList.remove("active");
    document.getElementById("germanFood").classList.remove("active");
    document.getElementById("asianfusionFood").classList.remove("active");
    document.getElementById("vietnameseFood").classList.remove("active");
    document.getElementById("southindianFood").classList.remove("active");
}

function listWesternFood() {
    category = "Western";
    displayRestaurants(category);
    document.getElementById("westernFood").classList.remove("active");
    document.getElementById("japaneseFood").classList.remove("active");
    document.getElementById("localfareFood").classList.remove("active");
    document.getElementById("indonesianFood").classList.remove("active");
    document.getElementById("chineseFood").classList.remove("active");
    document.getElementById("koreanFood").classList.remove("active");
    document.getElementById("germanFood").classList.remove("active");
    document.getElementById("asianfusionFood").classList.remove("active");
    document.getElementById("vietnameseFood").classList.remove("active");
    document.getElementById("southindianFood").classList.remove("active");
}


function listJapaneseFood() {
    category = "Japanese";
    displayRestaurants(category);
    document.getElementById("japaneseFood").classList.remove("active");
    document.getElementById("westernFood").classList.remove("active");
    document.getElementById("localfareFood").classList.remove("active");
    document.getElementById("indonesianFood").classList.remove("active");
    document.getElementById("chineseFood").classList.remove("active");
    document.getElementById("koreanFood").classList.remove("active");
    document.getElementById("germanFood").classList.remove("active");
    document.getElementById("asianfusionFood").classList.remove("active");
    document.getElementById("vietnameseFood").classList.remove("active");
    document.getElementById("southindianFood").classList.remove("active");
}


function listLocalFare() {
    category = "Local Fare";
    displayRestaurants(category);
    document.getElementById("localfareFood").classList.remove("active");
    document.getElementById("westernFood").classList.remove("active");
    document.getElementById("chineseFood").classList.remove("active");
    document.getElementById("indonesianFood").classList.remove("active");
    document.getElementById("japaneseFood").classList.remove("active");
    document.getElementById("koreanFood").classList.remove("active");
    document.getElementById("germanFood").classList.remove("active");
    document.getElementById("asianfusionFood").classList.remove("active");
    document.getElementById("vietnameseFood").classList.remove("active");
    document.getElementById("southindianFood").classList.remove("active");
}


function listChineseFood() {
    category = "Chinese";
    displayRestaurants(category);
    document.getElementById("chineseFood").classList.remove("active");
    document.getElementById("westernFood").classList.remove("active");
    document.getElementById("localfareFood").classList.remove("active");
    document.getElementById("indonesianFood").classList.remove("active");
    document.getElementById("japaneseFood").classList.remove("active");
    document.getElementById("koreanFood").classList.remove("active");
    document.getElementById("germanFood").classList.remove("active");
    document.getElementById("asianfusionFood").classList.remove("active");
    document.getElementById("vietnameseFood").classList.remove("active");
    document.getElementById("southindianFood").classList.remove("active");
}

function listIndonesianFood() {
    category = "Indonesian";
    displayRestaurants(category);
    document.getElementById("indonesianFood").classList.remove("active");
    document.getElementById("westernFood").classList.remove("active");
    document.getElementById("localfareFood").classList.remove("active");
    document.getElementById("japaneseFood").classList.remove("active");
    document.getElementById("chineseFood").classList.remove("active");
    document.getElementById("koreanFood").classList.remove("active");
    document.getElementById("germanFood").classList.remove("active");
    document.getElementById("asianfusionFood").classList.remove("active");
    document.getElementById("vietnameseFood").classList.remove("active");
    document.getElementById("southindianFood").classList.remove("active");
}

function listVietnameseFood() {
    category = "Vietnamese";
    displayRestaurants(category);
    document.getElementById("vietnameseFood").classList.remove("active");
    document.getElementById("westernFood").classList.remove("active");
    document.getElementById("localfareFood").classList.remove("active");
    document.getElementById("japaneseFood").classList.remove("active");
    document.getElementById("chineseFood").classList.remove("active");
    document.getElementById("koreanFood").classList.remove("active");
    document.getElementById("germanFood").classList.remove("active");
    document.getElementById("asianfusionFood").classList.remove("active");
    document.getElementById("indonesianFood").classList.remove("active");
    document.getElementById("southindianFood").classList.remove("active");
}

function listAsianFusionFood() {
    category = "Asian Fusion";
    displayRestaurants(category);
    document.getElementById("asianfusionFood").classList.remove("active");
    document.getElementById("westernFood").classList.remove("active");
    document.getElementById("localfareFood").classList.remove("active");
    document.getElementById("japaneseFood").classList.remove("active");
    document.getElementById("chineseFood").classList.remove("active");
    document.getElementById("koreanFood").classList.remove("active");
    document.getElementById("germanFood").classList.remove("active");
    document.getElementById("indonesianFood").classList.remove("active");
    document.getElementById("vietnameseFood").classList.remove("active");
    document.getElementById("southindianFood").classList.remove("active");
}

function listGermanFood() {
    category = "German";
    displayRestaurants(category);
    document.getElementById("germanFood").classList.remove("active");
    document.getElementById("westernFood").classList.remove("active");
    document.getElementById("localfareFood").classList.remove("active");
    document.getElementById("japaneseFood").classList.remove("active");
    document.getElementById("chineseFood").classList.remove("active");
    document.getElementById("koreanFood").classList.remove("active");
    document.getElementById("indonesianFood").classList.remove("active");
    document.getElementById("asianfusionFood").classList.remove("active");
    document.getElementById("vietnameseFood").classList.remove("active");
    document.getElementById("southindianFood").classList.remove("active");
}

function listSouthIndianFood() {
    category = "South Indian";
    displayRestaurants(category);
    document.getElementById("southindianFood").classList.remove("active");
    document.getElementById("westernFood").classList.remove("active");
    document.getElementById("localfareFood").classList.remove("active");
    document.getElementById("japaneseFood").classList.remove("active");
    document.getElementById("chineseFood").classList.remove("active");
    document.getElementById("koreanFood").classList.remove("active");
    document.getElementById("germanFood").classList.remove("active");
    document.getElementById("asianfusionFood").classList.remove("active");
    document.getElementById("vietnameseFood").classList.remove("active");
    document.getElementById("indonesianFood").classList.remove("active");
}

function showRestaurantDetails(element) {
    var item = element.getAttribute("item");
    currentIndex = item;
    document.getElementById("restaurant_name").textContent = restaurant_array[item].restaurant_name;
    document.getElementById("restaurant_cover_image").src = restaurant_array[item].restaurant_cover_image;
    document.getElementById("restaurant_cuisine").textContent = restaurant_array[item].restaurant_cuisine;
    document.getElementById("restaurant_region").textContent = restaurant_array[item].restaurant_region;
    document.getElementById("restaurant_price_range").textContent = restaurant_array[item].restaurant_price_range;
    document.getElementById("restaurant_halal").textContent = restaurant_array[item].restaurant_halal;
    document.getElementById("restaurant_address").textContent = restaurant_array[item].restaurant_address;
    document.getElementById("restaurant_postal_code").textContent = restaurant_array[item].restaurant_postal_code;
    document.getElementById("restaurant_description").textContent = restaurant_array[item].restaurant_description;
    document.getElementById("restaurant_operating_hours").textContent = restaurant_array[item].restaurant_operating_hours;
    document.getElementById("restaurant_phone_number").textContent = restaurant_array[item].restaurant_phone_number;
    document.getElementById("restaurant_overall_rating").textContent = restaurant_array[item].restaurant_overall_rating;
}

function viewWebsite() {
    window.open(restaurant_array[currentIndex].restaurant_website, "_");
}

var mapicon = "images/ricebowl_map.png"

function showMap(element) {
    var item = element.getAttribute("item");
    currentIndex = item;
    var locations = [restaurant_array[item].restaurant_name, restaurant_array[item].restaurant_address, restaurant_array[item].restaurant_address_latitude, restaurant_array[item].restaurant_address_longitude];
    map = new google.maps.Map(document.getElementById("map"), { center: { lat: 1.8, lng: 110.9 }, zoom: 4 });
    var infowindow = new google.maps.InfoWindow();
    var marker, i;
    var markers = [];

    marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[2], locations[3]),
        map: map,
        icon: {
            url: mapicon
        }
    });

    markers.push(marker);
    google.maps.event.addListener(marker, 'click', (function (marker, i) {
        return function () {
            infowindow.setContent("Restaurant Name: " + locations[0] + "<div></div>" + "<b>" + "Restaurant Address: " + locations[1] + "</b>");
            infowindow.open(map, marker);
        }
    })(marker, i));

    navigator.geolocation.getCurrentPosition(
        (position) => {
            const pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            }
            map.setCenter(pos);
            map.setZoom(12);
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(pos.lat, pos.lng),
                map: map,
                icon: {
                    url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
                }
            })

            markers.push(marker);
            google.maps.event.addListener(marker, 'click', (function (marker, i) {
                return function () {
                    infowindow.setContent("Your Current Location");
                    infowindow.open(map, marker);
                }
            })(marker, i));
        }
    )
}

function searchRestaurant() {
    if (document.getElementById("search_input").value == "") {
        window.location.href = "index.html";
        location.reload();
    }
    if (document.getElementById("search_input").value != "") {
        var search = document.getElementById("search_input").value;
        var search2 = new XMLHttpRequest();

        search2.open("POST", "/search", true);
        search2.setRequestHeader("Content-Type", "application/json");
        search2.onload = function () {
            restaurant_array = JSON.parse(search2.responseText)
            displayRestaurantSearch(search);

            console.log(search);
        }
        var payload = { search: search }
        search2.send(JSON.stringify(payload));
    }
}