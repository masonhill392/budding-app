
    $("#splash-body").hide();
    $("#intro").hide();
    $("#main-view").show();
    $("#overlay").hide();



// intro();


// function intro() {
//     $("#splash-body").show();
//     $("#intro").hide();
//     $("#main-view").hide();
//     $("#overlay").hide();
//     setInterval(showIntro, 3000);
// }
// function showIntro() {
//     $("#splash-body").hide();
//     $("#intro").show();
//     setInterval(showMainView, 5000);

// }
// function showMainView() {
//     $("#intro").hide();
//     $("#main-view").show();
// };
// $("#selectors").show();

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
pets[0] = new Array ( "Jambo", "Cat","Orange Tabby", 1, "Studying");
pets[1] = new Array ( "Bacon", "Dog","Bichon Shih-tzu", 2, "Gym");
pets[2] = new Array ( "Spot", "Dog","Dalmation", 3, "Reading");
pets[3] = new Array ( "Red", "Cat","Tuxedo", 4, "Cleaning");
pets[4] = new Array ( "Duke", "Dog","Mastiff", 5, "Eating");
pets[5] = new Array ( "Nearo", "Dog","Burmese Mountain Dog", 6, "Meditating");
var length = Object.keys(pets).length;

init();



$("button").click(function(event) {//FORWARD & BACK BUTTONS
    length = Object.keys(pets).length;

    if(event.target.id == "forward") {
    if(i < length-1 ) {i++;}else if(i = length ) {i = 0;}
        updatePetInHTML();
        console.log(i)
    }
    if(event.target.id == "backward") {
        if(i > 0) {i--;}else if(i == 0 ){i = length - 1;}
        updatePetInHTML();
        console.log(i)
    }
});

function init() {
    length = Object.keys(pets).length;
    console.log(length + "=length")
    for(let z = 0; z < length; z++) {
        console.log("z = " + z + "|length = " + length);
        $("#location-group").append("<button class='item1' id='"+z+"'>"+pets[z][0]+"</button>")
    }
    console.log("does pets[6] exist? " + pets[6]);
}

function updatePetInHTML() {
    console.log(i)
        $("#pet-name").html(pets[i][0]);
        $("#pet-type").html(pets[i][1]);
        $("#pet-breed").html(pets[i][2]);
        $("#pet-timer").html(pets[i][3] + " seconds");
        $("#pet-activity").html(pets[i][4]);
}

$("#petpanelbutton").click(function() {
    $("#selectors").toggle();
    $("#overlay").hide();
})
$("#petbutton").click(function() {
    $("#overlay").toggle();
    $("#selectors").hide();
})
$("#newPet").click(function(){
    $("#overlay").hide();
    $("#selectors").hide();
    $("#newPetMenu").show();
})
$("#submitNewPet").click(function() {
    $("#newPetMenu").hide();
    $("#selectors").show();
    q = Object.keys(pets).length;
    console.log(q);
    var name = document.getElementById('petNameInput').value;
    var type = document.getElementById('petTypeInput').value;
    var breed = document.getElementById('petBreedInput').value;
    var actLength = document.getElementById('petActivityInput').value;
    var act = document.getElementById('petActivityLengthInput').value;
    pets[q] = new Array ( name, type, breed, actLength, act);
    console.log(pets[q]);
    $("#location-group").append("<button class='item1' id='"+q+"'>"+pets[q][0]+"</button>")
    i = q;
    updatePetInHTML()





})

//ENCOUNTERED A DUMB ERROR HERE
//Dynamically created elements cannot be detected by .click handler. Must be attached to something natively HTML, & use .on("click")

$("#location-group").on("click", function(event){
    console.log("clicked");
    i = event.target.id;
    console.log(i)
    updatePetInHTML()
});
// $("#startTimer").click(function() {
//     $("#startTimer").hide();
//     $("#stopTimer").show();
//     timer = 60*pets[i][3];
//     console.log(timer)
//     setInterval(activityTimer, 300);
        
//     });

//     $("#stopTimer").click(function() {
//         $("#startTimer").show();
//         $("#stopTimer").hide();
//         clearInterval(activityTimer);
            
//         });


    
// https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown


// function activityTimer() {  
//     if (timer > 0) {
//         timer--;
//         console.log(timer)
//         $("#timerSlot").html(timer);
//     }
//     if(timer == 0) {
//         console.log(timer)
//         $("#timerSlot").html('Finished');
        
//     }
    
// }




