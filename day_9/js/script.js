//DOM - Element 
//getElementById() - we can access HTML element by attribute
//i.e. id
//example
const title = document.getElementById("title")
const content = document.getElementById("content")
const button = document.getElementById("button")

//changes
title.innerHTML="HTML DOM- JS"
content.innerHTML="JS DOM | HTML Element property"
//here innerHTML property is use to manipulate data inside
//HTML element
//style
button.style.color="WHITE"
button.style.fontFamily="open-sans"
button.style.backgroundColor="black"
button.style.border="0"
button.style.cursor="pointer"
button.style.padding="5px"
button.style.boxShadow="2px"
button.style.borderRadius="50px"

//classlist property
//add() and remove() method
button.classList.add("button")

//remove() method removes class of element
