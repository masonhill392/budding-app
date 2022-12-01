console.log("js connected");
circleLoadingAnimation();










function circleLoadingAnimation() {
    x=1
    while (x != 6) {
        y = 0.1;

        while (y <= 1) {
            
            updateOpacity();

        }
        x++;
    }
    if (x = 6) {
        $("#splash-body").hide();
        $("#main-body").show();
        console.log("Finished loading. Main page showing.")
    }



    function updateOpacity() {
        y = y+0.1;
        console.log("Circle " + x + "|" + y);
        $("#circle" + x).css("filter", "opacity(" + y + ")");
    }
}
    


