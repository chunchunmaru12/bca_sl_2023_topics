let expense=[700,1000,2000,1000];
let income=[30000,3000,300];
function tds(){
    return income[0]*0.01;
}
function pf(){
    return income[0]*0.1;
}
function total_expense(){
    let total=0;
    for(var i=0;i<expense.length;i++){
        total+=expense[i];
    }
    return total;
}
function total_income(){
    let total=0;
    for(var i=0;i<income.length;i++){
        total+=income[i];
    }
    return total;
}
console.log("TDS: "+tds())
console.log("Provident fund: "+pf());
let total_gross;
total_gross=total_income()-total_expense();
console.log("The total gross is: "+total_gross)
