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

$(".hamburger").click(function(){
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

