document.querySelector("button").addEventListener("click", function () {
    console.log("button clicked");

    fetch("https://api.wheretheiss.at/v1/satellites/25544")
        .then(function (response) {
            return response.json();
            
        })
        .then(function (response) {
            console.log(response.latitude);
            document.querySelector("#lat-val").textContent=response.latitude.toFixed(2)+"°";
            document.querySelector("#long-val").textContent=response.longitude.toFixed(2)+"°";
            document.querySelector("#alt-val").textContent=response.altitude.toFixed(2) +" km";
        });
});
