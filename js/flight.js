function addStopFilter(stopsCount) {

    var search_results = document.getElementsByClassName("search_results");
    var stops = document.getElementsByClassName("stopsP");
    console.log(stops.length);
    console.log(search_results.length);

    for(var i = 0; i < search_results.length; i++) {

        var val = stops[i].innerHTML;
        console.log(val);
        console.log(stopsCount);
        if(stopsCount != val[0]) {
            search_results[i].style.visibility="hidden";
        }
        else {
            search_results[i].style.visibility= "visible";
        }
    }
  }

function onNavFlightClick() {
    window.location.href = "flight.html";
}

function onNavHotelClick() {
    window.location.href = "hotel.html";
}

function onNavHolidayHomesClick() {
    window.location.href = "homes.html";
}