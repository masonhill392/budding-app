console.log("js connected");
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


$("#main-view").click(function(){
    console.log("toggled")
    $("#selectors").toggle();
    getVariables();
    console.log("1")
});


var pname;
var ptype;
var plocation;
var pcoordinates;
var ptimer;

// function pet1(petName, petType, petLocation, petCoordinates, petTimer) {

//     this.petName = pname;
//     this.petType = ptype;
//     this.petLocation = plocation;
//     this.petCoordinates = pcoordinates;
//     this.petTimer = ptimer;
//     return;
// }


function getVariables() {
    currentpet = pet1;
    currentpet.petName = pname;
    currentpet.petType = ptype;
    currentpet.petLocation = plocation;
    currentpet.petCoordinates = pcoordinates;
    currentpet.petTimer = ptimer;
    $("#pet-name").html(pname)
    console.log(pname);
    console.log("setDisplayPet ran")
    return;
}

function Pet(petName, petType) {
    this.petName = pname;
    this.petType = ptype;
}
const myPet = new Pet("Catty", "Cat")

var locations = [
    "home",
    "gym",
    "library"
]

var pet1 = {
    petName: "Jambo",
    petType: "Cat",
    petLocation: "home",
    petCoordinates: "test",
    petTimer: "60"
}

var pet2 = {
    petName: "Bacon",
    petType: "Dog",
    petLocation: "gym",
    petCoordinates: "test",
    petTimer: "120"
}

var pet3 = {
    petName: "Prick",
    petType: "Toucan",
    petLocation: "Library",
    petCoordinates: "test" ,
    petTimer: "240"
}