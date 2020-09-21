//$(document).ready()

function onScroll() {
$(window).scroll(function() {
    $("#nav-style .navbar-brand").addClass("white")
    $("#nav-style").addClass("white")
    $("a.nav-link").addClass("white")
    console.log("scroll works!")
});
}
onScroll()



