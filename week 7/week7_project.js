var thePlanet = document.getElementById("planet")(
    function getData1(){
        fetch("http://swapi.dev/api/planets/10/")
        .then(res => res.json())
        .then(res => console.log(res))
        .catch((err) => console.log(err))
    })
    
    
    var teMovie = document.getElementById("movie")(
    function getData2(){
        fetch("http://swapi.dev/api/films/5/")
        .then(res => res.json())
        .then(res => console.log(res))
        .catch((err) => console.log(err))
    })
    
    
    var theResident = document.getElementById("resident")(
    function getData3(){
        fetch("http://swapi.dev/api/people/22/")
        .then(res => res.json())
        .then(res => console.log(res))
        .catch((err) => console.log(err))
    })
    