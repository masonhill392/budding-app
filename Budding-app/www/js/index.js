
// const { $ } = require("./framework7-bundle.min");
//INITIALIZE
console.log("js connect")
$("#splash-body").hide();
$("#intro").hide();
$("#main-view").show();
$("#overlay").hide();
$("#petbutton").hide();
$("#postCooldown").show();
$("#cooldown").hide();
$("#postPostCooldown").hide();
$("#getCooldownPrompt").hide();
$("#petHappyPrompt").show();
$("#cooldownTimeRemaining").hide();
$("#petStats").hide();
//VARIABLES
x = 0;
var i = 0;
var z = 0;
var lat = 0;
var long = 0;
var petsExist = 0;
var totalMinutes = 0;
var happiness = 0

//ARRAYS
//https://www.elated.com/nested-arrays-in-javascript/#:~:text=To%20access%20the%20elements%20of,element%20of%20the%20pets%20array.

var pets = new Array();
// pets[0] = new Array("Jambo", "Cat", "Orange Tabby", 0.1, "Studying", "Lat", "Long", "Home", "sad");
// pets[1] = new Array("Bacon", "Dog", "Bichon Shih-tzu", .4, "Gym", "Lat3", "Long2");
// pets[2] = new Array("Spot", "Dog", "Dalmation", .3, "Reading", "La4t", "Lon6g");
// pets[3] = new Array ( "Red", "Cat","Tuxedo", 42, "Cleaning", "L7at", "L0ong");
// pets[4] = new Array ( "Duke", "Dog","Mastiff", 15, "Eating", "Lt", "Lo-ng");
// pets[5] = new Array ( "Nearo", "Dog","Burmese Mountain Dog", 6, "Meditating", "L4at", "Long");
var length = Object.keys(pets).length;

//GEOLOCATION HANDLER
//taken from professors application/done in class | cordova-geolocation-plugin
document.addEventListener('deviceready', onDeviceReady, false);
init();
function onDeviceReady() {
    console.log("device ready")
    getLocation();
}

function getLocation() {
    console.log('getting location...')
    var geoOpts = {
        enableHighAccuracy: true
    }
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOpts);
    function geoSuccess(position) {
        console.log(position);
        lat = position.coords.latitude
        long = position.coords.longitude
        $("#position-header").html(lat + " | " + long)
        // $("#").append(lat + "," + long) --------Insert results into HTML
    }
    locationCheck();
    function geoError(message) {
        alert(message.message);
    }
    if (currentPos == petPos) {
        console.log("Location Match! " + pets[i][1] + " is here!")
        $("#petbutton").show();
    } else {
        $("#petbutton").hide();
    }
    function locationCheck() {
        currentPos = lat + long;
        console.log("My current location: " + lat + long + ' = ' + currentPos)
        petPos = pets[i][5] + pets[i][6];
        console.log(currentPos + "|" + petPos);
    }
}

//FORWARD & BACK BUTTONS
$("button").on("click", function (event) {
    length = Object.keys(pets).length;

    if (event.target.id == "forward") {
        if (i < length - 1) { i++; } else if (i = length) { i = 0; }
        updatePetInHTML();
        console.log(i)
    }
    if (event.target.id == "backward") {
        if (i > 0) { i--; } else if (i == 0) { i = length - 1; }
        updatePetInHTML();
        console.log(i)
    }
});

//GRAB / UPDATE CURRENT LOCATION FOR LOCATION CHECK
$("#petLocationButton").on("click", function () {
    console.log("getLocation ran")
    getLocation();
});

//CALCULATE PET PANEL ROSTER SLOTS, GENERATE CORRESPONDING BUTTONS
function init() {
    length = Object.keys(pets).length;
    console.log(length + "=length")
    for (let z = 0; z < length; z++) {
        console.log("z = " + z + "|length = " + length);
        $("#location-group").append("<button class='item1' id='" + z + "'>" + pets[z][0] + "</button>")

    }
}

//LOAD PET FROM ARRAY INTO HTML FOR VIEWING
function updatePetInHTML() {
    console.log(i)
    $("#pet-name").html(pets[i][0] + " is " + pets[i][8]);
    $("#pet-type").html(pets[i][1]);
    $("#pet-breed").html(pets[i][2]);
    $("#pet-timer").html(pets[i][3] + " minutes");
    $("#pet-activity").html(pets[i][4]);
    $("#pet-longitude").html(pets[i][5]);
    $("#pet-latitude").html(pets[i][6]);
    $("#pet-described-location").html(pets[i][0] + " is at " + pets[i][7]);
}
//SHOW PET PANEL, HIDE OTHER PANELS
$("#petpanelbutton").on("click", function () {
    $("#selectors").toggle();
    $("#overlay").hide();
    $("#petHappyPrompt").hide();
    $("#petStats").show();

})

//SHOW 
$("#petbutton").on("click", function () {
    $("#petHappyPrompt").hide();
    $("#overlay").toggle();
    $("#selectors").hide();
    $("#doActivity").html(pets[i][4] + " with " + pets[i][0] + "!")
    $("#seconds").html(pets[i][3])
    $("#petStats").hide();
})


//SHOW NEW PET FORM, GET LOCATION DATA
$("#newPet").on("click", function () {
    $("#overlay").hide();
    $("#selectors").hide();
    $("#newPetMenu").show();
    getLocation();
    $("#petCoordsInput").append(lat + "," + long);
})

//SUBMIT NEW PET TO PET PANEL ROSTER
$("#submitNewPet").on("click", function () {
    getLocation
    $("#newPetMenu").hide();
    $("#selectors").show();
    q = Object.keys(pets).length;
    console.log(q);
    var name = document.getElementById('petNameInput').value;
    var type = document.getElementById('petTypeInput').value;
    var breed = document.getElementById('petBreedInput').value;
    var actLength = document.getElementById('petActivityInput').value;
    var act = document.getElementById('petActivityLengthInput').value;
    var describedLocation = document.getElementById('petDescribedLocationInput').value;
    var mood = window['mood' + q] = 'sad';
    pets[q] = new Array(name, type, breed, act, actLength, lat, long, describedLocation, eval("mood" + q));
    pets[q][8] = 'sad'
    console.log(pets[q]);
    $("#location-group").append("<button class='item1' id='" + q + "'>" + pets[q][0] + "</button>")
    i = q;
    updatePetInHTML()

    // SET PET CHECK TO 1
    if (pets[0][3] != 0) {
        console.log("pets now exist");
        $("#petbutton").show();
    }

    pets[q][8] = 'sad' //Set current emotion
    console.log(pets[q][8] + ": array") //Display current emotino
})


//PET SELECTOR BUTTONS -> BUTTON CORRESPONDS TO PET IN ARRAY
$("#location-group").on("click", function (event) {
    //ENCOUNTERED A DUMB ERROR HERE
    //Dynamically created elements cannot be detected by .click handler. Must be attached to something natively HTML, & use .on("click")
    console.log("clicked");
    i = event.target.id;
    console.log(i)
    updatePetInHTML()
});

//ACTIVITY TIMER
//https://www.geeksforgeeks.org/javascript-timer/
$("#startTimer").on("click", function () {
    console.log("clicked")
    secs = ((pets[i][3]) * 60)
    console.log(secs)
    $("#seconds").show()
    setTimeout(decrement, 1000)
});
function decrement() {
    if (secs >= 1) {
        secs--
        console.log(secs)
        $("#seconds").html(Math.floor(secs / 60))
        console.log("min")
        setTimeout(decrement, 1000)
    }
    if (secs == 0) {
        clearTimeout(decrement, 1000)
        console.log("cleartimeout")
        $("#seconds").hide();
        $("#minutesRemain").html("Activity finished! " + pets[i][0] + " is happy!")
        petHappinessUpdater();
    }
}
function petHappinessUpdater() {
    pets[i][8] = "happy"
    updatePetInHTML();
    console.log(length + "|" + happiness)
    for (let z = 0; z < length; z++) {
        console.log(z);
        if (pets[z][8] == 'happy') {
            console.log("True")
            happiness++
        }
    }
    if (happiness >= length) {
        console.log("All pets are happy!")
        console.log("Loading cooldown form")
        loadCooldownForm();
    } else {
        happiness = 0;
    }
}

function loadCooldownForm() {
    console.log("Cooldown form loaded");
    $("#overlay").hide();
    $("#petHappyPrompt").show();
    $("#getCooldownPrompt").show();

}


$("#cooldownSubmit").on("click", function () {
    $("#getCooldownPrompt").hide();
    var petCooldown = document.getElementById('petCooldown').value;
    secs = (petCooldown * 60 * 2)
    halftime = (secs / 2)
    $("#cooldown").show();
    $("#cooldownTimeRemaining").show();
    setTimeout(petCooldownTimer, 1000);
    console.log("petCooldown");
});

function petCooldownTimer() {
    console.log("petCooldown counting");
    console.log("halftime = " + halftime);
    if (secs >= 1) {
        secs--
        console.log(secs)
        $("#cooldownTimeRemaining").html(secs + " seconds remain");
        console.log("min")
        setTimeout(petCooldownTimer, 1000)
    }
    if (secs <= halftime) {
        $("#cooldown").hide();
        $("#postCooldown").show();
    }
    if (secs == 0) {
        clearTimeout(petCooldownTimer, 1000)
        console.log("clearcooldown")
        $("#postCooldown").hide();
        $("#postPostCooldown").show();
    }
}
$("#cooldownPetView").on("click", function () {
    $("#petHappyPrompt").toggle();
    $("#overlay").hide();
    $("#selectors").hide();
    $("#newPetMenu").hide();
    $("#petStats").hide()
});
