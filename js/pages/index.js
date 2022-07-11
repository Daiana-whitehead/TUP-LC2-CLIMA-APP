var city = document.getElementById('card');
var Button = document.getElementById("btn");

function getCitiesFromLocalStorage() {
    let cities = localStorage.getItem("CITIES");
    debugger;
    if (cities) {
        cities = JSON.parse(cities);
    } else {
        cities = [];
    }
    return cities;
}

window.addEventListener("load", function() {
    var cities = getCitiesFromLocalStorage();
    var select = document.getElementById("select-City");
    var option = document.createElement("option");
    for (var i = 0; i < cities.length; i++) {
        var city = cities.value;
        city = option.value;
        city = option.text;
        select.appendChild(option);
    }
})

async function ConsultarApi(city) {
    var cities = getCitiesFromLocalStorage();
    var city = cities.value;
    const apiKey = "a690a5feb5117b98758388b29ebb4fe3";
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`)
        .then((response) => response.json())
        .then(data => {
            const { main, name, wind } = data;
            city.innerHTML = `
            <h3>${name}</h3>
            <img src="img/01d@2x.png" alt="" />
            <p>Temperatura: ${main['temp']}º</p>
            <p>Sensación térmica: ${main['feels_like']}º</p>
            <p>Humedad: ${main['humidity']}%</p>
            <p>Velocidad del viento: ${wind['speed']} km/h</p>
            <p>Presión: ${main['pressure']}P</p>
        `
        })
        .then((response) => console.log(response))
        .then((error) => console.log(error))
}