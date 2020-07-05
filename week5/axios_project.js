
//PUT

const update= {
    title: "My first TODO!",
    description: "This is my first TODO."
}

axios.put("https://api.vschool.io/melissavogel/todo5eed4eb8398e4004c7772d36", update)
.then(response => console.lof(response.data))
.catch(error => console.log(error))

const URL= "https://api.vschool.io/melissavogel/todo/${...id}"

//POST

const todoStuff = document.todoStuff;

todoStuff.addeventlistner("submit", function(event){
    event.preventDefault()

    const makeNew ={
        title: todoStuff.title.value,
        description: todoStuff.description.value,
        img: todoStuff.img.value

    }

    axios.post("https://api.vschool.io/melissavogel/todo", todoStuff)
    .then(console.log(response.data))
    .catch(error)
})

//DELETE

const remove = axios.delete("https://api.vschool.io/melissavogel/todo/5eed4ec9398e4004c7772d39", {data})
.then(response.data)
.catch(error)