function hello(name){
    console.log(`Merhaba ${name}`)
}

hello("JavaScript")


let input = document.getElementById('input');
let output = document.getElementById('output');

input.addEventListener('input', function(event) {
output.innerText = event.target.value.split('').join('');
});




let yellowball = document.getElementById("yellow");
let purpleBall = document.getElementById("purple");

yellowball.onclick = function() {
purpleBall.style.backgroundColor = "yellow";
}