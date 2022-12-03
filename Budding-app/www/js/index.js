$("#intro").hide();
$("#main-view").show();
$("#splash-body").hide();
$("#selectors").show();

// circleLoadingAnimation();
// function circleLoadingAnimation() {
//     x=1
//     while (x != 6) {
//         y = 0.1;
//         while (y <= 1) {
//             updateOpacity();
//         }
//         x++;
//     }
//     if (x = 6) {
//         $("#splash-body").hide();
//         $("#main-body").show();
//         console.log("Finished loading. Main page showing.")
//     }
//     function updateOpacity() {
//         y = y+0.1;
//         console.log("Circle " + x + "|" + y);
//         $("#circle" + x).css("filter", "opacity(" + y + ")");
//     }
// }
    



x = 0;
var i = 0;
var z = 0;

//https://www.elated.com/nested-arrays-in-javascript/#:~:text=To%20access%20the%20elements%20of,element%20of%20the%20pets%20array.
var pets = new Array ( );
pets[0] = new Array ( "Jambo", "Cat","Orange Tabby", 60, "Studying");
pets[1] = new Array ( "Bacon", "Dog","Bichon Shih-tzu", 120, "Gym");
pets[2] = new Array ( "Spot", "Dog","Dalmation", 130, "Reading");
pets[3] = new Array ( "Red", "Cat","Tuxedo", 90, "Cleaning");
pets[4] = new Array ( "Duke", "Dog","Mastiff", 360, "Eating");
pets[5] = new Array ( "Nearo", "Dog","Burmese Mountain Dog", 240, "Meditating");
var length = Object.keys(pets).length;


init();

$(".item1").click(function(event){
    i = event.target.id;
    updatePetInHTML()
});


$("button").click(function(event) {//FORWARD & BACK BUTTONS
    if(event.target.id == "forward") {
    if(i < length-1 ) {i++;}else if(i = length ) {i = 0;}
        updatePetInHTML();
    }
    if(event.target.id == "backward") {
        if(i > 0) {i--;}else if(i == 0 ){i = length - 1;}
        updatePetInHTML();
    }
});




function init() {
    for(let z = 0; z < length; z++) {
        $("#location-group").append("<button class='item1' id='"+z+"'>"+pets[z][0]+"</button>")
    }
}

function updatePetInHTML() {
    console.log(i)
        $("#pet-name").html(pets[i][0]);
        $("#pet-type").html(pets[i][1]);
        $("#pet-breed").html(pets[i][2]);
        $("#pet-timer").html(pets[i][3]);
        $("#pet-activity").html(pets[i][4]);
}


