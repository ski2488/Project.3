d3.selectAll("#petsAllowed").on("change", log);
function log() {
    let dropdownMenu = d3.select("#petsAllowed");
    let petsAllowed = dropdownMenu.property("value");
    //console.log(petsAllowed);
}
let cities = [];
d3.selectAll("#cities").on("change", updateCities);
function updateCities() {
    console.log(d3.selectAll("#cities").length);
    for (i = 0; i < d3.selectAll("#cities").length; i++){
        if (d3.selectAll("#cities")[i].value === true) {
            console.log(this.name);
            cities.push(this.name);
        }
    }
    console.log(cities);
}