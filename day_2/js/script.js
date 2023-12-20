/*
Variable is in JS
to define variable in JS we use 'var' or 'let'
'const' is used to define constant variable and cannot be changed
*/ 

//example
var num =12
let user_status=true
//to print in console
console.log(num)
console.log(user_status)

/*NOTE: 
1. var is use for global scope and let is use for block scope
2. variable defined with var can be re-declared and update
3. variable defined with let can be updated but cannot re declare


variable re declaration 
note: variable cannot be access before it is defined so whenever varibale is re declared
it depends upon the scope it is being declared
*/
let msg="Hello All!"
function getMessage(){
    //u cannot access msg before let so console.log(msg) on this line wont run and show error
    //but the same in var we can access it anywhere but the value is stored as undefined
    let msg="Wowo"
    console.log(msg)
}
Hello()
 function Hello(){
    console.log("za warudoo")
}
getMessage();
console.log(msg)