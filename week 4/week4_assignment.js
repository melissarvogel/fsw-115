axios.get("https://api.vschool.io/melissavogel/todo")
    .then(response => console.log(response.data))
    .catch(error => console.log(error))

const toDo = response.data
if(toDo === true){
         document.write(str.strike());
         alert(str.strike());
} else if (toDo === false){
    console.log(response.data)
}

