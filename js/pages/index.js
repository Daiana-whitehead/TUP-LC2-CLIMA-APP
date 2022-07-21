var city = document.getElementById('card');
var Button = document.getElementById("btn");
var select = document.getElementById("select-City");
const apiKey = "a8d9ba9e35a46c62c19d21bf270866b5";
const loading = document.getElementById("div-carga");

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

function newOption() {
    var cities = getCitiesFromLocalStorage();
    var arraay = []

    for (let i = 0; i < cities.length; i++) {
        if (arraay.includes(cities[i])) {
            console.log("La ciudad ya se encuentra almacenada " + cities[i]);
            arraay.reduce;
        } else {
            console.log(arraay);
            for (arraay in cities) {
                var opcion = document.createElement("option");
                opcion.value = `${cities[arraay]}`;
                opcion.textContent = `${cities[arraay]}`;
                select.appendChild(opcion);
            }
        }
    }



}

newOption();

async function ConsultarApi(city) {
    var cities = getCitiesFromLocalStorage();
    var city = cities.value;
    loading.removeAttribute("style");
    loading.setAttribute("style", "display: block");
    fetch('https://api.openweathermap.org/data/2.5/weather?q={' + city + '}&appid={' + apiKey + '}&units=metric&lang=es')
        .then((response) => response.json())
        .then(data => mostrarCiudad(data))
}

function mostrarCiudad() {
    let codigo;

    if (codigo == "404") {
        ciudad.value = ""
        loading.style.display = "flex";
        setTimeout(() => {
            loading.style.display = "none";
        }, 2000);
        setTimeout(() => {
            error_mesage()
        }, 2000);
    } else {
        let ciudad = document.getElementById("citys");
        let temp = document.getElementById("temp");
        let sens = document.getElementById("sensacion");
        let hum = document.getElementById("humedad");
        let viento = document.getElementById("viento");
        let pres = document.getElementById("presion");
        let divCard = document.getElementById("card").style.display = "none";
        setTimeout(() => {
            loading.style.display = "none";
        });
        setTimeout(() => {
            document.getElementById("card").style.display = "block";
        });
        divCard.innerHTML = `<h3>${ciudad}</h3>
        <img src="img/01d@2x.png")
        <p>Temperatura: ${temp}º</p>
        <p>Sensación térmica: ${sens}º</p>
        <p>Humedad: ${hum}%</p>
        <p>Velocidad del viento: ${viento} km/h</p>
        <p>Presión: ${pres}P</p>`


    }
}
Button.addEventListener("click", (e) => {
    e.preventDefault();
    let citys = select.value;
    mostrarCiudad(citys);
})