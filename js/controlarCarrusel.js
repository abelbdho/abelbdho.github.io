/*CARRUSEL*/

$(function () {
    $('#carrusel').carousel({
        interval:2000,
        pause: "false"
    });
    
    $('#playButton').click(function () {
        $('#carrusel').carousel('cycle');
    });
    $('#pauseButton').click(function () {
        $('#carrusel').carousel('pause');
    });
});
