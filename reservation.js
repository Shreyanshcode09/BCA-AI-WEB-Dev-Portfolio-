document.getElementById("reservationForm")
.addEventListener("submit", async function(e){

e.preventDefault()

let formData = new FormData(this)

let response = await fetch("reservation.php",{
method:"POST",
body:formData
})

let result = await response.text()

document.getElementById("response").innerHTML = result

})