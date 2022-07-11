const button = document.getElementById('button');
const ResultMessages = document.getElementById('result-messages');
var inputCity = document.getElementById("city-to-add");

function getCitiesFromLocalStorage() {
    debugger;
    let cities = localStorage.getItem("CITIES");
    if (cities) {
        cities = JSON.parse(cities);
    } else {
        cities = [];
    }
    return cities;

}

function addNewCityToLocalStorage(newCity) {
    let cities = getCitiesFromLocalStorage();
    cities.push(newCity);
    localStorage.setItem("CITIES", JSON.stringify(cities));
}

function cargarCiudad() {
    cities = getCitiesFromLocalStorage();
    ResultMessages.style.display = 'block';
    var newCity = inputCity.value;

    for (var i = 0; i < cities.length; i++) {
        if (newCity === null || newCity.length === 0) {
            console.log("No ingresó una ciudad");
            ResultMessages.innerHTML = '<h4>Error: La ciudad no se encuentra en la API o se<br> produjo un error al consultar</h4>';
            return false;
        }
        if (cities[i] === newCity) {
            console.log("Se encuentró la ciudad");
            ResultMessages.innerHTML = '<h5>La ciudad ingresada ya se encuentra almacenada</h5>';
            return;
        }
        if (newCity != "" || newCity != cities[i] || newCity.length === 0) {
            console.log("No se encontró la ciudad");
            addNewCityToLocalStorage(newCity);
            ResultMessages.innerHTML = '<h3>Ciudad agregada con éxito</h3>';
            return;
        }
    }
}