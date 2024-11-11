let query = document.getElementById('result');

function callFilms() {
    let request = "https://www.swapi.tech/api/films/";
    query.innerHTML = "";
    
    fetch(request)
    .then(res => res.json())
    .then(data => {
        for(x in data.result) {
            query.innerHTML += `<p class="font-size-medium no-margin-padding"><a class="query-result white" href="` + request + data.result[x].uid + `">` + data.result[x].properties.title + `</a></p>`;
        }
        console.log(data.result);
    })
    .catch(err => console.error(err))
}

function callPeople() {
    let request = "https://www.swapi.tech/api/people/";
    query.innerHTML = "";
    
    fetch(request)
    .then(res => res.json())
    .then(data => {
        for(x in data.results) {
            query.innerHTML += `<p class="font-size-medium no-margin-padding"><a class="query-result white" href="` + request + data.results[x].uid + `">` + data.results[x].name + `</a></p>`;
        }
        console.log(data.results);
    })
    .catch(err => console.error(err))
}

function callPlanets() {
    let request = "https://www.swapi.tech/api/planets/";
    query.innerHTML = "";
    
    fetch(request)
    .then(res => res.json())
    .then(data => {
        for(x in data.results) {
            query.innerHTML += `<p class="font-size-medium no-margin-padding"><a class="query-result white" href="` + request + data.results[x].uid + `">` + data.results[x].name + `</a></p>`;
        }
        console.log(data.results);
    })
    .catch(err => console.error(err))
}

function callSpecies() {
    let request = "https://www.swapi.tech/api/species/";
    query.innerHTML = "";
    
    fetch(request)
    .then(res => res.json())
    .then(data => {
        for(x in data.results) {
            query.innerHTML += `<p class="font-size-medium no-margin-padding"><a class="query-result white" href="` + request + data.results[x].uid + `">` + data.results[x].name + `</a></p>`;
        }
        console.log(data.results);
    })
    .catch(err => console.error(err))
}

function callStarships() {
    let request = "https://www.swapi.tech/api/starships/";
    query.innerHTML = "";
    
    fetch(request)
    .then(res => res.json())
    .then(data => {
        for(x in data.results) {
            query.innerHTML += `<p class="font-size-medium no-margin-padding"><a class="query-result white" href="` + request + data.results[x].uid + `">` + data.results[x].name + `</a></p>`;
        }
        console.log(data.results);
    })
    .catch(err => console.error(err))
}

function callVehicles() {
    let request = "https://www.swapi.tech/api/vehicles/";
    query.innerHTML = "";
    
    fetch(request)
    .then(res => res.json())
    .then(data => {
        for(x in data.results) {
            query.innerHTML += `<p class="font-size-medium no-margin-padding"><a class="query-result white" href="` + request + data.results[x].uid + `">` + data.results[x].name + `</a></p>`;
        }
        console.log(data.results);
    })
    .catch(err => console.error(err))
}
