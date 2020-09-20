//$(document).ready()

function onScroll() {
$(window).scroll(function() {
   $("#nav-style").removeClass("a.nav-link")
   $("#nav-style").addClass(".white")
console.log("scroll is working")
});
}

onScroll()

