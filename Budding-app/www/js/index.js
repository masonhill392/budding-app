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
    
// $("#see-your-buddies").click(function() {

//     console.log("see-your-buddies clicked");
//     $("#intro-section").hide()
//     $("#main-view").show()

// });


var firstname = "null";
var lastname = "null";
var age = "0";
var eye = "red";


// array
// const pets = ["person1", "person2"];

//https://www.elated.com/nested-arrays-in-javascript/#:~:text=To%20access%20the%20elements%20of,element%20of%20the%20pets%20array.




var pets = new Array ( );
//------------------( Name,  Animal type, Animal breed, Timer, Activity)
pets[0] = new Array ( "Jambo", "Cat","Orange Tabby", 60, "Studying");
pets[1] = new Array ( "Bacon", "Dog","Bichon Shih-tzu", 120, "Gym");
console.log( pets[0][0] + " is an " + pets[0][2] +" "+ pets[0][1] + ". " + pets[0][0] +" enjoys "  + pets[0][4] + " with you every " + pets[0][3] + " seconds.");

x = 0;
var i = 0;
var z = 0;


$("#baconbutton").click(function() {

    var length = Object.keys(pets).length;

    if(i < length ) {//PET TARGETER
        i++;
    }
    if(i >= length) {
        i = 0;
    }
    updatePetInHTML();
});

function updatePetInHTML() {
    console.log(z);
        $("#pet-name").html(pets[i][0]);
        $("#pet-type").html(pets[i][1]);
        $("#pet-breed").html(pets[i][2]);
        $("#pet-timer").html(pets[i][3]);
        $("#pet-activity").html(pets[i][4]);
}




    // $("#pet-name").html(pets[0][0]);
    // var test = pets[x][0];
    // console.log(test);