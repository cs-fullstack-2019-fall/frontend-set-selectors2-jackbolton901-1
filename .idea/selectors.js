let first = document.getElementById("first");
console.log(first);
let first1 = document.querySelector("special")
console.log(first)
let first2 = document.querySelector("p")
console.log(first2)


// problem2
let quer= document.querySelector(".special");
console.log(quer)
let quer2= document.querySelectorAll(".special");
console.log(quer2[0])


// problem3
let blue = document.getElementsByTagName("h1");
for(let b = 0; b < blue.length; b++){
    blue[b].style.color="blue";
}


// problem4
let yell = document.getElementsByTagName("p");
yell[3].style.color="yellow"

