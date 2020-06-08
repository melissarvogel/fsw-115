var apollo4details = 
    
        [
            "id: 1376",
            "name: Saturn V | Apollo 4",
            "windowstart: November 9, 1967 12:00:01 UTC",
            "windowend: November 9, 1967 12:00:01 UTC",
            "net: November 9, 1967 12:00:01 UTC",
            "location: Kennedy Space Center, FL, USA",
            "launchpad: Launch Complex 39A, Kennedy Space Center, FL",
            "company: SpaceX, NASA" ]


var apollo4List = document.getElementById("apollo4")  

for (var i = 0; i < apollo4details.length; i++){
    var newDetail = document.createElement("li")
    newDetail.textContent = apollo4details[i]
    apollo4List.append(newDetail)  
} 

