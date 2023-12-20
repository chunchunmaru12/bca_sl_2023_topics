//basic functoin
 

//rule:
/*1. must invoke inorder to execute the code inside the function
2. follow naming conventions to define function name

Type of user defined function
1. Without parameter and return type
*/
function showMessage(){
    let message="Have a nice day"
    console.log("Message"+message)
}
//invoking function
showMessage()

//2. with parameter and no return type
function checkUserType(userType,department){
    let user_type="ADMIN"
    let user_department="HEADQUARTER"
    if(user_type===userType.toUpperCase()&& user_department===department.toUpperCase()){
        console.log("Welcome to DAV Admin Panel")
    }else{
        console.log("Message: Access denied")
    }
}

//passing arguments to function to parameters
let ut="admin"
let dept="Headquater"
checkUserType(ut,dept)