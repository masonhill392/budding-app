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


var firstname = "null";
var lastname = "null";
var age = "0";
var eye = "red";


// array
// const pets = ["person1", "person2"];

//This is how I should set up pets & their respective properties. It is called "Nested Arrays" - arrays within arrays. Javascript objects within an array.
//pets[0][0] = Get property within the first array's ([0]) first array([0]). Output is "Tim"
//pets[0][2] = Get property within the first array's ([0]) second array([2]). Output is "cat"
//"pets" is the primary array. Within "pets", contains arrays with ID's ([0], [1]). These ID's contain properties, such as the name, breed, age, and type of pet.
//https://www.elated.com/nested-arrays-in-javascript/#:~:text=To%20access%20the%20elements%20of,element%20of%20the%20pets%20array.
var pets = new Array ( );
pets[0] = new Array ( "Tim", "Orange Tabby", " cat" );
pets[1] = new Array ( "Jasper", 12, "dog" );
console.log( pets[0][0] + " is an " + pets[0][1] + pets[0][2]); // Displays "Tim is an Orange Tabby cat"
console.log( pets[1][0] + " is a " + pets[1][1] + " year old " + pets[1][2] ); // Displays "Jasper is a 12 year old dog"




$("#main-view").click(function(){
    $("#selectors").toggle();
    // getVariables();
    // $("#main-view").after("<p>" + firstname + lastname + age + eye + "</p>");
});


$("#").click(function() {

    storePetInHTML();

});


function storePetInHTML() {

}















// var pname;
// var ptype;
// var plocation;
// var pcoordinates;
// var ptimer;



// function getVariables() {
//     currentpet = pet1;
//     currentpet.petName = pname;
//     currentpet.petType = ptype;
//     currentpet.petLocation = plocation;
//     currentpet.petCoordinates = pcoordinates;
//     currentpet.petTimer = ptimer;
//     $("#pet-name").html(pname)
//     console.log(pname);
//     console.log("setDisplayPet ran")
//     return;
// }

// function Pet(petName, petType) {
//     this.petName = pname;
//     this.petType = ptype;
// }
// const myPet = new Pet("Catty", "Cat")

// var locations = [
//     "home",
//     "gym",
//     "library"
// ]

// var pet1 = {
//     petName: "Jambo",
//     petType: "Cat",
//     petLocation: "home",
//     petCoordinates: "test",
//     petTimer: "60"
// }


// var pet2 = {
//     petName: "Bacon",
//     petType: "Dog",
//     petLocation: "gym",
//     petCoordinates: "test",
//     petTimer: "120"
// }

// var pet3 = {
//     petName: "Prick",
//     petType: "Toucan",
//     petLocation: "Library",
//     petCoordinates: "test" ,
//     petTimer: "240"
// }