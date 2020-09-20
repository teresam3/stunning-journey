$(document).ready()

var nav = $("#routes");

nav.on("scroll", (function() {    
        nav.addClass("white")
        nav.removeClass("red")
        console.log("it works")
}));
     