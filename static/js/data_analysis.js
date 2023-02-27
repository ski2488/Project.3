
const cityStats = {
    "CITY": "../img/Log Price.png", // CITY
    "CAPITA": "../img/", // CAPITA
    "WEATHER": "../img/", // WEATHER
    "CRIME": "../img/", // CRIME
};

function updatecityStat() {
    var image = document.getElementById("cityStat");

    image.src = cityStats[document.getElementById("citySelector").value];
}