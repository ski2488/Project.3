

function updateGraphs() {
    var image = document.getElementById("cityStat");
    if (document.getElementById("dataSelector").value == "CITY") {
        document.getElementById("graphs").innerHTML = `
        <img src="/img/Log Price.png">
        <img src="/img/Price per Sqft vs U.S. News Overall Score.png">
        <img src="/img/Price per sqft.png">
        `;
    }
    else if (document.getElementById("dataSelector").value == "CAPITA") {
        document.getElementById("graphs").innerHTML = `
        <img src="/img/Price per Sqft vs Density.png">
        <img src="/img/Price per Sqft vs Listings per 1k Capita.png">
        <img src="/img/Price per Sqft vs Per_Capita_Income_2020.png">
        `;
    }
    else if (document.getElementById("dataSelector").value == "WEATHER") {
        document.getElementById("graphs").innerHTML = `
        <img src="/img/Price per Sqft vs Highest Monthly Avg High Temp.png">
        <img src="/img/Price per Sqft vs Lowest Monthly Avg High Temp.png">
        <img src="/img/Price per Sqft vs Avg Annual Rainfall.png">
        <img src="/img/Price per Sqft vs Price per Sqft vs % Water.png">
        `;
    }
    else if (document.getElementById("dataSelector").value == "CRIME") {
        document.getElementById("graphs").innerHTML = `
        <img src="/img/Price per Sqft vs Violent Crime Rate.png">
        <img src="/img/Price per Sqft vs Property Crime Rate.png">
        `;
    }
    else {
        document.getElementById("graphs").innerHTML = `
        <img src="/img/Log Price.png">
        <img src="/img/Price per Sqft vs Avg Annual Rainfall.png">
        <img src="/img/Price per Sqft vs Density.png">
        <img src="/img/Price per Sqft vs Highest Monthly Avg High Temp.png">
        <img src="/img/Price per Sqft vs Listings per 1k Capita.png">
        <img src="/img/Price per Sqft vs Lowest Monthly Avg High Temp.png">
        <img src="/img/Price per Sqft vs Price per Sqft vs % Water.png">
        <img src="/img/Price per Sqft vs Per_Capita_Income_2020.png">
        <img src="/img/Price per Sqft vs Property Crime Rate.png">
        <img src="/img/Price per Sqft vs U.S. News Overall Score.png">
        <img src="/img/Price per Sqft vs Violent Crime Rate.png">
        <img src="/img/Price per sqft.png">
        `
    }
}