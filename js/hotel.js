"use strict";
$(document).ready( () => {
    let nextSlide = $("#slides img:first-child");
        
    // start slide show
    setInterval( () => {
        $("#slide").fadeOut(1000, () => {
                if (nextSlide.next().length == 0) {
                    nextSlide = $("#slides img:first-child");
                }
                else {
                    nextSlide = nextSlide.next();
                }
                const nextSlideSource = nextSlide.attr("src");
                $("#slide").attr("src", nextSlideSource).fadeIn(1000);
            });    // end fadeOut()
    },
    5000);         // end setInterval()
});

function onNavFlightClick() {
    window.location.href = "flight.html";
}

function onNavHotelClick() {
    window.location.href = "hotel.html";
}

function onNavHolidayHomesClick() {
    window.location.href = "homes.html";
}
