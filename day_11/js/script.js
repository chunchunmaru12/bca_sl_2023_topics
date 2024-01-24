//defination element
const firstName =document.getElementById("firstName")
const lastName =document.getElementById("lastName")
const username = document.getElementById("username")
const passkey = document.getElementById("passkey")
const errorMsg=document.getElementById("errorMsg")
const frm=document.getElementById("frm")
const showForm = document.getElementById("showForm")
//defining button
const btnReg = document.getElementById("btnReg")

//adding event listeners to button
// btnReg.addEventListener("click", function(){
//     console.log("data submitted")
// });
btnReg.addEventListener("click", function(e){
    if(firstName.value==="" || lastName.value==="" || username.value==="" || passkey.value===""){
        //use while submitting form
        //note stops from submission and shows error message
        e.preventDefault()
        errorMsg.innerHTML = "All fields are required"
    }
})
//use submit event on form
frm.addEventListener("submit",function(e){
    console.log("form submitted successfully")
})
//arrow function example
//shorter form of cuntion

//ordinary finction
function showMessage(){
    return "meow"
}

//arrow function example

const msg=()=>{
    return "meow2"
}

//if single return  function then
const message = () => "meow meow meow"

//displaying form with event and hidden property
//of element
//

showForm.addEventListener("click",()=>{

    frm.hidden = !frm.hidden
})

//exercise 
//1. make one div
//2. set its width 100% and height to 400px
//3. set background color to red
//4. set text color to white
//5. change background color with JS event
//6. make two button
//first button "random color" and second button "blue"
