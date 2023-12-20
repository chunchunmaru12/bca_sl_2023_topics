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

//3. with parameter and return type
function checkResult(checked_value){
    let result=""
    switch(checked_value){
        case 1:
            return result.concat(result,"You're under average")
        case 2:
            return result.concat(result,"You're average")
        case 3:
            return result.concat(result,"You're good")
        case 4:
            return result.concat(result,"You're best")
        case 5:
            return result.concat(result,"You're excellent")
        default:
            return result.concat(result,"you have no record available")
    }
}
console.log("Checking user status : "+checkResult(3))


//4.without parameters and return type
function showUserGoal(){
    let goal = 45
    let goal_status=""
    if(goal>=0 && goal <= 39.99){
        goal_status="Beginner level"
    }else if(goal>=40 && goal <= 64.99){
        gial_status="Intermediate Level"
    }else if(goal>=65 && goal <=89.99){
        goal_status="Advanced Level"
    }else if(goal>=90 && goal <=100){
        goal_status="Expert level"
    }else{
        goal_status="Plese set your goal between 0-100"
    }
    return goal_status
}

console.log("User goal checker: "+showUserGoal())