//Pets Dropdown Menu Functionality
d3.selectAll("#petsAllowed").on("change", log);
function log() {
    let dropdownMenu = d3.select("#petsAllowed");
    let petsAllowed = dropdownMenu.property("value");
    console.log(petsAllowed);
}

// City Checkboxes Functionality
let cities = [];
// Select all checkbox elements
d3.selectAll(".cities").on("change", function () {
    // Change 'checked' attribute
    d3.select(this).attr('checked', this.checked);
    // Update cities list
    if (this.checked)
        cities.push(this.name);
    else {
        const index = cities.indexOf(this.name);
        cities.splice(index, 1);
    }
    console.log(cities);
});
// Price Range Sliders Functionality
// Select sliders
var minSlider = document.getElementById("minRange");
var maxSlider = document.getElementById("maxRange");

// Set price ranges
rent_low = 0;
rent_high = 20000;
minSlider.min = rent_low;
minSlider.max = rent_high;
maxSlider.min = rent_low;
maxSlider.max = rent_high;

// Set min Value: and update it on change
var minOutput = document.getElementById("minValue");
minOutput.innerHTML = minSlider.value;

minSlider.oninput = function () {
    minOutput.innerHTML = this.value;
}

// Set max Value: and update it on change
var maxOutput = document.getElementById("maxValue");
maxOutput.innerHTML = maxSlider.value;

maxSlider.oninput = function () {
    maxOutput.innerHTML = this.value;
}

// Creating the map object, centered on center of US
var myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 5
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// SQL Query once database has been setup and connected
//
// SELECT * FROM {database}
// WHERE pets = petsAllowed AND
// price > minOutput.innerHTML AND price < maxOutput.innerHTML AND
// city IS IN cities;

// hardcoded file path to csv
filePath = "/resources/housing_majors.csv"

// Get the data with d3.
d3.csv(filePath).then(function (response) {

    // Create a new marker cluster group.
    var markers = L.markerClusterGroup();

    // Loop through the data.
    for (var i = 0; i < response.length; i++) {

        // Set the data location property to a variable.
        var location = response[i].id;
        // Check for the location property.
        if (location) {

            // Add a new marker to the cluster group, and bind a popup.
            markers.addLayer(L.marker([response[i].lat, response[i].long])
                .bindPopup(response[i].description));
        }

    }

    // Add our marker cluster layer to the map.
    myMap.addLayer(markers);

});
