// Scroll to the top a the page
function toTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}
// Load the about me page
function loadAbtMe() {
    window.location.href = "aboutMe.html";
}
// Load the contact me page
function loadContactMe() {
    window.location.href = "contact.html";
}
// Load the media page
function loadMedia() {
    window.location.href = "media.html";
}
// Load the marine corps page (Not Created Yet)
function loadMC() {
    console.log("Loading Marine Corps page");
}
// Load the family page
function loadFam() {
    window.location.href = "family.html";
}
// Load the hobby page
function loadHob() {
    window.location.href = "hobbies.html";
}
// Hide and show paragraph 1 on about me page
$(document).ready(function () {
    $(".hidePar1").click(function () {
        $("#abtPar1").hide();
    });
    $(".showPar1").click(function () {
        $("#abtPar1").show();
    });
});
// Hide and show paragraph 2 on about me page
$(document).ready(function () {
    $(".hidePar2").click(function () {
        $("#abtPar2").hide();
    });
    $(".showPar2").click(function () {
        $("#abtPar2").show();
    });
});
// Hide and show paragraph 3 on about me page
$(document).ready(function () {
    $(".hidePar3").click(function () {
        $("#abtPar3").hide();
    });
    $(".showPar3").click(function () {
        $("#abtPar3").show();
    });
});