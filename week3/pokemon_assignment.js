const xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        const pokedata = xhr.responseText
        const parsedata = JSON.parse(pokedata)
        showPokemon(parsedata)
    }
}

function showPokemon(pokemon){
    const h1 = document.createElement("h1")
    h1.textContent = parsedata.name
    document.body.appendChild(h1)

}