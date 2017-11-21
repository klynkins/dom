var car = { 
  name: 'Enterprise Car Rentals',
  carTypes: ['Economy', 'Midsize', 'Luxury'],
  economyAvailable: 175,
  midsizeAvailable: 85,
  luxuryAvailable: 60,
  economyPrice: '$70',
  midsizePrice: '$90',
  luxuryPrice: '$120'
}  

var rental = {
    economy: [],
    midsize: [],
    luxury: []
}

window.onload = function() {
    document.getElementById("busName").innerHTML = car.name;
};

function getCar() {
    var cars = document.getElementById("selectCar").value;
    switch (cars) {
        case "economy":
            car.economyAvailable--;
            document.getElementById("economyAvail").innerHTML = "Economy:" + car.economyAvailable;
            document.getElementById("econPrice").innerHTML = "Economy:" + car.economyPrice;
            break;
        case "midsize":
            car.midsizeAvailable--;
            document.getElementById("midsizeAvail").innerHTML = "Midsize:" + car.midsizeAvailable;
            document.getElementById("midPrice").innerHTML = "Midsize:" + car.midsizePrice;
            break;
        case "luxury":
            car.luxuryAvailable--;
            document.getElementById("luxuryAvail").innerHTML = "Luxury:" + car.luxuryAvailable;
            document.getElementById("luxPrice").innerHTML = "Luxury:" + car.luxuryPrice;
            break;
    }
}

function addRenter() {
    var selection = document.forms["renter"]["selectCar"].value;
    var renter = document.forms["renter"]["name"].value;
    console.log(selection, renter);
    if (selection == "blank") {
        alert("Please select car type");
        console.log(selection);
    }
    else if (renter == "") {
        alert("Must enter name");
        console.log(renter);
    }
    else {
        rental[selection].push({
            name: renter
        });
        document.getElementById("display").innerHTML = "Your reservation is complete";
        console.log(rental);
    }
    return false;
}

