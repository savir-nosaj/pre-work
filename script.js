let query = document.getElementById('result');

function callFilms() {
    let request = "https://www.swapi.tech/api/people/";
    query.innerHTML = "";
    
    fetch(request)
    .then(res => res.json())
    .then(data => {
        for(x in data.results) {
            // query.innerHTML += JSON.stringify(x.results);
            query.innerHTML += JSON.stringify(data.results[x].name);
            // console.log(data.results[x].name);
        }
        // query.innerHTML = JSON.stringify(data);
        // console.log(data.results[0].name);
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
            // query.innerHTML += JSON.stringify(x.results);
            query.innerHTML += JSON.stringify(data.results[x].name);
            // console.log(data.results[x].name);
        }
        // query.innerHTML = JSON.stringify(data);
        // console.log(data.results[0].name);
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
            // query.innerHTML += JSON.stringify(x.results);
            query.innerHTML += JSON.stringify(data.results[x].name);
            // console.log(data.results[x].name);
        }
        // query.innerHTML = JSON.stringify(data);
        // console.log(data.results[0].name);
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
            // query.innerHTML += JSON.stringify(x.results);
            query.innerHTML += JSON.stringify(data.results[x].name);
            // console.log(data.results[x].name);
        }
        // query.innerHTML = JSON.stringify(data);
        // console.log(data.results[0].name);
    })
    .catch(err => console.error(err))
}
