console.log("WRITE ME CONSLOE TEST")

let imgBox = document.getElementById("profileBox");

let loadFile = function(event){
     imgBox.src = URL.createObjectURL(event.target.files[0]) 
}