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

