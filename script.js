$(window).on("pageshow", function(event) {
    if (event.originalEvent.persisted) {
        window.location.reload(); // Přinutit stránku se znovu načíst
    }
});

$(document).ready(function() {
    $(".dropdown").click(
        function() {
            $(this).children(".dropdown-menu").stop(true, true).slideToggle(300);
        }
    );
});

$(document).click(function(event) {
    // Pokud není kliknuto na .hamburger nebo #mobileMenuPage, zavři menu
    if (!$(event.target).closest('.hamburger, #mobileMenuPage').length) {
        $("#mobileMenuPage").stop(true, true).slideUp(300);
    }
});

$(document).scroll(function(event) {
    // Pokud není kliknuto na .hamburger nebo #mobileMenuPage, zavři menu
    if (!$(event.target).closest('.hamburger, #mobileMenuPage').length) {
        $("#mobileMenuPage").stop(true, true).slideUp(300);
    }
});

// Pro samotné hamburger menu zachováme původní akci
$(".hamburger").click(function(event) {
    event.stopPropagation(); // Zabráníme šíření události kliknutí
    $("#mobileMenuPage").stop(true, true).slideToggle(300);
});




//scroll top button start
const scrollButton = document.getElementById("scrollTopButton");
let setPosition = 200;

window.addEventListener("scroll", function() {
    
    let currentPosition = window.pageYOffset || document.documentElement.scrollTop;
    if (currentPosition > setPosition){
        scrollButton.style.opacity = "1";
    }
    else{
        scrollButton.style.opacity = "0";
    }
});

function nahoru() {
    console.log("scroll top aktivovan");
    window.scrollTo({top: 0, behavior: "smooth"});
}


//scroll top button konec

