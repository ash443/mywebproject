function headerButtonClicked(button) {

    let buttonText = button.firstElementChild.firstChild.textContent;
  
    if (buttonText === "Flights") window.location = "./flight.html";
    else if (buttonText === "Hotels") window.location = "./hotel.html";
    else if (buttonText === "Holiday Homes") window.location = "./homes.html";
    else if (buttonText === "Restaurants") window.location = "./restaurant.html";
    else if (buttonText === "Car Hire") window.location = "./carhire.html";
  
}