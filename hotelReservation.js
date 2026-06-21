const rooms = {
1:["101","102","103","104","105","106","107","108","109","110"],
2:["201","202","203","204","205","206","207","208","209","210"],
3:["301","302","303","304","305","306","307","308","309","310"],
4:["401","402","403","404","405","406","407","408","409","410"],
5:["501","502","503","504","505","506","507","508","509","510"],
6:["601"],
7:["701"]
};

const floorSelect = document.getElementById("floorSelect");
const roomSelect = document.getElementById("roomSelect");

floorSelect.addEventListener("change", function(){

roomSelect.innerHTML =
'<option value="">Select Room</option>';

rooms[this.value].forEach(room => {

const option =
document.createElement("option");

option.value = room;
option.textContent = room;

roomSelect.appendChild(option);

});

});

document
.getElementById("hotelReservationForm")
.addEventListener("submit", function(e){

e.preventDefault();

document
.getElementById("reservationMessage")
.innerHTML =
"<h3>Reservation Request Submitted Successfully!</h3>";

});