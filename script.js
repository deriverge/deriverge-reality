$(window).on("pageshow", function(event) {
    if (event.originalEvent.persisted) {
        window.location.reload(); // Přinutit stránku se znovu načíst
    }
});

$(document).ready(function() {
    // Použijeme hover efekt na hlavní položku "Služby"
    $(".dropdown").hover(
        function() {
            // Zobrazí menu pomocí slideDown při najetí
            $(this).children(".dropdown-menu").stop(true, true).slideDown(300);
        },
        function() {
            // Skryje menu pomocí slideUp při opuštění
            $(this).children(".dropdown-menu").stop(true, true).slideUp(300);
        }
    );
});
