//exercise 
//1. make one div
//2. set its width 100% and height to 400px
//3. set background color to red
//4. set text color to white
//5. change background color with JS event
//6. make two button
//first button "random color" and second button "blue"
const box=document.getElementById("box")
const first=document.getElementById("first")
const second=document.getElementById("second")
var color;
const rand = () =>{
    color=Math.floor(Math.random() * 255)
    
    return color;
}
var rgb='rgb(100,200,200)'
box.style.width("100%")
box.style.height("400px")
box.style.backgroundColor("RED")
box.style.color("white")
first.addEventListener("click", function(e){
    e.preventDefault()
    box.style.backgroundColor("RED")
})
second.addEventListener("click", function(){
    e.preventDefault()
    box.style.backgroundColor("BLUE")
})
