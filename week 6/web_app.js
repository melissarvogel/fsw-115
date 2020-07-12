
var raptor = document.getElementById("cameraman")(
function getData1(){
    fetch("https://rickandmortyapi.com/api/character/262")
    .then(res => res.json())
    .then(res => console.log(res))
    .catch((err) => console.log(err))
})


var thePlanet = document.getElementById("planet")(
function getData2(){
    fetch("https://rickandmortyapi.com/api/location/20")
    .then(res => res.json())
    .then(res => console.log(res))
    .catch((err) => console.log(err))
})


var trflorkian = document.getElementById("alien")(
function getData3(){
    fetch("https://rickandmortyapi.com/api/character/362")
    .then(res => res.json())
    .then(res => console.log(res))
    .catch((err) => console.log(err))
})

